// src/components/CountryInfo/BackButton.jsx
import React from 'react';
import './country.css'
const BackButton = () => {

  return (
    <section class="searchbar">
        <div class="d-flex justify-content-between container">
            <a href="/">
                <div class="search-container">
                    <span class="button-back"><i class="fa-solid fa-arrow-left"></i><span class="button-space">Back</span></span>
                </div>
            </a>
        </div>
    </section>
  );
};

export default BackButton;
