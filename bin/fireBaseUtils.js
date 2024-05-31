const fs = require('fs');
const path = require('path');

function loadEnvVariables() {
  const envPath = path.join(process.cwd(), '.env');

  try {
    const envContent = fs.readFileSync(envPath, 'utf8');
    const envVariables = {};

    envContent.split('\n').forEach(line => {
      const [key, value] = line.split('=');
      if (key && value) {
        envVariables[key.trim()] = value.trim();
      }
    });

    return envVariables;
  } catch (error) {
    console.error('Error reading .env file:', error);
    process.exit(1);
  }
}

function createFirebaseConfig() {
  // Load environment variables dynamically
  const envVariables = loadEnvVariables();

  const firebaseConfig = {
    apiKey: envVariables.FIREBASE_API_KEY,
    authDomain: envVariables.FIREBASE_AUTH_DOMAIN,
    projectId: envVariables.FIREBASE_PROJECT_ID,
    storageBucket: envVariables.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: envVariables.FIREBASE_MESSAGING_SENDER_ID,
    appId: envVariables.FIREBASE_APP_ID
  };

  const firebaseConfigContent = `
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getAuth } from "firebase/auth";
  import { getFirestore } from "firebase/firestore";

  // Your web app's Firebase configuration
  const firebaseConfig = ${JSON.stringify(firebaseConfig)};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const auth = getAuth();
  export const db = getFirestore(app);
  export default app;
  `;

  return firebaseConfigContent;
}

function createFirebaseFile() {
  const firebaseConfigContent = createFirebaseConfig();
  const componentsDir = path.join(process.cwd(), 'src', 'components');

  // Ensure the components directory exists
  if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir, { recursive: true });
  }

  const filePath = path.join(componentsDir, 'firebase.js');

  try {
    fs.writeFileSync(filePath, firebaseConfigContent);
    console.log("firebase file created successfully!!!!!!!!!!!!");
    return true;
  } catch (error) {
    console.error('Error creating firebase file:', error);
    return false;
  }
}

function watchEnvFileChanges() {
  const envPath = path.join(process.cwd(), '.env');

  fs.watch(envPath, (eventType, filename) => {
    if (eventType === 'change') {
      console.log('.env file changed. Rewriting firebase.js...');
      createFirebaseFile();
    }
  });

  console.log('Watching .env file for changes...');
}

module.exports = { createFirebaseFile, watchEnvFileChanges };
