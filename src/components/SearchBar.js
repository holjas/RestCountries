import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "../styles/SearchBar.css";

const Navigation = ({ captureRegion }) => {
  return (
    <section>
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col">
            <form className="d-flex">
              <button
                className="input-group-text border-0 btn btn-outline-dark"
                id="search-addon"
              >
                <FontAwesomeIcon
                  icon={faSearch}
                  aria-hidden="true"
                  title="search button"
                />
              </button>
              <input
                type="search"
                className="form-control rounded"
                placeholder="Search for a country..."
                aria-label="Search"
                aria-describedby="search-addon"
              />
            </form>
          </div>

          <div className="col d-flex justify-content-end">
            <label htmlFor="filter-region">filter by region</label>
            <select
              id="filter-region"
              name="filter-region"
              className="border"
              onChange={(e) => {
                captureRegion(e.target.value);
              }}
            >
              <option value="filter by region" defaultValue>
                Filter by Region
              </option>
              <option value="africa">Africa</option>
              <option value="america">America</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
