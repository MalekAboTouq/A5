import React from 'react';

const CountriesRight = ({ children }) => {
    return (
        <div className="CountriesRight" style={{ flex: 1, position: 'relative' }}>
            {/* <div id="overlayContainer">
                <div id="loadingIndicator" style={{ margin: 'auto' }}>
                    <div className="lds-grid">
                        <div></div><div></div><div></div>
                        <div></div><div></div><div></div>
                        <div></div><div></div><div></div>
                    </div>
                </div>
            </div> */}
            <div className="scrollbar row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3" id="countriesContainer" style={{ height: '1000px' }}>
                <div id="notFoundMessage" style={{ color: 'red', display: 'none' }}>Country not found!</div>
                {children}
            </div>
        </div>
    );
};

export default CountriesRight;