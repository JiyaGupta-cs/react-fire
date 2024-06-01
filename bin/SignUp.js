const fs = require('fs');
const path = require('path');

function createSignUpComponent() {
  const SignUpContent = `import React, { useState } from 'react';
  import { NavLink, useNavigate } from 'react-router-dom';
  import { createUserWithEmailAndPassword } from 'firebase/auth';
  import { auth } from './firebase';
  
  const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const onSubmit = async (e) => {
      e.preventDefault();
      setError('');
  
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        alert('Signed Up successfully');
        console.log('User signed up:', userCredential.user);
        navigate('/login');
      } catch (error) {
          const errorMessage = error.message.replace('Firebase: ', '');
        setError(errorMessage);
      }
    };
  
    return (
      <>
      
      <section className="bg-gray-50 flex  justify-center w-[98vw] items-center dark:bg-gray-900">
    <div className="flex flex-col w-full items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
       
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Create New Account
                </h1>
                <form className="space-y-4 md:space-y-6" action="#" onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="email-address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input
                                        id="email-address"
                                        name="email"
                                        type="email"                                    
                                        required     
                                        label="Email address"    
                                        value={email}                                                                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
                                        placeholder="Email address"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                   
                        
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                       
                                    <input
                    type="password"
                    label="Create password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="••••••••"
                  />
                    </div>
                    {error && <p className='text-red-800'>{error}</p>}
                    <button  type="submit"    className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>
  
                    <p className="text-sm font-light flex justify-between pr-2 text-gray-500 dark:text-gray-400">
                        Already have an account ? 
                        <NavLink className="font-medium text-blue-600 hover:underline dark:text-blue-500" to="/login">                      
                        Login
                        </NavLink>
  
                    </p>
                </form>
            </div>
        </div>
    </div>
  </section>
      </>
    );
  };
  
  export default Signup;
  `;

  const componentsDir = path.join(process.cwd(), 'src', 'components');

  // Ensure the components directory exists
  if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir, { recursive: true });
  }

  const filePath = path.join(componentsDir, 'SignUp.jsx');

  fs.writeFileSync(filePath, SignUpContent);
  console.log("SignUp.jsx file created successfully!");
}

module.exports = { createSignUpComponent };
