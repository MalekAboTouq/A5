import React from 'react';
import Header from './components/Header';
import BackButton from './components/CountryInfo/BackButton';

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
