import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
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
  const captureSearchInput = (input) => {
    const cleanUpInput = input.split(" ").join("").toLowerCase();
    axios({
      url: `https://restcountries.eu/rest/v2/name/${cleanUpInput}`,
      method: "GET",
      dataResponse: "json",
    })
      .then((response) => {
        const countryResponse = response.data;
        setCountries(countryResponse);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const captureRegion = (e) => {
    setRegion(e);
  };

  const renderedCountries = (countries) => {
    let result = countries;
    //filter by region
    if (region) {
      result = countries.filter((country) => {
        return country.region.includes(region);
      });
    }
    if (searchByName) {
      console.log("you serach byNAME");
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

      <Route
        path='/country/:name'
        component={CountryDetails}
        captureSearchInput={captureSearchInput}
      />
    </Router>
  );
};

export default App;
