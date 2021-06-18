// import axios from "axios";
import { useState } from "react";
// import { Link } from "react-router-dom";

const Catalogue = ({ countries }) => {
  return (
    <div>
      {countries.map((country) => {
        return <p>{country.name}</p>;
      })}
    </div>
  );
};

export default Catalogue;
