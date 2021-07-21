import { useHistory } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import ScrollToTop from "./ScrollToTop";

const CountryDetails = ({ countries, captureSelectedCounty }) => {
  const history = useHistory();

  const chosenCountry = history.location.selectedCountry.myCountry.alpha3Code;
  const populationFormat = history.location.data.populationFormat;

  const countryDetails = countries.filter((country) => {
    return country.alpha3Code.includes(chosenCountry) ? country.name : null;
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
          <button
            type='button'
            className='btn btn-outline-secondary backBtn'
            onClick={() => {
              history.push(`/`);
            }}
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              aria-hidden='true'
              title='dark mode on'
            />
            Back
          </button>
        </div>
      </div>

      <div className='row mt-5'>
        <div className='col-lg-5'>
          <img className='card-img-top' src={flag} alt={name} />
        </div>

        <div className='col'>
          <div className='row m-5'>
            <h2 className='card-title'>{name} </h2>
            <div className='col'>
              <p className='card-text'>
                <span>Native Name:</span>
                {nativeName}
              </p>
              <p className='card-text'>
                <span>Population:</span>
                {populationFormat(population)}
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
              <div className='col-lg-3'>
                <p className='card-text'>
                  <span>Border Countries:</span>
                </p>
              </div>
              <div className='col'>
                {borderCountries(borders).map((borderCountry) => {
                  return (
                    <button
                      key={borderCountry.name}
                      className='btn btn-outline-secondary borderBtn m-1'
                      value={borderCountry.name}
                      onClick={(e) => {
                        captureSelectedCounty(e);
                        history.push({
                          pathname: `/country/${borderCountry.name}`,
                          selectedCountry: {
                            myCountry: borderCountry,
                          },
                          data: {
                            populationFormat: populationFormat,
                          },
                        });
                      }}
                    >
                      {borderCountry.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTop></ScrollToTop>
    </div>
  );
};
export default CountryDetails;
