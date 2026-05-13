const pug = require('pug');
const fs = require('fs');
const path = require('path');

// 1. Interacting with the Model (Read the JSON data)
const dataPath = path.join(__dirname, '../models/artData.json');
const artData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

// 2. Setting up the View (Compile the Pug file)
const viewPath = path.join(__dirname, '../views/index.pug');
const compiledFunction = pug.compileFile(viewPath);

// 3. The Logic (Render the HTML with the data)
const finalHtml = compiledFunction({ artworks: artData });

// 4. Output (Save the generated HTML to the root folder for GitHub Pages)
const outputPath = path.join(__dirname, '../index.html');
fs.writeFileSync(outputPath, finalHtml);

console.log('Success! Your index.html has been generated using Pug and MVC.');
