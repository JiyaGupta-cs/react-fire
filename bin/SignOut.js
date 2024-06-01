const fs = require('fs');
const path = require('path');

function createSignOutComponent() {
  const SignOutContent =   `import React, { useState } from 'react';
  import { signOut } from "firebase/auth";
  import { auth } from './firebase';
  import { useNavigate } from 'react-router-dom';
  
  const SignOut = () => {
      const navigate = useNavigate();
      const [error, setError] = useState('');
  
      const handleLogout = () => {               
          signOut(auth)
              .then(() => {
                  // Sign-out successful.
                  console.log("Signed out successfully");
                  alert("Signed out successfully");
                  navigate("/"); // Redirect to home page
              })
              .catch((error) => {
                  const errorMessage = error.message.replace('Firebase: ', '');
                  setError(errorMessage);
              });
      }
       
      return (
          <>
              <nav>
                  <section className="bg-gray-50 flex justify-center w-[98vw] items-center dark:bg-gray-900">
                      <div className="flex flex-col w-full items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                  <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                      See you soon!! 👋
                                  </h1>
                                  <form className="space-y-4 md:space-y-6">
                                      <button onClick={handleLogout} type="button" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Out</button>
                                      {error && <p className='text-red-800'>{error}</p>}
                                  </form>
                              </div>
                          </div>
                      </div>
                  </section>
              </nav>
          </>
      );
  }
  
  export default SignOut;
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
