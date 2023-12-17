import React,{useEffect} from 'react';
import Header from '../components/Header/Header.jsx';
import BackButton from '../components/CountryInfo/BackButton.jsx';
import CountryInfo from '../components/CountryInfo/Detail.jsx';
// import BackButton from './components/CountryInfo/BackButton';
import '../components/CountryInfo/country.css'
const About = ({ darkMode, toggleDarkMode  }) => {

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);


  return (
    <div>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <BackButton />
      <CountryInfo/>
    </div>
  );
};

export default About;