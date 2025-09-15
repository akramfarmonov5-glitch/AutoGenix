import * as fs from "fs";
import * as path from "path";

export interface StorageAdapter {
  uploadFile(fileName: string, data: Buffer): Promise<string>;
  deleteFile(fileName: string): Promise<void>;
  getFileUrl(fileName: string): string;
}

export class LocalStorageAdapter implements StorageAdapter {
  private uploadDir: string;

  constructor() {
    this.uploadDir = path.join(process.cwd(), "public", "uploads");
    this.ensureUploadDir();
  }

  private ensureUploadDir(): void {
    if (!fs.existsSync(this.uploadDir)) {
      fs.mkdirSync(this.uploadDir, { recursive: true });
    }
  }

  async uploadFile(fileName: string, data: Buffer): Promise<string> {
    const filePath = path.join(this.uploadDir, fileName);
    fs.writeFileSync(filePath, data);
    return `/uploads/${fileName}`;
  }

  async deleteFile(fileName: string): Promise<void> {
    const filePath = path.join(this.uploadDir, fileName);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  }

  getFileUrl(fileName: string): string {
    return `/uploads/${fileName}`;
  }
}

export class S3StorageAdapter implements StorageAdapter {
  private bucketName: string;
  private accessKey: string;
  private secretKey: string;
  private region: string;

  constructor() {
    this.bucketName = process.env.S3_BUCKET || "";
    this.accessKey = process.env.S3_ACCESS_KEY || "";
    this.secretKey = process.env.S3_SECRET_KEY || "";
    this.region = process.env.S3_REGION || "us-east-1";

    if (!this.bucketName || !this.accessKey || !this.secretKey) {
      throw new Error("S3 credentials are required");
    }
  }

  async uploadFile(fileName: string, data: Buffer): Promise<string> {
    // TODO: Implement S3 upload using AWS SDK or similar
    // For now, fallback to local storage
    const localAdapter = new LocalStorageAdapter();
    return await localAdapter.uploadFile(fileName, data);
  }

  async deleteFile(fileName: string): Promise<void> {
    // TODO: Implement S3 delete
    const localAdapter = new LocalStorageAdapter();
    return await localAdapter.deleteFile(fileName);
  }

  getFileUrl(fileName: string): string {
    // TODO: Return S3 URL
    return `https://${this.bucketName}.s3.${this.region}.amazonaws.com/${fileName}`;
  }
}

export function createStorageAdapter(): StorageAdapter {
  const provider = process.env.STORAGE_PROVIDER || "local";
  
  switch (provider) {
    case "s3":
      return new S3StorageAdapter();
    case "local":
    default:
      return new LocalStorageAdapter();
  }
}

export const storageAdapter = createStorageAdapter();
