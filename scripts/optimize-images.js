import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imageDir = path.join(__dirname, "..", "public", "images", "projects");
const outputDir = path.join(
  __dirname,
  "..",
  "public",
  "images",
  "projects",
  "optimized",
);

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImages() {
  const files = fs.readdirSync(imageDir);

  // Filter for PNG and JPG files only (skip SVG)
  const imageFiles = files.filter((file) => {
    const ext = path.extname(file).toLowerCase();
    return ext === ".png" || ext === ".jpg" || ext === ".jpeg";
  });

  console.log(`Found ${imageFiles.length} images to optimize...\n`);

  for (const file of imageFiles) {
    const inputPath = path.join(imageDir, file);
    const fileName = path.parse(file).name;
    const outputPathWebP = path.join(outputDir, `${fileName}.webp`);

    try {
      // Get original file size
      const originalStats = fs.statSync(inputPath);
      const originalSize = (originalStats.size / 1024).toFixed(2);

      // Convert to WebP with compression
      await sharp(inputPath)
        .webp({
          quality: 85, // High quality but compressed
          effort: 6, // Higher effort = better compression (1-6)
        })
        .toFile(outputPathWebP);

      // Get new file size
      const newStats = fs.statSync(outputPathWebP);
      const newSize = (newStats.size / 1024).toFixed(2);
      const savings = ((1 - newStats.size / originalStats.size) * 100).toFixed(
        1,
      );

      console.log(`✓ ${file}`);
      console.log(
        `  Original: ${originalSize} KB → WebP: ${newSize} KB (${savings}% smaller)\n`,
      );
    } catch (error) {
      console.error(`✗ Error processing ${file}:`, error.message);
    }
  }

  console.log("Optimization complete!");
  console.log(`Optimized images saved to: ${outputDir}`);
}

optimizeImages().catch(console.error);
