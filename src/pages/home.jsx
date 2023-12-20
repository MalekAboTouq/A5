import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header.jsx';
import SearchBar from '../components/SearchBar/SearchBar.jsx';
import CountryCard from '../components/CountryCard.jsx';
import CountriesRight from '../components/CountriesRight.jsx';
import { fetchCountries } from '../components/Api/apifetch.js';
import Favorites from '../components/Favorites/favorites.jsx';
import './home.css';

function HomePage({ darkMode, toggleDarkMode }) {
  const [countriesData, setCountriesData] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  const toggleFavorite = (countryCode) => {
    const isFavorite = favorites.includes(countryCode);
    if (isFavorite) {
      setFavorites(favorites.filter((code) => code !== countryCode));
    } else {
      setFavorites([...favorites, countryCode]);
    }
  };

  // This function filters countries by name
  const filterCountries = (searchQuery, countries) => {
    return countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };


  // This function filters countries by region
  const filterCountriesByRegion = (region, countries, favorites) => {

  
    return countries.filter(
      (country) => region === 'All' || country.region === region 
    );
  };


  const filterFavorites = (favorites, allCountries) => {
    return allCountries.filter((country) => favorites.includes(country.alpha2Code));
  };




  const handleSearch = (searchQuery) => {
    const filteredCountriesByName = filterCountries(searchQuery, countriesData);
    setFilteredCountries(filteredCountriesByName);
  };

  const handleFilterChange = (region) => {
    console.log('Selected Region:', region);

    if (region === 'Favorites') {
      // Load favorites from local storage
      const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
      console.log('Loaded favorites from local storage:', storedFavorites);

      // Filter countries by favorites from local storage
      const filteredFavorites = filterFavorites(storedFavorites, countriesData);
      console.log('Filtered Favorites:', filteredFavorites);

      setFilteredCountries(filteredFavorites);
    } else {
      const filteredCountriesByRegion = filterCountriesByRegion(region, countriesData);
      console.log('Filtered Countries by Region:', filteredCountriesByRegion);

      setFilteredCountries(filteredCountriesByRegion);
    }
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCountries();
        console.log('Fetched data:', data);
        setCountriesData(data);
  
        // Load favorites from local storage
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        console.log('Loaded favorites from local storage:', storedFavorites);
        setFavorites(storedFavorites);
        
        // Set initial filtered countries to all countries
        console.log('Initial Filtered Countries:', data);
        setFilteredCountries(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts
  
  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <SearchBar
        darkMode={darkMode}
        handleSearch={handleSearch}
        handleFilterChange={handleFilterChange}
      />
      <section className={`countriesInfo ${darkMode ? 'dark-mode' : ''}`}>
        <div className="container text-left">
          <div className="row row-col-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4">
            <Favorites
              darkMode={darkMode}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              showRemoveButton={true}
            />
            <CountriesRight darkMode={darkMode}>
              {filteredCountries.map((country, index) => (
                <CountryCard key={index} country={country} darkMode={darkMode} />
              ))}
            </CountriesRight>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
