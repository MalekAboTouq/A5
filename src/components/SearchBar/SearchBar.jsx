import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../mediaquery/mediaquery.css';
import './SearchBar.css';
import RegionDropdown from '../RegionDropdown/RegionDropdown.jsx';

const SearchBar = ({ handleFilterChange, handleSearch }) => {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filterNames = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'Favorites'];

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
    handleFilterChange(region);
  };

  const handleChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    handleSearch(query);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="searchbar container">
      <div className="d-flex justify-content-between container">
        <nav className="navbar">
          <form
            className="form-inline"
            style={{ boxShadow: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)' }}
            onSubmit={handleSubmit}
          >
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
                aria-label="Search"
                aria-describedby="basic-addon1"
                value={searchQuery}
                onChange={handleChange}
              />
            </div>
          </form>
        </nav>
        {/* Use the RegionDropdown component here */}
        <RegionDropdown
          selectedRegion={selectedRegion}
          handleRegionChange={handleRegionChange}
          filterNames={filterNames}
        />
      </div>
    </section>
  );
};

export default SearchBar;
