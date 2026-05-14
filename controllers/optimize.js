const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './assets/images/raw'; // Put your original high-res photos here
const outputDir = './assets/images/optimized'; // This is what the website will use

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

fs.readdirSync(inputDir).forEach(file => {
    if (file.match(/\.(jpg|jpeg|png|tiff)$/i)) {
        const fileName = path.parse(file).name;
        sharp(`${inputDir}/${file}`)
            .webp({ quality: 80 }) // High quality, low file size
            .toFile(`${outputDir}/${fileName}.webp`)
            .then(() => console.log(`Optimized: ${fileName}`))
            .catch(err => console.error(`Error processing ${file}:`, err));
    }
});