/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../mediaquery/mediaquery.css'
import './SearchBar.css'
const SearchBar = ({ handleFilterChange }) => {
  const [selectedRegion, setSelectedRegion] = useState('All');

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
    handleFilterChange(region);
  };
  

  return (
    <section className="searchbar container">
      <div className="d-flex justify-content-between container">
        <nav className="navbar">
          <form className="form-inline" style={{ boxShadow: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)' }}>
            <div className="input-group">
              <div className="search-container">
                <button type="submit">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Search for a country..."
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </form>
        </nav>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"

          >
            {selectedRegion === 'Favorites' ? 'Favorites' : `Filter by ${selectedRegion}`}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" onClick={() => handleRegionChange('All')}>
              All
            </a>
            <a className="dropdown-item" onClick={() => handleRegionChange('Africa')}>
              Africa
            </a>
            <a className="dropdown-item" onClick={() => handleRegionChange('Americas')}>
              America
            </a>
            <a className="dropdown-item" onClick={() => handleRegionChange('Asia')}>
              Asia
            </a>
            <a className="dropdown-item" onClick={() => handleRegionChange('Europe')}>
              Europe
            </a>
            <a className="dropdown-item" onClick={() => handleRegionChange('Oceania')}>
              Oceania
            </a>
            <a className="dropdown-item" onClick={() => handleRegionChange('Favorites')}>
              Favorites
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
