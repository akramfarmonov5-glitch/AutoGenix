const { storage } = require('./server/storage.ts');

async function testDatabase() {
  try {
    console.log('Testing database connection...');
    const posts = await storage.getPosts(1, 0);
    console.log('Database test successful, found', posts.length, 'posts');
    
    // Test image count
    const today = new Date();
    const imageCount = await storage.getDailyImageCount(today);
    console.log('Daily image count:', imageCount);
    
  } catch (error) {
    console.error('Database test failed:', error);
  }
}

testDatabase();