import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Catalogue from "./components/Catalogue";
import CountryDetails from "./components/CountryDetails";

// stylesheets
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/theme";
import { GlobalStyles } from "./components/global";
import "./styles/App.css";

// ---------------------
// import testdata from "./response.json";
// ---------------------

const App = () => {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState("");
  const [searchByName, setSearchByName] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [theme, setTheme] = useState(true);

  // useEffect(() => {
  //   setCountries(testdata);
  // }, []);

  useEffect(() => {
    axios({
      url: `https://restcountries.eu/rest/v2/`,
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
  }, []);

  const captureRegion = (e) => {
    setSearchByName("");
    setRegion(e);
  };
  const captureSearchInput = (e) => {
    setSearchByName(e);
  };
  const captureSelectedCounty = (e) => {
    setSelectedCountry(e.target.value);
  };
  const captureTheme = () => {
    setTheme(!theme);
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
      <ThemeProvider theme={theme ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Header captureTheme={captureTheme} theme={theme}></Header>

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
      </ThemeProvider>
    </Router>
  );
};

export default App;
