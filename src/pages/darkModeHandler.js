import { useEffect } from 'react';

// Function to toggle dark mode
export function useDarkMode() {
  const toggleDarkMode = () => {
    const body = document.body;
    const isDarkMode = body.classList.toggle('dark-mode');
    const modeText = isDarkMode ? 'Light mode' : 'Dark mode';
    localStorage.setItem('darkMode', isDarkMode);
    setModeText(modeText);
  };

  // Set mode text
  const setModeText = (text) => {
    const modeTextElement = document.getElementById('modeText');
    if (modeTextElement) {
      modeTextElement.textContent = text;
    }
  };

  // Check if dark mode is enabled and set it
  const initializeDarkMode = () => {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode) {
      document.body.classList.add('dark-mode');
      setModeText('Light mode');
    } else {
      setModeText('Dark mode');
    }
  };

  // Initialize dark mode on component mount
  useEffect(() => {
    initializeDarkMode();
  }, []);

  return { toggleDarkMode };
}
