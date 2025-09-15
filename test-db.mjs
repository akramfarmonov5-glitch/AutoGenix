import { storage } from './server/storage.js';

async function testDatabase() {
  try {
    console.log('Testing database connection...');
    const posts = await storage.getPosts(1, 0);
    console.log('Database test successful, found', posts.length, 'posts');
    
    // Test image count
    const today = new Date();
    const imageCount = await storage.getDailyImageCount(today);
    console.log('Daily image count:', imageCount);
    
    // Try to create a test log
    await storage.createJobLog({
      type: "test",
      detail: "Database connection test",
      status: "success",
    });
    console.log('Job log created successfully');
    
  } catch (error) {
    console.error('Database test failed:', error);
    console.error('Error details:', error.message);
    console.error('Stack trace:', error.stack);
  }
}

testDatabase();