import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/Home/home.jsx';
import About from './pages/Details/countryDetails.jsx';
import NotFoundPage from './pages/404/404.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is enabled and set it
    const storedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(storedDarkMode);
  }, []);

  // Toggle dark mode
  function toggleDarkMode() {
    const isDarkMode = !darkMode;
    console.log('Toggling dark mode:', isDarkMode);
    setDarkMode(isDarkMode);
    localStorage.setItem('darkMode', isDarkMode);
  }

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<HomePage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
          />
          <Route
            path="/About/:countryName"
            element={<About darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
          />
          {/*Redirect to 404 page if the route doesn't match*/}
          <Route
            path="*"
            element={<Navigate to="/404" />}
          />
          <Route path="/404" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
