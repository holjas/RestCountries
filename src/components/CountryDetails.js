import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const CountryDetails = (props) => {
  const history = useHistory();
  const chosenCountry = history.location.selectedCountry.myCountry.name;

  const countryDetails = props.countries.filter((country) => {
    return country.name.includes(chosenCountry);
  });

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
  } = countryDetails[0];

  const borderCountries = (borders) => {
    let results = [];
    let countries = props.countries;
    results = countries.filter((country) => {
      return borders.includes(country.alpha3Code);
    });
    return results;
  };

  const formatStyle = (details) => {
    let result = [];
    details.map((detail) => {
      return result.push(detail.name);
    });
    return result.join(", ");
  };

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
          <img className='card-img-top' src={flag} alt={name} />
        </div>

        <div className='col-6'>
          <div className='row m-5'>
            <h2 className='card-title'>{name} </h2>
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
                {borderCountries(borders).map((borderCountry) => {
                  return (
                    <Link
                      to={{
                        pathname: `/country/${borderCountry.name}`,
                        selectedCountry: {
                          myCountry: "Canada",
                        },
                      }}
                    >
                      <button
                        className='btn btn-outline-secondary borderBtn m-1'
                        key={borderCountry.alpha3Code}
                      >
                        {borderCountry.name}
                      </button>
                    </Link>
                  );
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
