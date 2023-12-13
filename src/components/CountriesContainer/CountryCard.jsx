import React from 'react';

const CountryCard = ({ country }) => {
  return (
    <div className="col-lg-3">
      <div className="card">
        <a href={`/About`} className="card-img-top clickcountry">
          <img src={country.flag} style={{ height: '100%', width: '100%', objectFit: 'cover' }} alt={country.name} />
        </a>
        <div className="card-body">
          <h2 className="card-title text-truncate">
            <a href={`/About`}>{country.name}</a>
          </h2>
          <p className="card-text text-truncate">
            <span className="bold">Population:</span> {country.population}
          </p>
          <p className="card-text text-truncate">
            <span className="bold">Region:</span> {country.region}
          </p>
          <p className="card-text text-truncate">
            <span className="bold">Capital:</span> {country.capital}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
