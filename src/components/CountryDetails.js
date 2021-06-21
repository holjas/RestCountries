import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const CountryDetails = (props) => {
  const [country, setCountry] = useState({});
  const [countryLoaded, setCountryLoaded] = useState(false);

  useEffect(() => {
    const countrySelected = props.match.params.name;
    //remove white space, turn to lower case to avoid errors in search
    const cleanUpInput = countrySelected.split(" ").join("").toLowerCase();
    axios({
      url: `https://restcountries.eu/rest/v2/name/${cleanUpInput}`,
      method: "GET",
      dataResponse: "json",
    })
      .then((response) => {
        const countryResponse = response.data[0];
        setCountry(countryResponse);
        setCountryLoaded(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props]);

  console.log(country);
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <Link to="/">
            <button type="button" className="btn btn-outline-secondary">
              <FontAwesomeIcon
                icon={faArrowLeft}
                aria-hidden="true"
                title="dark mode on"
              />
              Back
            </button>
          </Link>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-lg-5">
          <img className="card-img-top" src={country.flag} alt={country.name} />
        </div>

        <div className="col-6">
          <div className="row m-5">
            <h2 className="card-title">{country.name}</h2>
            <div className="col">
              <p className="card-text">
                <span>Native Name:</span>
                {country.nativeName}
              </p>
              <p className="card-text">
                <span>Population:</span>
                {country.population}
              </p>
              <p className="card-text">
                <span>Region:</span>
                {country.region}
              </p>
              <p className="card-text">
                <span>Sub Region:</span>
                {country.subregion}
              </p>
              <p className="card-text">
                <span>Capital:</span>
                {country.capital}
              </p>
            </div>

            <div className="col">
              <p className="card-text">
                <span>Top Level Domain:</span>
                {country.topLevelDomain}
              </p>
              <p className="card-text">
                <span>Currencies:</span>
                {/* {country.currencies[0].code} */}
              </p>
              <p className="card-text">
                <span>Languages:</span>
                {/* {languages.map((x) => {
              return x.name;
            })} */}
              </p>
            </div>

            <div className="row mt-5">
              <p className="card-text">
                <span>Border Countries:</span>
                {countryLoaded && (
                  <button type="button" className="btn btn-outline-secondary">
                    {country.name}
                  </button>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CountryDetails;
