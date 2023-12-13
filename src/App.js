import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import HomePage from './pages/home.jsx';
import About from './pages/countryDetails.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
// Import jQuery, and Bootstrap JavaScript
import 'jquery/dist/jquery.slim.min';
import 'bootstrap/dist/js/bootstrap.min';
function App() {

  const [darkMode] = useState(false);

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
