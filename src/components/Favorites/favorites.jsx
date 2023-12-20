import React, { useState, useEffect } from 'react';
import './favorites.css';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    loadFavoritesFromLocalStorage();
  }, []);

  const handleDragOver = (event) => {
    event.preventDefault();
    console.log('Drag over event');
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedData = event.dataTransfer.getData('text/plain');
    const droppedCountry = JSON.parse(droppedData);

    console.log('Dropped country:', droppedCountry);

    addToFavorites(droppedCountry);
  };

  const addToFavorites = (country) => {
    console.log('Adding to favorites:', country);

    if (!country || !country.cca2) {
      console.error('Invalid country data:', country);
      return;
    }

    setFavorites((prevFavorites) => {
      const countryCode = country.cca2;
      const countryName = country.name.common;
      const flag = country.flags.svg;

      // Check if the country is already in favorites
      if (prevFavorites.some((fav) => fav.code === countryCode)) {
        console.log('Country is already in favorites');
        return prevFavorites;
      }
      // Update state with the new favorite
      const newFavorites = [...prevFavorites, { code: countryCode, name: countryName, flag: flag }];

      // Save favorites to local storage
      saveFavoritesToLocalStorage(newFavorites);

      return newFavorites;
    });
  };

  const saveFavoritesToLocalStorage = (favoritesToSave) => {
    console.log('Saving favorites to local storage:', favoritesToSave);
    localStorage.setItem('favorites', JSON.stringify(favoritesToSave));
  };

  const removeFromFavorites = (countryCode) => {
    // Remove the country from favorites in state
    setFavorites((prevFavorites) => {
      const newFavorites = prevFavorites.filter((fav) => fav.code !== countryCode);

      // Save favorites to local storage
      saveFavoritesToLocalStorage(newFavorites);

      return newFavorites;
    });
  };

  const loadFavoritesFromLocalStorage = () => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    console.log('Loaded favorites from local storage:', storedFavorites);
    setFavorites(storedFavorites);
  };

  return (
    <div className="favourite data-mdb-perfect-scrollbar-init" style={{ padding: '25px' }} onDragOver={handleDragOver} onDrop={handleDrop}>
      <div className="favoritetitle">
        <h1>Favorites</h1>
      </div>
      <div className="favicons" style={{ height: '95%', border: 'none' }}>
        {favorites.map((favorite) => (
          <div key={favorite.code} className="favorite-card d-flex align-items-center justify-content-between" style={{ marginBottom: "10px" }} data-country-code={favorite.code} >
            <div className="d-flex align-items-center" style={{ width: "180px" }}>
              <a href={`/About`} style={{ display: 'flex', alignItems: 'center' }}>
                <img src={favorite.flag} alt={favorite.name} style={{ width: '35px', height: '20px', cursor: 'pointer', borderRadius: '0.3rem' }} />
                <span className="text-truncate" title={favorite.name} style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontWeight: 600, paddingLeft: '10px', fontSize: '16px' }}>{favorite.name}</span>
              </a>
            </div>
            <div>
              <button className="btn btn-link remove-button" style={{ border: 'none' }} onClick={() => removeFromFavorites(favorite.code)}>×</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
