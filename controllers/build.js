const pug = require('pug');
const fs = require('fs');
const path = require('path');

// 1. Get the Art Data
const dataPath = path.join(__dirname, '../models/artData.json');
const artData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

// 2. Build the Gallery Page (index.html)
const indexViewPath = path.join(__dirname, '../views/index.pug');
const indexHtml = pug.renderFile(indexViewPath, { artworks: artData });
fs.writeFileSync(path.join(__dirname, '../index.html'), indexHtml);

// 3. Build the About Page (about.html)
const aboutViewPath = path.join(__dirname, '../views/about.pug');
const aboutHtml = pug.renderFile(aboutViewPath); 
fs.writeFileSync(path.join(__dirname, '../about.html'), aboutHtml);

// 4. Build the Presentation Page (presentation.html)
// Make sure you have created views/presentation.pug first!
const presViewPath = path.join(__dirname, '../views/presentation.pug');
const presHtml = pug.renderFile(presViewPath, { artworks: artData });
fs.writeFileSync(path.join(__dirname, '../presentation.html'), presHtml);

console.log('Success! Index, About, and Presentation pages generated.');