import React from 'react';

const Country = () => {
  return (
    <footer className="falg-info">
      <div className="container text-left">
        <div className="card mb-3" style={{ maxWidth: '100%' }}>
          <div className="row g-0 row-col-1 row-cols-md-2">
            <div className="col-md-4">
              <img src="assets/img/de.svg" alt="belgium flag" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div className="description col-lg-3 col-md-12">
                  <div className="row">
                    <h1>Belgium</h1>
                  </div>
                  <div className="text-left ">
                    <div className="row row-cols-2 country-info">
                      <div className="col">
                        <p><span className="bold">Native Name:</span> Belgie</p>
                        <p><span className="bold">Population:</span> 11,319,511</p>
                        <p><span className="bold">Region:</span> Europe</p>
                        <p><span className="bold">Sub Region:</span> Western Europe</p>
                        <p><span className="bold">Capital:</span> Brussels</p>
                      </div>
                      <div className="col-lg-3">
                        <p><span className="bold">Top Level Domain:</span> .be</p>
                        <p><span className="bold">Currencies:</span> Euro</p>
                        <p><span className="bold">Languages:</span> Dutch, French</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="border-contries">
                      <p>
                        <span className="bold">Border Countries:</span>
                        <div className="move">
                          <span className="border-box">France</span>
                          <span className="border-box">Germany</span>
                          <span className="border-box">Netherlands</span>
                        </div>
                      </p>
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

export default Country;
