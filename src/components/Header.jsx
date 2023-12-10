import React, { useEffect } from 'react';

const Header = ({ toggleDarkMode }) => {
  useEffect(() => {
    const handleDarkModeToggle = () => {
      document.body.classList.toggle('dark-mode');
    };

    const darkModeToggleBtn = document.getElementById('darkModeToggle');
    darkModeToggleBtn.addEventListener('click', handleDarkModeToggle);

    return () => {
      darkModeToggleBtn.removeEventListener('click', handleDarkModeToggle);
    };
  }, []); 

  return (
    <header class="header"  >
        <div class="d-flex justify-content-between container">
            <h1>Where in the world?</h1>

            <button id="darkModeToggle" onclick="toggleDarkMode()">
                <i class="fa-regular fa-moon"></i>
                <span class="icon-text">Dark Mode</span>
            </button>
        </div>
    </header>
  );
};

export default Header;
