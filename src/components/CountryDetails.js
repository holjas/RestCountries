// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faLanguage } from "@fortawesome/free-solid-svg-icons";

const CountryDetails = (props) => {
  // const [country, setCountry] = useState({});
  console.log(props);
  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    languages,
    currencies,
    topLevelDomain,
    borders,
  } = props.location.countryProps.country;

  const formatStyle = (details) => {
    let result = [];
    details.map((detail) => {
      result.push(detail.name);
    });
    return result.join(", ");
  };

  console.log(borders);

  return (
    <div className='container'>
      <div className='row mt-5'>
        <div className='col'>
          <Link to='/'>
            <button type='button' className='btn btn-outline-secondary backBtn'>
              <FontAwesomeIcon
                icon={faArrowLeft}
                aria-hidden='true'
                title='dark mode on'
              />
              Back
            </button>
          </Link>
        </div>
      </div>

      <div className='row mt-5'>
        <div className='col-lg-5'>
          <img className='card-img-top' src={flag} alt={`flag of ${name}`} />
        </div>

        <div className='col-6'>
          <div className='row m-5'>
            <h2 className='card-title'>{name}</h2>
            <div className='col'>
              <p className='card-text'>
                <span>Native Name:</span>
                {nativeName}
              </p>
              <p className='card-text'>
                <span>Population:</span>
                {population}
              </p>
              <p className='card-text'>
                <span>Region:</span>
                {region}
              </p>
              <p className='card-text'>
                <span>Sub Region:</span>
                {subregion}
              </p>
              <p className='card-text'>
                <span>Capital:</span>
                {capital}
              </p>
            </div>

            <div className='col'>
              <p className='card-text'>
                <span>Top Level Domain:</span>
                {topLevelDomain}
              </p>
              <p className='card-text'>
                <span>Currencies:</span>
                {formatStyle(currencies)}
              </p>
              <p className='card-text'>
                <span>Languages:</span>
                {formatStyle(languages)}
              </p>
            </div>

            <div className='row mt-5'>
              <p className='card-text'>
                <span>Border Countries:</span>
                {borders.map((border) => {
                  return border + " - ";
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CountryDetails;
