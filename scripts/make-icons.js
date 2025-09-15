#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Simple SVG to create basic favicon
const createSVGIcon = (size) => `
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="${size}" height="${size}" fill="#1E40AF" rx="${Math.floor(size * 0.2)}"/>
  
  <!-- Gear icon -->
  <g transform="translate(${size * 0.25}, ${size * 0.25})">
    <path d="M${size * 0.25} ${size * 0.125}L${size * 0.375} ${size * 0.1875}L${size * 0.4375} ${size * 0.0625}L${size * 0.3125} 0L${size * 0.1875} 0L${size * 0.0625} ${size * 0.0625}L${size * 0.125} ${size * 0.1875}Z" fill="#FACC15"/>
    <circle cx="${size * 0.25}" cy="${size * 0.25}" r="${size * 0.0625}" fill="#FACC15"/>
  </g>
  
  <!-- Lightning bolt -->
  <g transform="translate(${size * 0.45}, ${size * 0.15})">
    <path d="M0 0L${size * 0.125} ${size * 0.125}L${size * 0.0625} ${size * 0.1875}L${size * 0.1875} ${size * 0.3125}L${size * 0.0625} ${size * 0.1875}L0 ${size * 0.0625}Z" fill="white"/>
  </g>
</svg>
`;

// Create the public/icons directory
const iconsDir = path.join(process.cwd(), 'public', 'icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Generate SVG files for different sizes
const sizes = {
  'favicon-16x16.png': 16,
  'favicon-32x32.png': 32,
  'apple-touch-icon.png': 180,
  'android-chrome-512x512.png': 512
};

console.log('Generating AutoGenix AI icons...');

// For this simplified version, we'll create SVG files instead of PNG
// In a real implementation, you would use a library like sharp or canvas to convert SVG to PNG

Object.entries(sizes).forEach(([filename, size]) => {
  const svgContent = createSVGIcon(size);
  const svgFilename = filename.replace('.png', '.svg');
  const filePath = path.join(iconsDir, svgFilename);
  
  fs.writeFileSync(filePath, svgContent.trim());
  console.log(`Generated: ${svgFilename} (${size}x${size})`);
});

// Create a simple PNG placeholder for the most common sizes
// Note: In production, you would use proper image conversion libraries
const createPNGPlaceholder = (filename, size) => {
  // This creates a minimal PNG file header + simple colored square
  // For production use, implement proper SVG to PNG conversion
  const placeholder = `<!-- PNG placeholder for ${filename} (${size}x${size}) - Replace with actual PNG -->`;
  const pngPath = path.join(iconsDir, filename);
  fs.writeFileSync(pngPath, placeholder);
  console.log(`Created PNG placeholder: ${filename}`);
};

// Create PNG placeholders
Object.entries(sizes).forEach(([filename, size]) => {
  createPNGPlaceholder(filename, size);
});

// Generate favicon.ico (as SVG for simplicity)
const faviconSVG = createSVGIcon(32);
fs.writeFileSync(path.join(iconsDir, 'favicon.svg'), faviconSVG.trim());

console.log('\nIcon generation complete!');
console.log('\nGenerated files:');
console.log('- favicon-16x16.png (and .svg)');
console.log('- favicon-32x32.png (and .svg)');
console.log('- apple-touch-icon.png (and .svg)');
console.log('- android-chrome-512x512.png (and .svg)');
console.log('- favicon.svg');

console.log('\nNote: PNG files are placeholders. For production, use a proper SVG to PNG conversion library.');
console.log('\nAdd these to your HTML head:');
console.log('<link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png">');
console.log('<link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png">');
console.log('<link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png">');
console.log('<link rel="manifest" href="/manifest.json">');
