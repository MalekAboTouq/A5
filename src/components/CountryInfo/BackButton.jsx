import React from 'react';
import { Link } from 'react-router-dom';

const BackButton = () => {
  return (
    <section className="searchbar">
      <div className="d-flex justify-content-between container">
        <Link to="/">
          <div className="search-container">
            <span className="button-back">
              <i className="fa-solid fa-arrow-left"></i>
              <span className="button-space">Back</span>
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default BackButton;
