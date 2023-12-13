import React from 'react';
import Header from '../components/Header/Header.jsx';
import BackButton from '../components/CountryInfo/BackButton.jsx';
import CountryInfo from '../components/CountryInfo/Detail.jsx';
// import BackButton from './components/CountryInfo/BackButton';
import '../components/CountryInfo/country.css'
const About = () => {
  return (
    <div>
      <Header />
      <BackButton />
      <CountryInfo/>
    </div>
  );
};

export default About;