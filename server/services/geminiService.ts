import { GoogleGenAI, Modality } from "@google/genai";
import * as fs from "fs";
import * as path from "path";

const ai = new GoogleGenAI({ 
  apiKey: process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || "" 
});

export interface GeneratedPost {
  title: string;
  body: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  tags: string[];
  slug: string;
}

export interface ImageGenerationOptions {
  width?: number;
  height?: number;
  format?: string;
}

export class GeminiService {
  // Text generation for blog posts
  async generateBlogPost(topicKeyword: string): Promise<GeneratedPost> {
    const prompt = `
Sarlavha: ${topicKeyword}
Talab: 200–300 so'z atrofida, SEO-optimallashtirilgan blog post. Auditoriya: kichik va o'rta biznes, o'zbek tilida. 

Struktur: 
- Kirish (1 paragraf)
- 3 kichik bo'lim (har biri 2-3 jumla)
- Xulosa + 1 CTA (biz bilan bog'laning)

So'zlarda muhim keyword: ${topicKeyword}

Javobni JSON formatida bering:
{
  "title": "Blog post sarlavhasi",
  "body": "To'liq blog post matni",
  "excerpt": "Qisqa tavsif",
  "metaTitle": "SEO meta title (max 60 belgi)",
  "metaDescription": "Meta description (120-160 belgi)",
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"]
}
`;

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        config: {
          responseMimeType: "application/json",
          temperature: 0.7,
        },
        contents: prompt,
      });

      const rawJson = response.text;
      if (!rawJson) {
        throw new Error("Empty response from Gemini");
      }

      const data = JSON.parse(rawJson);
      
      // Generate slug from title
      const slug = data.title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();

      return {
        ...data,
        slug: slug,
      };
    } catch (error) {
      throw new Error(`Failed to generate blog post: ${error}`);
    }
  }

  // Image generation for blog posts
  async generateOGImage(title: string, outputPath: string): Promise<string> {
    const prompt = `Create a clean, flat vector OG image for the blog post titled "${title}". Use company colors: #1E40AF (deep blue) and #FACC15 (gold). Include the gear+lightning icon (center-left) and short title text (shorten if needed). Size 1200x630, PNG, transparent background optional.`;

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash-preview-image-generation",
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        config: {
          responseModalities: [Modality.TEXT, Modality.IMAGE],
        },
      });

      const candidates = response.candidates;
      if (!candidates || candidates.length === 0) {
        throw new Error("No image generated");
      }

      const content = candidates[0].content;
      if (!content || !content.parts) {
        throw new Error("No content in response");
      }

      for (const part of content.parts) {
        if (part.inlineData && part.inlineData.data) {
          const imageData = Buffer.from(part.inlineData.data, "base64");
          
          // Ensure directory exists
          const dir = path.dirname(outputPath);
          if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
          }
          
          fs.writeFileSync(outputPath, imageData);
          return outputPath;
        }
      }

      throw new Error("No image data found in response");
    } catch (error) {
      throw new Error(`Failed to generate image: ${error}`);
    }
  }

  // Generate Telegram post content
  async generateTelegramPost(title: string, excerpt: string, postUrl: string): Promise<string> {
    const template = `${title}

${excerpt}

👀 To'liq: ${postUrl}
📩 Biz bilan bog'lanish: t.me/AutoGenixSupport`;

    return template;
  }

  // Content moderation check
  async moderateContent(text: string): Promise<{ needsReview: boolean; reason?: string }> {
    const prompt = `O'zbek tilida yozilgan quyidagi matnni tekshiring va profanity yoki nomaqbul kontent borligini aniqlang. Faqat JSON formatida javob bering:

Matn: "${text}"

JSON format:
{
  "needsReview": boolean,
  "reason": "string yoki null"
}`;

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        config: {
          responseMimeType: "application/json",
          temperature: 0.1,
        },
        contents: prompt,
      });

      const rawJson = response.text;
      if (!rawJson) {
        return { needsReview: false };
      }

      const data = JSON.parse(rawJson);
      return data;
    } catch (error) {
      console.error("Content moderation failed:", error);
      // Default to requiring review if moderation fails
      return { needsReview: true, reason: "Moderation service error" };
    }
  }
}

export const geminiService = new GeminiService();
