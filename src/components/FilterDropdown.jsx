/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const FilterDropdown = ({ handleFilterChange }) => {
  return (
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Filter by Region
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" onClick={() => handleFilterChange('Africa')} href="#">
          Africa
        </a>
        <a className="dropdown-item" onClick={() => handleFilterChange('America')} href="#">
          America
        </a>
        <a className="dropdown-item" onClick={() => handleFilterChange('Asia')} href="#">
          Asia
        </a>
        <a className="dropdown-item" onClick={() => handleFilterChange('Europe')} href="#">
          Europe
        </a>
        <a className="dropdown-item" onClick={() => handleFilterChange('Oceania')} href="#">
          Oceania
        </a>
      </div>
    </div>
  );
};

export default FilterDropdown;
