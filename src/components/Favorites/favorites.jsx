import React from 'react';
import './favorites.css';

const Favorites = () => {
    return (
        <div className="favourite data-mdb-perfect-scrollbar-init" style={{ padding: '25px' }}>
            <div className="favoritetitle">
                <h1>Favorites</h1>
            </div>
            <div className="favicons" style={{ height: '95%', border: 'none' }}>
                <h1></h1>
                <div className="favorite-card d-flex align-items-center justify-content-between" data-country-code="Brazil">
                    <div className="d-flex align-items-center" style={{ width: "154px" }}>
                        <img src="https://flagcdn.com/br.svg" alt="Brazil" style={{ width: '35px', height: '20px', cursor: 'pointer', borderRadius: '0.3rem' }} />
                        <span className="text-truncate" title="Christmas Island" style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontWeight: 600, paddingLeft: '10px', fontSize: '16px' }}>Brazil</span>
                    </div>
                    <div>
                        <button className="btn btn-link remove-button" style={{ border: 'none' }}>×</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Favorites;
