import React from 'react';

const RegionDropdown = ({ selectedRegion, handleRegionChange, filterNames }) => {
  return (
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
        {filterNames.map((filter) => (
          <button key={filter} className="dropdown-item" onClick={() => handleRegionChange(filter)}>
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RegionDropdown;
