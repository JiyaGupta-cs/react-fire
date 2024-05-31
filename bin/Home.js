const fs = require('fs');
const path = require('path');

function createHomeComponent() {
  const homeContent = `
import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';
 
const Home = () => {
 
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
              
              console.log("uid", uid)
            } else {
              // User is signed out             
              console.log("user is logged out")
            }
          });
         
    }, [])
 
  return (
    <section>        
      Home
    </section>
  )
}
 
export default Home;
  `;

  const componentsDir = path.join(process.cwd(), 'src', 'components');

  // Ensure the components directory exists
  if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir, { recursive: true });
  }

  const filePath = path.join(componentsDir, 'Home.jsx');

  fs.writeFileSync(filePath, homeContent);
  console.log("Home.jsx file created successfully!");
}

module.exports = { createHomeComponent };
