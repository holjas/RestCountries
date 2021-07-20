import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Catalogue = ({ countries, captureRegion, captureSearchInput }) => {
  const populationFormat = (population) => {
    return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <>
      <SearchBar
        captureRegion={captureRegion}
        captureSearchInput={captureSearchInput}
      ></SearchBar>

      <div className='container'>
        <div className='d-flex justify-content-around flex-wrap mt-4'>
          {countries.map((country) => {
            return (
              <div className='card mb-5 shadow-sm rounded' key={country.name}>
                <Link
                  to={{
                    pathname: `/country/${country.name}`,
                    selectedCountry: {
                      myCountry: country,
                    },
                  }}
                >
                  <img
                    className='card-img-top'
                    src={country.flag}
                    alt={country.name}
                  />
                </Link>

                <div className='card-body'>
                  <h5 className='card-title'>{country.name}</h5>
                  <p className='card-text'>
                    <span>Population:</span>
                    {populationFormat(country.population)}
                  </p>
                  <p className='card-text'>
                    <span>Region:</span>
                    {country.region}
                  </p>
                  <p className='card-text'>
                    <span>Capital:</span>
                    {country.capital}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Catalogue;
