import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as faMoonOutline } from "@fortawesome/free-regular-svg-icons";
import { faMoon as faMoonSolid } from "@fortawesome/free-solid-svg-icons";

const Header = ({ captureTheme, theme }) => {
  return (
    <section className='header border-bottom'>
      <div className='container'>
        <div className='row align-items-center pt-3 pb-3'>
          <div className='col'>
            <h1>Where in the world?</h1>
          </div>

          {theme && (
            <div
              className='col darkModeBtn'
              onClick={captureTheme}
              value='light'
            >
              <p className='text-end mb-0' value='light'>
                <FontAwesomeIcon
                  icon={faMoonOutline}
                  aria-hidden='true'
                  title='dark mode off'
                />
                Dark Mode
              </p>
            </div>
          )}
          {!theme && (
            <div
              className='col darkModeBtn'
              onClick={captureTheme}
              value='dark'
            >
              <p className='text-end mb-0' value='dark'>
                <FontAwesomeIcon
                  icon={faMoonSolid}
                  aria-hidden='true'
                  title='dark mode on'
                />
                Light Mode
              </p>
            </div>
          )}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Header;
