import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "../styles/SearchBar.css";

const Navigation = () => {
  return (
    <section>
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col">
            <form className="d-flex">
              <button
                className="input-group-text border-0 bg-light"
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

          <div className="col">
            <div class="dropdown">
              <button
                class="btn btn-lg dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Filter by Region
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
