const fs = require('fs');
const path = require('path');

function createAppComponent() {
  const AppContent = `
  import React, { useState, useEffect } from 'react';
  import Home from './components/Home';
  import Signup from './components/SignUp';
  import Login from './components/Login';
  import SignOut from './components/SignOut';
  import { BrowserRouter as Router } from 'react-router-dom';
  import { Routes, Route } from 'react-router-dom';
  
  function App() {
  
    return (
      <Router>
        <div>
          <section>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signout" element={<SignOut/>} />
            </Routes>
          </section>
        </div>
      </Router>
    );
  }
  
  export default App;
  `;

  const componentsDir = path.join(process.cwd(), 'src',);

  // Ensure the components directory exists
  if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir, { recursive: true });
  }

  const filePath = path.join(componentsDir, 'App.jsx');

  fs.writeFileSync(filePath, AppContent);
  console.log("App.jsx file created successfully!");
}

module.exports = { createAppComponent };
