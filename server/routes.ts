import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { geminiService } from "./services/geminiService";
import { telegramService } from "./services/telegramService";
import { schedulerService } from "./worker/scheduler";
import { insertPostSchema, insertJobLogSchema } from "@shared/schema";
import { z } from "zod";
import bcrypt from "bcrypt";

export async function registerRoutes(app: Express): Promise<Server> {
  // Start the scheduler
  schedulerService.start();

  // Middleware for admin authentication
  const requireAuth = (req: any, res: any, next: any) => {
    const token = req.headers.authorization?.replace('Bearer ', '');
    const adminToken = process.env.ADMIN_TOKEN || "admin-secret-token";
    
    if (token !== adminToken) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    
    next();
  };

  // Public API routes
  
  // Get published posts
  app.get("/api/posts", async (req, res) => {
    try {
      const limit = parseInt(req.query.limit as string) || 20;
      const offset = parseInt(req.query.offset as string) || 0;
      
      const posts = await storage.getPublishedPosts(limit, offset);
      res.json(posts);
    } catch (error) {
      res.status(500).json({ 
        message: "Failed to fetch posts", 
        error: error instanceof Error ? error.message : String(error) 
      });
    }
  });

  // Get single post by slug
  app.get("/api/posts/:slug", async (req, res) => {
    try {
      const post = await storage.getPostBySlug(req.params.slug);
      
      if (!post || post.status !== "published") {
        return res.status(404).json({ message: "Post not found" });
      }
      
      res.json(post);
    } catch (error) {
      res.status(500).json({ 
        message: "Failed to fetch post", 
        error: error instanceof Error ? error.message : String(error) 
      });
    }
  });

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const { firstName, lastName, email, phone, company, message } = req.body;
      
      // Basic validation
      if (!firstName || !lastName || !email || !message) {
        return res.status(400).json({ message: "Required fields missing" });
      }
      
      // Log the contact form submission
      await storage.createJobLog({
        type: "contact_form",
        detail: `Contact form from ${firstName} ${lastName} (${email})`,
        status: "success",
      });
      
      // TODO: Send email notification or save to database
      console.log("Contact form submission:", { firstName, lastName, email, message });
      
      res.json({ message: "Contact form submitted successfully" });
    } catch (error) {
      res.status(500).json({ 
        message: "Failed to submit contact form", 
        error: error instanceof Error ? error.message : String(error) 
      });
    }
  });

  // Admin API routes

  // Admin login
  app.post("/api/admin/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      
      if (!username || !password) {
        return res.status(400).json({ message: "Username and password required" });
      }
      
      const user = await storage.getUserByUsername(username);
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      
      const token = process.env.ADMIN_TOKEN || "admin-secret-token";
      res.json({ token, user: { id: user.id, username: user.username, role: user.role } });
    } catch (error) {
      res.status(500).json({ 
        message: "Login failed", 
        error: error instanceof Error ? error.message : String(error) 
      });
    }
  });

  // Get all posts (admin only)
  app.get("/api/admin/posts", requireAuth, async (req, res) => {
    try {
      const limit = parseInt(req.query.limit as string) || 50;
      const offset = parseInt(req.query.offset as string) || 0;
      const status = req.query.status as string;
      
      let posts;
      if (status) {
        posts = await storage.getPostsByStatus(status);
      } else {
        posts = await storage.getPosts(limit, offset);
      }
      
      res.json(posts);
    } catch (error) {
      res.status(500).json({ 
        message: "Failed to fetch posts", 
        error: error instanceof Error ? error.message : String(error) 
      });
    }
  });

  // Update post status
  app.patch("/api/admin/posts/:id", requireAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const updates = req.body;
      
      const post = await storage.updatePost(id, updates);
      res.json(post);
    } catch (error) {
      res.status(500).json({ 
        message: "Failed to update post", 
        error: error instanceof Error ? error.message : String(error) 
      });
    }
  });

  // Delete post
  app.delete("/api/admin/posts/:id", requireAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deletePost(id);
      res.json({ message: "Post deleted successfully" });
    } catch (error) {
      res.status(500).json({ 
        message: "Failed to delete post", 
        error: error instanceof Error ? error.message : String(error) 
      });
    }
  });

  // Manual post generation
  app.post("/api/admin/generate", requireAuth, async (req, res) => {
    try {
      const { topic } = req.body;
      
      if (!topic) {
        return res.status(400).json({ message: "Topic is required" });
      }
      
      // Trigger manual post generation
      await schedulerService.generatePostManually(topic);
      
      res.json({ message: "Post generation started" });
    } catch (error) {
      res.status(500).json({ 
        message: "Failed to generate post", 
        error: error instanceof Error ? error.message : String(error) 
      });
    }
  });

  // Get job logs
  app.get("/api/admin/logs", requireAuth, async (req, res) => {
    try {
      const limit = parseInt(req.query.limit as string) || 100;
      const logs = await storage.getJobLogs(limit);
      res.json(logs);
    } catch (error) {
      res.status(500).json({ 
        message: "Failed to fetch logs", 
        error: error instanceof Error ? error.message : String(error) 
      });
    }
  });

  // Dashboard stats
  app.get("/api/admin/stats", requireAuth, async (req, res) => {
    try {
      const today = new Date();
      const dailyImageCount = await storage.getDailyImageCount(today);
      const maxDailyImages = parseInt(process.env.MAX_DAILY_IMAGES || "50", 10);
      
      // Get today's posts
      const todayStart = new Date(today);
      todayStart.setHours(0, 0, 0, 0);
      
      const allPosts = await storage.getPosts(100, 0);
      const todayPosts = allPosts.filter(post => 
        new Date(post.createdAt) >= todayStart
      );
      const publishedToday = todayPosts.filter(post => post.status === "published");
      const reviewPosts = allPosts.filter(post => post.status === "review");
      
      const stats = {
        todayPosts: publishedToday.length,
        totalTodayPosts: 15, // Target
        telegramPosts: 3, // This would need to be tracked
        totalTelegramPosts: 5, // Target
        generatedImages: dailyImageCount,
        maxDailyImages: maxDailyImages,
        pendingReview: reviewPosts.length,
      };
      
      res.json(stats);
    } catch (error) {
      res.status(500).json({ 
        message: "Failed to fetch stats", 
        error: error instanceof Error ? error.message : String(error) 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
