import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import axios from "axios";
import Header from "./components/Header";
import Catalogue from "./components/Catalogue";
import CountryDetails from "./components/CountryDetails";

// stylesheets
import "./App.css";

// ---------------------
import testdata from "./response.json";
// ---------------------

const App = () => {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState("");
  const [searchByName, setSearchByName] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    setCountries(testdata);
  }, []);
  // useEffect(() => {
  //   axios({
  //     url: `https://restcountries.eu/rest/v2/`,
  //     method: "GET",
  //     dataResponse: "json",
  //   })
  //     .then((response) => {
  //       const countryResponse = response.data;
  //       setCountries(countryResponse);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  //serach for a country (user input)
  // const captureSearchInput = (input) => {
  //   const cleanUpInput = input.split(" ").join("").toLowerCase();
  //   axios({
  //     url: `https://restcountries.eu/rest/v2/name/${cleanUpInput}`,
  //     method: "GET",
  //     dataResponse: "json",
  //   })
  //     .then((response) => {
  //       const countryResponse = response.data;
  //       setCountries(countryResponse);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  const captureRegion = (e) => {
    setSearchByName("");
    setRegion(e);
  };
  const captureSearchInput = (e) => {
    setRegion("");
    setSearchByName(e);
  };
  const captureSelectedCounty = (e) => {
    console.log("function, captureselected", e.target.value);
    setSelectedCountry(e.target.value);
  };
  const renderedCountries = (countries) => {
    let result = countries;
    //filter by region
    if (region) {
      result = countries.filter((country) => {
        return country.region.includes(region);
      });
    }
    //filter by search term
    if (searchByName) {
      result = countries.filter((country) => {
        const searchTerm = searchByName.toLowerCase();
        return country.name.toLowerCase().includes(searchTerm);
      });
    }
    return result;
  };

  return (
    <Router>
      <Header></Header>

      <Route
        exact
        path='/'
        render={() => (
          <Catalogue
            countries={renderedCountries(countries)}
            captureRegion={captureRegion}
            captureSearchInput={captureSearchInput}
          />
        )}
      />

      <Route path='/country/:name'>
        <CountryDetails
          countries={countries}
          captureSelectedCounty={captureSelectedCounty}
          key={selectedCountry}
        />
      </Route>
    </Router>
  );
};

export default App;
