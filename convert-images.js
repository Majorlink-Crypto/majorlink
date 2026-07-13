const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'public', 'images');
const outputDir = inputDir; // save alongside originals

const files = fs.readdirSync(inputDir).filter(f => /\.(png|jpg|jpeg)$/i.test(f));

(async () => {
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputFile = file.replace(/\.(png|jpg|jpeg)$/i, '.webp');
    const outputPath = path.join(outputDir, outputFile);

    const inputSizeKB = Math.round(fs.statSync(inputPath).size / 1024);

    await sharp(inputPath)
      .webp({ quality: 82 })
      .toFile(outputPath);

    const outputSizeKB = Math.round(fs.statSync(outputPath).size / 1024);
    console.log(`✅ ${file} (${inputSizeKB}KB) → ${outputFile} (${outputSizeKB}KB) | saved ${inputSizeKB - outputSizeKB}KB`);
  }

  console.log('\nDone! All images converted to WebP.');
})();
