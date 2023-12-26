import React from 'react';

const CountriesRight = ({ children, errorMessage, loading }) => {
  return (
    <div className="CountriesRight" style={{ flex: 1, position: 'relative' }}>
      <div id="errorMessage" style={{ color: 'green', display: errorMessage ? 'block' : 'none' }}>
        {errorMessage}
      </div>

      <div className="scrollbar row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3" id="countriesContainer" style={{ height: '75vh' }}>
        {loading && (
          <div id="loadingIndicator" style={{ margin: 'auto' }}>
            <div className="lds-grid">
              <div></div><div></div><div></div>
              <div></div><div></div><div></div>
              <div></div><div></div><div></div>
            </div>
          </div>
        )}

        {!loading && children}
      </div>
    </div>
  );
};

export default CountriesRight;
