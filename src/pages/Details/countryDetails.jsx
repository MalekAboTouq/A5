import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header.jsx';
import BackButton from '../../components/Button/BackButton.jsx';
import CountryInfo from '../../components/CountryInfo/Detail.jsx';
import '../../components/CountryInfo/country.css';
import { useNavigate, useParams } from 'react-router-dom';

const About = ({ darkMode, toggleDarkMode }) => {
  const [countryData, setCountryData] = useState({});
  const navigate = useNavigate();
  const { countryName } = useParams();

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
  
        if (!response.ok) {
          if (response.status === 0) {
            throw new Error('Network error: Unable to connect to the API');
          } else {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
          }
        }
        
        const data = await response.json();
    
        if (Array.isArray(data)) {
          setCountryData(data[0]);
          console.log('Fetched country data:', data[0]);
        } else {
          throw new Error('Country data is empty or not in the expected format');
        }
      } catch (error) {
        console.error('Error fetching country data:', error);
        // Handle error or redirect to a 404 page
        navigate('/404');
      }
    };
  
    fetchCountryData();
  }, [countryName, navigate]);

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
      <CountryInfo country={countryData} />
    </div>
  );
};

export default About;
