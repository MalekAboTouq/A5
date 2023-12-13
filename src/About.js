import React from 'react';
import Header from './components/Header/Header.jsx';
import BackButton from './components/CountryInfo/BackButton.jsx';

const About = () => {
  return (
    <div>
      <Header />
      <BackButton />
      <h2>About Page</h2>
      <p>This is the about page content.</p>
    </div>
  );
};

export default About;
