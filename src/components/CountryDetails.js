import { Link } from "react-router-dom";

const CountryDetails = () => {
  return (
    <div className="container">
      <Link to="/">
        <input className="btn btn-outline-dark" type="reset" value="Back" />
      </Link>
    </div>
  );
};
export default CountryDetails;
