import React from 'react';
import '../Card/detail.css'
import styled from 'styled-components';
const CountryInfo = () => {

  
  const StyledDetailCard = styled.div`
    max-width: 100% !important;
    background-color: var(--light1) !important;
    color: var(--black) !important;
    border: none !important;
  `;

  return (
    <footer class="flag-info">
        <div class="container text-left">
            <div class="card mb-3" style={{ maxWidth: '100%',StyledDetailCard }} >
                <div class="row g-0 row-col-1 row-cols-md-2">
                    <div class="col-md-4">
                        <img src="/assets/img/de.svg" alt="Country Flag" class="img-fluid" id="countryFlag" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <div class="description col-lg-3 col-md-12">
                                <div class="row">
                                    <h1 id="countryName">Belgium</h1>
                                </div>
                                <div class="text-left">
                                <div class="row row-cols-2 country-info">
                                    <div class="col">
                                      <p><span class="bold">Native Name:</span> Belgie</p>
                                      <p><span class="bold">Population:</span> 11,319,511</p>
                                      <p><span class="bold">Region:</span> Europe</p>
                                      <p><span class="bold">Sub Region:</span> Western Europe</p>
                                      <p><span class="bold">Capital:</span> Brussels</p>
                                    </div>
                                    <div class="col-lg-3">
                                      <p><span class="bold">Top Level Domain:</span> .be</p>
                                      <p><span class="bold">Currencies:</span> Euro</p>
                                      <p><span class="bold">Languages:</span> Dutch, French</p>
                                    </div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="border-countries">
                                          <p><span class="bold">Border Countries:</span></p><div class="move">
                                              <span id="borderCountries">
                                                <span class="border-box">France</span>
                                                <span class="border-box">Germany</span>
                                                <span class="border-box">Netherlands</span>
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
