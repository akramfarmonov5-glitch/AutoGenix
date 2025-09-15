import * as cron from "node-cron";
import { storage } from "../storage";
import { geminiService } from "../services/geminiService";
import { telegramService } from "../services/telegramService";
import { storageAdapter } from "../services/storageAdapter";
import { InsertJobLog } from "@shared/schema";

export class SchedulerService {
  private maxDailyImages: number;
  private isRunning: boolean = false;

  constructor() {
    this.maxDailyImages = parseInt(process.env.MAX_DAILY_IMAGES || "50", 10);
    this.setupCronJobs();
  }

  private setupCronJobs(): void {
    // Blog post generation every hour from 07:00 to 21:00
    cron.schedule("0 7-21 * * *", async () => {
      await this.generateBlogPost();
    });

    // Telegram posts at specific marketing hours
    const telegramHours = ["9", "12", "15", "18", "20"];
    telegramHours.forEach(hour => {
      cron.schedule(`0 ${hour} * * *`, async () => {
        await this.sendTelegramPost();
      });
    });

    console.log("Scheduler jobs initialized");
  }

  private async generateBlogPost(): Promise<void> {
    if (this.isRunning) {
      console.log("Another job is running, skipping...");
      return;
    }

    this.isRunning = true;
    const jobLog: InsertJobLog = {
      type: "blog_post",
      detail: "Scheduled blog post generation",
      status: "pending",
    };

    try {
      await storage.createJobLog(jobLog);

      // Check daily image limit
      const today = new Date();
      const dailyImageCount = await storage.getDailyImageCount(today);
      
      // Generate topic keywords (could be from a predefined list or AI-generated)
      const topics = [
        "AI biznes avtomatizatsiya",
        "kontent marketing strategiya",
        "social media avtomatizatsiya",
        "telegram bot yaratish",
        "SEO optimizatsiya",
        "raqamli marketing",
        "AI text generation",
        "biznes jarayonlari",
        "startup rivojlantirish",
        "kichik biznes marketing"
      ];
      
      const randomTopic = topics[Math.floor(Math.random() * topics.length)];
      
      // Generate blog post content
      const postContent = await geminiService.generateBlogPost(randomTopic);
      
      // Check content moderation
      const moderation = await geminiService.moderateContent(postContent.body);
      
      let imageUrl: string | undefined;
      
      // Generate image if under daily limit
      if (dailyImageCount < this.maxDailyImages) {
        try {
          const timestamp = Date.now();
          const fileName = `og-image-${timestamp}.png`;
          const imagePath = `public/uploads/${fileName}`;
          
          await geminiService.generateOGImage(postContent.title, imagePath);
          imageUrl = await storageAdapter.uploadFile(fileName, require('fs').readFileSync(imagePath));
          
          await storage.createImage({
            url: imageUrl,
            prompt: `OG image for: ${postContent.title}`,
            filename: fileName,
          });
        } catch (imageError) {
          console.error("Image generation failed:", imageError);
          // Continue without image
        }
      }

      // Create post
      const post = await storage.createPost({
        title: postContent.title,
        slug: postContent.slug,
        body: postContent.body,
        excerpt: postContent.excerpt,
        metaTitle: postContent.metaTitle,
        metaDescription: postContent.metaDescription,
        tags: postContent.tags,
        imageUrl: imageUrl,
        status: moderation.needsReview ? "review" : "published",
        needsReview: moderation.needsReview,
      });

      await storage.createJobLog({
        type: "blog_post",
        detail: `Blog post created: ${post.title}`,
        status: "success",
      });

      console.log(`Blog post created: ${post.title}`);
    } catch (error) {
      await storage.createJobLog({
        type: "blog_post",
        detail: "Blog post generation failed",
        status: "error",
        errorMessage: error instanceof Error ? error.message : String(error),
      });
      console.error("Blog post generation failed:", error);
    } finally {
      this.isRunning = false;
    }
  }

  private async sendTelegramPost(): Promise<void> {
    try {
      await storage.createJobLog({
        type: "telegram_post",
        detail: "Scheduled Telegram post",
        status: "pending",
      });

      // Get a recent published post
      const recentPosts = await storage.getPublishedPosts(1, 0);
      
      if (recentPosts.length === 0) {
        throw new Error("No published posts available for Telegram");
      }

      const post = recentPosts[0];
      const postUrl = `${process.env.SITE_URL || 'https://autogenix.uz'}/blog/${post.slug}`;
      
      const telegramContent = await geminiService.generateTelegramPost(
        post.title,
        post.excerpt || "",
        postUrl
      );

      await telegramService.sendToChannel(telegramContent, post.imageUrl || undefined);

      await storage.createJobLog({
        type: "telegram_post",
        detail: `Telegram post sent: ${post.title}`,
        status: "success",
      });

      console.log(`Telegram post sent: ${post.title}`);
    } catch (error) {
      await storage.createJobLog({
        type: "telegram_post",
        detail: "Telegram post failed",
        status: "error",
        errorMessage: error instanceof Error ? error.message : String(error),
      });
      console.error("Telegram post failed:", error);
    }
  }

  public async generatePostManually(topic: string): Promise<void> {
    // Manual post generation for admin panel
    await this.generateBlogPost();
  }

  public start(): void {
    console.log("Scheduler service started");
  }

  public stop(): void {
    console.log("Scheduler service stopped");
  }
}

export const schedulerService = new SchedulerService();
