import { 
  type User, 
  type InsertUser,
  type Post,
  type InsertPost,
  type Image,
  type InsertImage,
  type JobLog,
  type InsertJobLog
} from "@shared/schema";
import type { IStorage } from "./storage";
import bcrypt from "bcrypt";

export class MemoryStorage implements IStorage {
  private users: User[] = [];
  private posts: Post[] = [];
  private images: Image[] = [];
  private jobLogs: JobLog[] = [];
  private nextId = 1;

  constructor() {
    // Initialize with a default admin user
    this.initializeDefaultData();
  }

  private async initializeDefaultData() {
    // Create default admin user
    const hashedPassword = await bcrypt.hash("admin123", 10);
    const defaultUser: User = {
      id: "admin-default-id",
      username: "admin",
      password: hashedPassword,
      role: "admin",
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.users.push(defaultUser);

    // Create some sample posts for demonstration
    const samplePost: Post = {
      id: 1,
      title: "AutoGenix AI bilan biznesingizni avtomatlashtiring",
      slug: "autogenix-ai-biznes-avtomatizatsiya",
      body: "AutoGenix AI platformasi orqali biznes jarayonlaringizni avtomatlashtiring va samaradorlikni oshiring. Bizning AI yechimlarimiz kontent yaratish, marketing avtomatizatsiya va ko'plab boshqa sohalarda yordam beradi.",
      excerpt: "AutoGenix AI platformasi bilan biznes jarayonlarini avtomatlashtiring",
      metaTitle: "AutoGenix AI - Biznes Avtomatizatsiya",
      metaDescription: "AutoGenix AI platformasi orqali biznesingizni avtomatlashtiring. Kontent yaratish, marketing va boshqa jarayonlarni AI bilan optimizatsiya qiling.",
      tags: ["ai", "automation", "business", "marketing"],
      imageUrl: "https://via.placeholder.com/1200x630/1E40AF/FFFFFF?text=AutoGenix+AI",
      status: "published",
      needsReview: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.posts.push(samplePost);
  }

  // User methods
  async getUser(id: string): Promise<User | undefined> {
    return this.users.find(user => user.id === id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const user: User = {
      id: `user-${this.nextId++}`,
      ...insertUser,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.users.push(user);
    return user;
  }

  // Post methods
  async getPosts(limit = 50, offset = 0): Promise<Post[]> {
    return this.posts
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(offset, offset + limit);
  }

  async getPublishedPosts(limit = 50, offset = 0): Promise<Post[]> {
    return this.posts
      .filter(post => post.status === "published")
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(offset, offset + limit);
  }

  async getPostBySlug(slug: string): Promise<Post | undefined> {
    return this.posts.find(post => post.slug === slug);
  }

  async getPostById(id: number): Promise<Post | undefined> {
    return this.posts.find(post => post.id === id);
  }

  async createPost(insertPost: InsertPost): Promise<Post> {
    const post: Post = {
      id: this.nextId++,
      ...insertPost,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.posts.push(post);
    return post;
  }

  async updatePost(id: number, updates: Partial<InsertPost>): Promise<Post> {
    const postIndex = this.posts.findIndex(post => post.id === id);
    if (postIndex === -1) {
      throw new Error("Post not found");
    }
    
    this.posts[postIndex] = {
      ...this.posts[postIndex],
      ...updates,
      updatedAt: new Date(),
    };
    
    return this.posts[postIndex];
  }

  async deletePost(id: number): Promise<void> {
    const postIndex = this.posts.findIndex(post => post.id === id);
    if (postIndex === -1) {
      throw new Error("Post not found");
    }
    this.posts.splice(postIndex, 1);
  }

  async getPostsByStatus(status: string): Promise<Post[]> {
    return this.posts
      .filter(post => post.status === status)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  // Image methods
  async createImage(insertImage: InsertImage): Promise<Image> {
    const image: Image = {
      id: this.nextId++,
      ...insertImage,
      createdAt: new Date(),
    };
    this.images.push(image);
    return image;
  }

  async getImagesByDate(date: Date): Promise<Image[]> {
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    return this.images.filter(image => {
      const imageDate = new Date(image.createdAt);
      return imageDate >= startOfDay && imageDate <= endOfDay;
    });
  }

  async getDailyImageCount(date: Date): Promise<number> {
    const images = await this.getImagesByDate(date);
    return images.length;
  }

  // Job log methods
  async createJobLog(insertJobLog: InsertJobLog): Promise<JobLog> {
    const jobLog: JobLog = {
      id: this.nextId++,
      ...insertJobLog,
      createdAt: new Date(),
    };
    this.jobLogs.push(jobLog);
    return jobLog;
  }

  async getJobLogs(limit = 100): Promise<JobLog[]> {
    return this.jobLogs
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, limit);
  }
}