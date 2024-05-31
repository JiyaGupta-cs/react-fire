#!/usr/bin/env node

const path = require('path');

// Import the utility functions
const { createFirebaseFile } = require('./fireBaseUtils');
const { createHomeComponent } = require('./Home');
const { createLoginComponent } = require('./Login');
const { createSignUpComponent } = require('./SignUp');
const { createSignOutComponent } = require('./SignOut');
const { createAppComponent } = require('./App');

// Check if the command is 'create-auth'
if (process.argv[2] === 'create-auth') {
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
