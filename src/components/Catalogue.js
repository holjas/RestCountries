import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Catalogue = ({ countries, captureRegion, captureSearchInput }) => {
  console.log(countries);
  return (
    <>
      <SearchBar
        captureRegion={captureRegion}
        captureSearchInput={captureSearchInput}
      ></SearchBar>

      <div className="container">
        {countries.length === 0 ? (
          <h2>nothing to see here</h2>
        ) : (
          //   this will display when search is completed
          <div className="d-flex justify-content-around flex-wrap mt-4">
            {countries.map((country) => {
              //   format population numbers with commas
              const populationFormat = (population) => {
                return population
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
              };
              //return card for each country
              return (
                <div className="card mb-5 shadow-sm rounded" key={country.name}>
                  <Link to={`/country/${country.name}`}>
                    <img
                      className="card-img-top"
                      src={country.flag}
                      alt={country.name}
                    />
                  </Link>

                  <div className="card-body">
                    <h5 className="card-title">{country.name}</h5>
                    <p className="card-text">
                      <span>Population:</span>
                      {populationFormat(country.population)}
                    </p>
                    <p className="card-text">
                      <span>Region:</span>
                      {country.region}
                    </p>
                    <p className="card-text">
                      <span>Capital:</span>
                      {country.capital}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Catalogue;
