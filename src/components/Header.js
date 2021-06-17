import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as faMoonOutline } from "@fortawesome/free-regular-svg-icons";
// import { faMoon as faMoonSolid } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <section className="header">
      <div className="container">
        <div className="row align-items-center pt-3">
          <div className="col">
            <h1>Where in the world?</h1>
          </div>
          <div className="col">
            <p className="text-end">
              <FontAwesomeIcon
                icon={faMoonOutline}
                aria-hidden="true"
                title="dark mode off"
              />
              {/* <FontAwesomeIcon
              icon={faMoonSolid}
              aria-hidden="true"
              title="dark mode on"
            /> */}
              Dark Mode
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
