const fs = require('fs');
const path = require('path');

function createSignOutComponent() {
  const SignOutContent = `
  import React from 'react';
  import {  signOut } from "firebase/auth";
  import {auth} from './firebase';
  import { useNavigate } from 'react-router-dom';
   
  const Home = () => {
      const navigate = useNavigate();
   
      const handleLogout = () => {               
          signOut(auth).then(() => {
          // Sign-out successful.
              navigate("/");
              console.log("Signed out successfully")
              alert("Signed out successfully")
          }).catch((error) => {
          // An error happened.
          });
      }
     
      return(
          <>
              <nav>
                  <p>
                      Welcome Home
                  </p>
   
                  <div>
                      <button onClick={handleLogout}>
                          Logout
                      </button>
                  </div>
              </nav>
          </>
      )
  }
   
  export default Home;
  `;

  const componentsDir = path.join(process.cwd(), 'src', 'components');

  // Ensure the components directory exists
  if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir, { recursive: true });
  }

  const filePath = path.join(componentsDir, 'SignOut.jsx');

  fs.writeFileSync(filePath, SignOutContent);
  console.log("SignOut.jsx file created successfully!");
}

module.exports = { createSignOutComponent };
