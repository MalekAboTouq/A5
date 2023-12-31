import React, { useEffect, useState, useRef  } from 'react';
import Header from '../../components/Header/Header.jsx';
import SearchBar from '../../components/SearchBar/SearchBar.jsx';
import CountryCard from '../../components/CountryCard.jsx';
import CountriesRight from '../../components/CountriesRight.jsx';
import { fetchCountries } from '../../Api/apifetch.js';
import Favorites from '../../components/Favorites/favorites.jsx';

import '../Home/home.css';

function HomePage({ darkMode, toggleDarkMode }) {
  const [countriesData, setCountriesData] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const searchTimeoutRef = useRef(null);

  const toggleFavorite = (countryCode) => {
    const isFavorite = favorites.includes(countryCode);
    if (isFavorite) {
      setFavorites(favorites.filter((code) => code !== countryCode));
    } else {
      setFavorites([...favorites, countryCode]);
    }
  };

  const filterCountries = (searchQuery, countries) => {
    return countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const filterCountriesByRegion = (region, countries) => {
    return countries.filter(
      (country) => region === 'All' || country.region === region
    );
  };

  const handleSearch = async (query) => {
    //Clear existing timeout if it exists
    clearTimeout(searchTimeoutRef.current);

    searchTimeoutRef.current = setTimeout(async () => {
      setSearchQuery(query);

      try {
        let searchData = [];

        if (query.length >= 1) {
          // Fetch countries based on the search query
          const response = await fetch(`https://restcountries.com/v3.1/name/${query}`);
          searchData = await response.json();
        }
        // Filter countries by region
        const filteredCountriesByRegion = filterCountriesByRegion(selectedRegion, countriesData);

        // Combine the results of name and region filters if the query is not empty
        const combinedFilteredCountries = query.length >= 1
          ? searchData.filter(country =>
              filteredCountriesByRegion.some(filteredCountry => filteredCountry.name.common === country.name.common)
            )
          : filteredCountriesByRegion;

        setFilteredCountries(combinedFilteredCountries);
      } catch (error) {
        console.error('Error fetching countries by name:', error);
        // Handle error or clear the filtered countries
        setFilteredCountries([]);
      }
    }, 500);
  };


  const filterFavoriteNames = (favorites, allCountries) => {
    const favoriteCountries = allCountries.filter(country => favorites.includes(country.code));
    return favoriteCountries;
  };
  

  const handleFilterChange = (region, searchData) => {
    console.log('Selected Region:', region);
  
    if (region === 'Favorites') {
      const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
      console.log('Loaded favorites from local storage:', storedFavorites);
  
      //Filter country objects based on favorites
      const favoriteCountryNames = filterFavoriteNames(storedFavorites, countriesData);
      console.log('Favorite Countries:', favoriteCountryNames);
  
      setFilteredCountries(favoriteCountryNames);
    } else if (region === 'SearchResults') {
      console.log('Countries:', searchData);
      setFilteredCountries(searchData);
    } else {
      //Update the selected region
      setSelectedRegion(region);
      //Filter countries by both name and region
      const filteredCountriesByName = filterCountries(searchQuery, countriesData);
      const filteredCountriesByRegion = filterCountriesByRegion(region, countriesData);
  
      const combinedFilteredCountries = filteredCountriesByName.filter((country) =>
        filteredCountriesByRegion.includes(country)
      );
  
      setFilteredCountries(combinedFilteredCountries);
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
        //Fetch countries data
        const data = await fetchCountries();
        setCountriesData(data);
  
        //Load favorites from local storage
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storedFavorites);
  
        //Filter and set initial countries
        const initialFilteredCountries = filterCountriesByRegion(selectedRegion, data);
        setFilteredCountries(initialFilteredCountries);
  
        setLoading(false);
        //Clear any existing errors
        setError(null);
      } catch (error) {
        console.error(error);
        //Update the error state
        setError('Error fetching countries');
        setLoading(false);
      }
    };
  
    fetchData();
  }, [selectedRegion]);
  

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
            <CountriesRight darkMode={darkMode} errorMessage={error} loading={loading}>
              {loading && (
                <div id="loadingIndicator" style={{ margin: 'auto' }}>
                  <div className="lds-grid">
                    <div></div><div></div><div></div>
                    <div></div><div></div><div></div>
                    <div></div><div></div><div></div>
                  </div>
                </div>
              )}
              {!loading && !error && (
                <React.Fragment>
                  {filteredCountries.map((country, index) => (
                    <CountryCard key={index} country={country} darkMode={darkMode} />
                  ))}
                </React.Fragment>
              )}
            </CountriesRight>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;