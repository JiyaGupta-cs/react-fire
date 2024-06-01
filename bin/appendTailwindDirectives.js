const fs = require('fs');
const path = require('path');

const appendTailwindDirectives = () => {
  const indexPath = path.join(process.cwd(), 'src', 'index.css');
  const tailwindDirectives = `@tailwind base;\n@tailwind components;\n@tailwind utilities;\n`;

  try {
    // Read the content of the index.css file
    let cssContent = fs.readFileSync(indexPath, 'utf8');

    // Append the Tailwind CSS directives
    cssContent = tailwindDirectives + cssContent;

    // Write the updated content back to the file
    fs.writeFileSync(indexPath, cssContent);
    console.log('Tailwind CSS directives appended to index.css');
  } catch (error) {
    console.error('Error appending Tailwind CSS directives:', error);
  }
};

module.exports = { appendTailwindDirectives };
