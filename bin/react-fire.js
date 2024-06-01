#!/usr/bin/env node

// Import the utility functions
const { createFirebaseFile } = require('./fireBaseUtils');
const { createHomeComponent } = require('./Home');
const { createLoginComponent } = require('./Login');
const { createSignUpComponent } = require('./SignUp');
const { createSignOutComponent } = require('./SignOut');
const { createAppComponent } = require('./App');
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

  // Call the createFirebaseFile function
  if (createFirebaseFile()) {
    createAppComponent();
    createHomeComponent();
    createSignUpComponent();
    createSignOutComponent();
    createLoginComponent();
  }
} else {
  console.log('Invalid command.');
}
