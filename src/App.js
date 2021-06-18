import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Catalogue from "./components/Catalogue";

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

  return (
    <Router>
      <Header></Header>
      <SearchBar captureRegion={captureRegion}></SearchBar>
      <Catalogue countries={countries}></Catalogue>
    </Router>
  );
};

export default App;
