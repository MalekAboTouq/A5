import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './favorites.css';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [isDragOver, setIsDragOver] = useState(false);

  useEffect(() => {
    loadFavoritesFromLocalStorage();
  }, []);

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragOver(false);
    const droppedData = event.dataTransfer.getData('text/plain');
    const droppedCountry = JSON.parse(droppedData);

    addToFavorites(droppedCountry);
  };

  const addToFavorites = (country) => {
    if (!country || !country.cca2) {
      console.error('Invalid country data:', country);
      return;
    }

    if (favorites.some((fav) => fav.code === country.cca2)) {
      toast.error('Country is already in favorites', {
        position: 'top-center',
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        style: {
          background: 'transperent',
          color: 'black',
          fontSize: '16px',
          borderRadius: '25px',
        },
      });
      return;
    }

    setFavorites((prevFavorites) => {
      const countryCode = country.cca2;
      const countryName = country.name.common;
      const flag = country.flags.svg;

      const newFavorites = [...prevFavorites, { code: countryCode, name: countryName, flag: flag }];

      saveFavoritesToLocalStorage(newFavorites);

      return newFavorites;
    });
  };

  const saveFavoritesToLocalStorage = (favoritesToSave) => {
    localStorage.setItem('favorites', JSON.stringify(favoritesToSave));
  };

  const removeFromFavorites = (countryCode) => {
    setFavorites((prevFavorites) => {
      const newFavorites = prevFavorites.filter((fav) => fav.code !== countryCode);
      saveFavoritesToLocalStorage(newFavorites);

      return newFavorites;
    });
  };

  const loadFavoritesFromLocalStorage = () => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  };

  return (
    <div
      className={`favourite data-mdb-perfect-scrollbar-init ${isDragOver ? 'drag-over' : ''}`}
      style={{ padding: '25px' }}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="favoritetitle">
        <h1>Favorites</h1>
      </div>
      <div className="favicons" style={{ height: '95%', border: 'none' }}>
        {favorites.map((favorite) => (
          <div key={favorite.code} className="favorite-card d-flex align-items-center justify-content-between" style={{ marginBottom: '10px' }} data-country-code={favorite.code}>
            <div className="d-flex align-items-center" style={{ width: '180px' }}>
              <a href={`/About/${favorite.name}`} style={{ display: 'flex', alignItems: 'center' }}>
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
      <ToastContainer />
    </div>
  );
};

export default Favorites;
