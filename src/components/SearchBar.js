import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "../styles/App.css";

const Navigation = ({ captureRegion, captureSearchInput }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setUserInput(e.target.value);
  };

  return (
    <section>
      <div className='container pt-5 pb-5'>
        <div className='row'>
          {/* search input field.  */}
          <div className='col'>
            <form className='d-flex'>
              <input
                type='search'
                className='form-control rounded'
                placeholder='Search for a country...'
                aria-label='Search'
                aria-describedby='search-addon'
                onChange={handleChange}
                value={userInput}
              />
              <button
                type='submit'
                className='input-group-text border-0 btn btn-outline-dark'
                id='search-addon'
                onClick={(e) => {
                  e.preventDefault();
                  captureSearchInput(userInput);
                }}
              >
                <FontAwesomeIcon
                  icon={faSearch}
                  aria-hidden='true'
                  title='search button'
                />
              </button>
            </form>
          </div>

          {/* filter by region dropdown */}
          <div className='col d-flex justify-content-end'>
            <label htmlFor='filter-region'>filter by region</label>
            <select
              id='filter-region'
              name='filter-region'
              className='border'
              onChange={(e) => {
                captureRegion(e.target.value);
              }}
            >
              <option value='filter by region' defaultValue>
                Filter by Region
              </option>
              <option value='Africa'>Africa</option>
              <option value='Americas'>Americas</option>
              <option value='Asia'>Asia</option>
              <option value='Europe'>Europe</option>
              <option value='Oceania'>Oceania</option>
              <option value=''>Show All</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
