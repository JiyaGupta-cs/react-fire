#!/usr/bin/env node

// Import the utility functions
const { createFirebaseFile } = require('./fireBaseUtils');
const { createHomeComponent } = require('./Home');
const { createLoginComponent } = require('./Login');
const { createSignUpComponent } = require('./SignUp');
const { createSignOutComponent } = require('./SignOut');
const { createAppComponent } = require('./App');
const { updateTailwindconfig } = require('./updateTailwindconfig');
const { appendTailwindDirectives } = require('./appendTailwindDirectives');
const { exec } = require('child_process');

// Check if the command is 'create-auth'
if (process.argv[2] === 'create-auth') {
       // Install react-router-dom
       exec('npm i react-router-dom', (error, stdout, stderr) => {
        if (error) {
          console.error(`Error installing react-router-dom: ${error}`);
          return;
        }
        console.log(`react-router-dom installed! ${stdout}`);
        if (stderr) {
          console.error(`npm stderr: ${stderr}`);
        }
      });
    
      // Install firebase
      exec('npm i firebase', (error, stdout, stderr) => {
        if (error) {
          console.error(`Error installing firebase: ${error}`);
          return;
        }
        console.log(`firebase installed! ${stdout}`);
        if (stderr) {
          console.error(`npm stderr: ${stderr}`);
        }
      });

            // Function to install Tailwind CSS and initialize its configuration file
const installTailwindCSS = () => {
  exec('npm install -D tailwindcss@latest postcss@latest autoprefixer@latest', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error installing Tailwind CSS: ${error}`);
      return;
    }
    console.log(`Tailwind CSS installed! ${stdout}`);
    if (stderr) {
      console.error(`npm stderr: ${stderr}`);
    }

    // Initialize Tailwind CSS configuration file
    exec('npx tailwindcss init -p', (error, stdout, stderr) => {
      if (error) {
        console.error(`Error initializing Tailwind CSS configuration: ${error}`);
        return;
      }
      console.log(`Tailwind CSS configuration file initialized! ${stdout}`);
      if (stderr) {
        console.error(`npm stderr: ${stderr}`);
      }
    });
  });
};

  // Call the createFirebaseFile function
  if (createFirebaseFile()) {
    createAppComponent();
    createHomeComponent();
    createSignUpComponent();
    createSignOutComponent();
    createLoginComponent();
    installTailwindCSS();
    updateTailwindconfig();
    appendTailwindDirectives();
  }
} else {
  console.log('Invalid command.');
}
