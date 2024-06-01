const fs = require('fs');
const path = require('path');

function createLoginComponent() {
  const LoginContent = `
  
  import React, {useState} from 'react';
  import {  signInWithEmailAndPassword   } from 'firebase/auth';
  import { auth } from './firebase';
  import { NavLink, useNavigate } from 'react-router-dom'
   
  const Login = () => {
      const navigate = useNavigate();
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState('');

      const onLogin = async (e) => {
        e.preventDefault();
        setError('');
    
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          alert('Logged In successfully');
          navigate('/');
          console.log(userCredential.user);
        } catch (error) {
          const errorMessage = error.message.replace('Firebase: ', '');
          setError(errorMessage);
        }
      };
   
      return(
          <>
              <section className="bg-gray-50 flex  justify-center w-[98vw] items-center dark:bg-gray-900">
  <div className="flex flex-col w-full items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
     
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Login to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label htmlFor="email-address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input
                                      id="email-address"
                                      name="email"
                                      type="email"                                    
                                      required                                                                               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
                                      placeholder="Email address"
                                      onChange={(e)=>setEmail(e.target.value)}
                                  />
                      
                  </div>
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input
                                      id="password"
                                      name="password"
                                      type="password"                                    
                                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""         
                                      placeholder="••••••••" 
                                      onChange={(e)=>setPassword(e.target.value)}
                                  />
                  </div>
                  {error && <p className='text-red-800'>{error}</p>}
                  <button   onClick={onLogin}  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>
                  <p className="text-sm font-light flex justify-between pr-2 text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? 
                      <NavLink className="font-medium text-primary-600 hover:underline dark:text-primary-500" to="/signup">                      
                      Sign Up
                      </NavLink>

                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
          </>
      )
  }
   
  export default Login
            
  
  `;

  const componentsDir = path.join(process.cwd(), 'src', 'components');

  // Ensure the components directory exists
  if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir, { recursive: true });
  }

  const filePath = path.join(componentsDir, 'Login.jsx');

  fs.writeFileSync(filePath, LoginContent);
  console.log("Login.jsx file created successfully!");
}

module.exports = { createLoginComponent };
