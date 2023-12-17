import React, { useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import '../mediaquery/mediaquery.css';

const Header = ({ toggleDarkMode }) => {
  useEffect(() => {
    const handleDarkModeToggle = () => {
      // Call the prop function to toggle dark mode
      toggleDarkMode();
    };

    const darkModeToggleBtn = document.getElementById('darkModeToggle');
    darkModeToggleBtn.addEventListener('click', handleDarkModeToggle);

    return () => {
      darkModeToggleBtn.removeEventListener('click', handleDarkModeToggle);
    };
  }, [toggleDarkMode]);

  return (
    <header className="header">
      <div className="d-flex justify-content-between container">
        <h1>Where in the world?</h1>
        <button id="darkModeToggle">
          <i className="fa-regular fa-moon"></i>
          <span className="icon-text">Dark Mode</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
