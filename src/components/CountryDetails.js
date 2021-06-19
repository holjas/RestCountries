import { Link } from "react-router-dom";

const CountryDetails = () => {
  return (
    <div className="container">
      <Link to="/">
        <input className="btn btn-outline-dark" type="reset" value="Back" />
      </Link>

      <div className="row">
        <div className="col-lg-6">
          <h2>one</h2>
        </div>
        <div className="col-lg-6">
          <h2>two</h2>
        </div>
      </div>
    </div>
  );
};
export default CountryDetails;
