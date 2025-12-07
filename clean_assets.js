const { Jimp } = require('jimp');
const fs = require('fs');
const path = require('path');

// Configuration
const ARTIFACTS_DIR = ".";
const TARGET_FILES = [
    "shed_pixel.png",
    "beehive_pixel.png",
    "cloud_pixel.png",
    "bush_pixel.png"
];
const CHROMA_KEY_COLOR = { r: 0, g: 255, b: 0 }; // Bright Green
const TOLERANCE = 80; // Distance tolerance for color matching

async function processImage(filename) {
    const filePath = path.join(ARTIFACTS_DIR, filename);

    if (!fs.existsSync(filePath)) {
        console.log(`❌ Skipped (Not found): ${filename}`);
        return;
    }

    try {
        const image = await Jimp.read(filePath);

        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
            const r = this.bitmap.data[idx + 0];
            const g = this.bitmap.data[idx + 1];
            const b = this.bitmap.data[idx + 2];

            // Simple distance check from Green
            // Green is (0, 255, 0). 
            // We check if G is high and R/B are low.

            // Heuristic for "Green Screen": High Green, Low Red/Blue
            if (g > 150 && r < 100 && b < 100) {
                this.bitmap.data[idx + 3] = 0; // Set Alpha to 0 (Transparent)
            }
        });

        const outputPath = path.join("m:/ProyectoKeila/src/assets/backgrounds", filename);
        await image.write(outputPath);
        console.log(`✅ Processed & Saved: ${outputPath}`);

    } catch (err) {
        console.error(`❌ Error processing ${filename}:`, err);
    }
}

async function main() {
    console.log("Starting Asset Cleanup...");
    for (const file of TARGET_FILES) {
        await processImage(file);
    }
    console.log("Done!");
}

main();
