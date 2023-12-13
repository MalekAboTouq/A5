import React from 'react';
import Header from '../components/Header/Header.jsx';
import SearchBar from '../components/SearchBar/SearchBar.jsx';
import CountryCard from '../components/CountryCard.jsx';

function HomePage() {
    const countriesData = [
        { name: 'Germany', flag: `${process.env.PUBLIC_URL}/assets/img/de.svg`, population: 81770900, region: 'Europe', capital: 'Berlin' },
        { name: 'United States', flag: `${process.env.PUBLIC_URL}/assets/img/us.svg`, population: 323947000, region: 'Americas', capital: 'Washington D.C.' },
        { name: 'Brazil', flag: `${process.env.PUBLIC_URL}/assets/img/br.svg`, population: 206135893, region: 'Americas', capital: 'Brasilia' },
        { name: 'Iceland', flag: `${process.env.PUBLIC_URL}/assets/img/is.svg`, population: 334300, region: 'Europe', capital: 'Reykjavik' },
        { name: 'Afghanistan', flag: `${process.env.PUBLIC_URL}/assets/img/af.svg`, population: 27657145, region: 'Asia', capital: 'Kabul' },
        { name: 'Aland Islands', flag: `${process.env.PUBLIC_URL}/assets/img/ax.svg`, population: 28875, region: 'Europe', capital: 'Mariehamn' },
        { name: 'Albania', flag: `${process.env.PUBLIC_URL}/assets/img/al.svg`, population: 2886026, region: 'Europe', capital: 'Tirana' },
        { name: 'Algeria', flag: `${process.env.PUBLIC_URL}/assets/img/dz.svg`, population: 40400000, region: 'Africa', capital: 'Algiers' },
      ];
      const handleSearch = (s) => {
    
      };
    
      
      const handleFilterChange = (r) => {
        
      };
    return(
        <div>
            <Header />
            <SearchBar handleSearch={handleSearch} handleFilterChange={handleFilterChange} />
            <section className="countriesInfo">
            <div className="container text-left">
                <div className="row row-col-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4">
                {countriesData.map((country, index) => (
                    <CountryCard key={index} country={country}/>
                ))}
                </div>
            </div>
            </section>
        </div>
    );
      
    

}

export default HomePage;