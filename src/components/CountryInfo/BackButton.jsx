// src/components/CountryInfo/BackButton.jsx
import React from 'react';
import './button.css'
const BackButton = () => {
  const linkStyle = {
    boxShadow: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)',
  };

  return (
    <section class="searchbar">
        <div class="d-flex justify-content-between container">
            <a href="/" style={linkStyle} >
                <div class="search-container">
                    <span class="button-back"><i class="fa-solid fa-arrow-left"></i><span class="button-space">Back</span></span>
                </div>
            </a>
        </div>
    </section>
  );
};

export default BackButton;
