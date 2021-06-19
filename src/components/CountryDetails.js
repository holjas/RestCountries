import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const CountryDetails = (props) => {
  const [country, setCountry] = useState({});
  console.log(country);

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
        const countryResponse = response.data;
        setCountry(countryResponse);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props]);

  //   const {
  //     // flag,
  //     name,
  //     nativeName,
  //     population,
  //     region,
  //     subregion,
  //     captial,
  //     topLevelDomain,
  //     currencies,
  //   } = country[0];
  //   console.log(currencies[0]);
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

      <div className="row">
        <div className="col-lg-6">
          {/* <img className="card-img-top" src={flag} alt={name} /> */}
        </div>
        {/* <div className="col-lg-6">
          <h5>{name}</h5>
          <p>
            <span>Native Name:</span>
            {nativeName}
          </p>
          <p>
            <span>Population:</span>
            {population}
          </p>
          <p>
            <span>Region:</span>
            {region}
          </p>
          <p>
            <span>Sub Region:</span>
            {subregion}
          </p>
          <p>
            <span>Capital:</span>
            {captial}
          </p>
          <p>
            <span>Top Level Domain:</span>
            {topLevelDomain}
          </p>
          <p>
            <span>Currencies:</span>
            {currencies[0].code}
            {currencies}
          </p>
        </div> */}
      </div>
    </div>
  );
};
export default CountryDetails;
