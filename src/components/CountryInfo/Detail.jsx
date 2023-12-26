import React from 'react';
import '../Card/detail.css'
import styled from 'styled-components';
const CountryInfo = ( {country} ) => {

  
  const StyledDetailCard = styled.div`
    max-width: 100% !important;
    background-color: var(--light1) !important;
    color: var(--black) !important;
    border: none !important;
  `;

  return (
    <footer className="flag-info">
  <div className="container text-left">
    <div className="card1 mb-3" style={{ maxWidth: '100%', StyledDetailCard }}>
      <div className="row g-0 row-col-1 row-cols-md-2">
        <div className="col-md-4">
          <img src={country?.flags?.png} alt="Country Flag" className="img-fluid" id="countryFlag" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div className="description col-lg-3 col-md-12">
              <div className="row">
                <h1 id="countryName" style={{ width: 'auto' }}>{country?.name?.common}</h1>
              </div>
              <div className="text-left">
                <div className="row row-cols-2 country-info">
                  <div className="col">
                    <p><span className="bold">Native Name:</span> {country?.name?.common} </p>
                    <p><span className="bold">Population:</span> {country?.population}</p>
                    <p><span className="bold">Region:</span> {country?.region}</p>
                    <p><span className="bold">Sub Region:</span> {country?.subregion}</p>
                    <p><span className="bold">Capital:</span> {country?.capital}</p>
                  </div>
                  <div className="col">
                    <p><span className="bold">Top Level Domain:</span> {country?.tld}</p>
                    <p><span className="bold">Currencies:</span>
                      {Object.keys(country?.currencies || {}).map((currencyCode, index, array) => (
                        <span key={currencyCode}>{country.currencies[currencyCode].name}{index < array.length - 1 && ', '}</span>
                      ))}
                    </p>
                    <p><span className="bold">Languages:</span> {Object.values(country?.languages || {}).join(', ')}</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="border-countries">
                  <p><span className="bold">Border Countries:</span></p>
                  <div className="move">
                    <span id="borderCountries" className="borderCountries">
                      {country?.borders?.length > 0 ? (
                        country.borders.map((borderCode, index) => (
                          <span className="border-box" key={index}>
                            {borderCode}
                          </span>
                        ))
                      ) : (
                        <span>No border countries</span>
                      )}
                    </span>
                  </div>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

    
  );
};

export default CountryInfo;
