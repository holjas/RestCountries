import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Catalogue from "./components/Catalogue";
import CountryDetails from "./components/CountryDetails";

// stylesheets
import "./App.css";

const App = () => {
  const [countries, setCountries] = useState([]);

  //return countries from region selected
  const captureRegion = (region) => {
    axios({
      url: `https://restcountries.eu/rest/v2/region/${region}`,
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

  //return countries from search by user input
  const captureSearchInput = (input) => {
    //remove white space, turn to lower case to avoid errors in search
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

  return (
    <Router>
      <Header></Header>
      <SearchBar
        captureRegion={captureRegion}
        captureSearchInput={captureSearchInput}
      ></SearchBar>

      <Route
        exact
        path="/"
        render={() => <Catalogue countries={countries} />}
      />

      <Route
        path="/country/:name"
        render={() => <CountryDetails countries={countries} />}
      />
    </Router>
  );
};

export default App;
