const pug = require('pug');
const fs = require('fs');
const path = require('path');

// 1. Get the Art Data
const dataPath = path.join(__dirname, '../models/artData.json');
const artData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

// 2. Build the Gallery Page (index.html)
const indexViewPath = path.join(__dirname, '../views/index.pug');
const compileIndex = pug.compileFile(indexViewPath);
const indexHtml = compileIndex({ artworks: artData });
fs.writeFileSync(path.join(__dirname, '../index.html'), indexHtml);

// 3. Build the About Page (about.html)
const aboutViewPath = path.join(__dirname, '../views/about.pug');
const compileAbout = pug.compileFile(aboutViewPath);
const aboutHtml = compileAbout(); 
fs.writeFileSync(path.join(__dirname, '../about.html'), aboutHtml);

console.log('Success! Both index.html and about.html have been generated.');