import { 
  users, 
  posts, 
  images, 
  jobLogs,
  type User, 
  type InsertUser,
  type Post,
  type InsertPost,
  type Image,
  type InsertImage,
  type JobLog,
  type InsertJobLog
} from "@shared/schema";
import { db } from "./db";
import { eq, desc, count, and, sql, gte, lte } from "drizzle-orm";

export interface IStorage {
  // User methods
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Post methods
  getPosts(limit?: number, offset?: number): Promise<Post[]>;
  getPublishedPosts(limit?: number, offset?: number): Promise<Post[]>;
  getPostBySlug(slug: string): Promise<Post | undefined>;
  getPostById(id: number): Promise<Post | undefined>;
  createPost(post: InsertPost): Promise<Post>;
  updatePost(id: number, updates: Partial<InsertPost>): Promise<Post>;
  deletePost(id: number): Promise<void>;
  getPostsByStatus(status: string): Promise<Post[]>;

  // Image methods
  createImage(image: InsertImage): Promise<Image>;
  getImagesByDate(date: Date): Promise<Image[]>;
  getDailyImageCount(date: Date): Promise<number>;

  // Job log methods
  createJobLog(jobLog: InsertJobLog): Promise<JobLog>;
  getJobLogs(limit?: number): Promise<JobLog[]>;
}

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  // Post methods
  async getPosts(limit = 50, offset = 0): Promise<Post[]> {
    return await db
      .select()
      .from(posts)
      .orderBy(desc(posts.createdAt))
      .limit(limit)
      .offset(offset);
  }

  async getPublishedPosts(limit = 50, offset = 0): Promise<Post[]> {
    return await db
      .select()
      .from(posts)
      .where(eq(posts.status, "published"))
      .orderBy(desc(posts.createdAt))
      .limit(limit)
      .offset(offset);
  }

  async getPostBySlug(slug: string): Promise<Post | undefined> {
    const [post] = await db.select().from(posts).where(eq(posts.slug, slug));
    return post;
  }

  async getPostById(id: number): Promise<Post | undefined> {
    const [post] = await db.select().from(posts).where(eq(posts.id, id));
    return post;
  }

  async createPost(insertPost: InsertPost): Promise<Post> {
    const [post] = await db.insert(posts).values(insertPost).returning();
    return post;
  }

  async updatePost(id: number, updates: Partial<InsertPost>): Promise<Post> {
    const [post] = await db
      .update(posts)
      .set({ ...updates, updatedAt: sql`now()` })
      .where(eq(posts.id, id))
      .returning();
    return post;
  }

  async deletePost(id: number): Promise<void> {
    await db.delete(posts).where(eq(posts.id, id));
  }

  async getPostsByStatus(status: string): Promise<Post[]> {
    return await db
      .select()
      .from(posts)
      .where(eq(posts.status, status))
      .orderBy(desc(posts.createdAt));
  }

  // Image methods
  async createImage(insertImage: InsertImage): Promise<Image> {
    const [image] = await db.insert(images).values(insertImage).returning();
    return image;
  }

  async getImagesByDate(date: Date): Promise<Image[]> {
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    return await db
      .select()
      .from(images)
      .where(
        and(
          gte(images.createdAt, startOfDay),
          lte(images.createdAt, endOfDay)
        )
      );
  }

  async getDailyImageCount(date: Date): Promise<number> {
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    const [result] = await db
      .select({ count: count() })
      .from(images)
      .where(
        and(
          gte(images.createdAt, startOfDay),
          lte(images.createdAt, endOfDay)
        )
      );

    return result.count;
  }

  // Job log methods
  async createJobLog(insertJobLog: InsertJobLog): Promise<JobLog> {
    const [jobLog] = await db.insert(jobLogs).values(insertJobLog).returning();
    return jobLog;
  }

  async getJobLogs(limit = 100): Promise<JobLog[]> {
    return await db
      .select()
      .from(jobLogs)
      .orderBy(desc(jobLogs.createdAt))
      .limit(limit);
  }
}

export const storage = new DatabaseStorage();
