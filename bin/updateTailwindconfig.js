const fs = require('fs');
const path = require('path');

function updateTailwindconfig() {
  const Content = `
  /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
  `;

  const componentsDir = path.join(process.cwd());

  // Ensure the components directory exists
  if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir, { recursive: true });
  }

  const filePath = path.join(componentsDir, 'tailwind.config.js');

  fs.writeFileSync(filePath, Content);
  console.log("Tailwind config file updated successfully!");
}

module.exports = { updateTailwindconfig };
