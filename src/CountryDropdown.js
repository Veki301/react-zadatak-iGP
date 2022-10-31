import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from './context';
import { useLocale } from './components/app/App';
import { countries as enCountries } from './service/locale/messages/en';
import { countries as esCountries } from './service/locale/messages/es';
import { t } from './components/app/App';

const CountryDropdown = () => {
  const { selectedCountry, setSelectedCountry } = useContext(AppContext);
  const { locale } = useLocale();
  const [isActive, setIsActive] = useState(false);
  // rethink countryList
  const countryList = locale === 'en' ? enCountries : esCountries;

  return (
    <div className="dropdown">
      <h1 className="dropdown-header header-label">
        {t('COUNTRY_DROPDOWN.TITLE')}
      </h1>
      <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
        {selectedCountry}
        <span>
          <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
        </span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {countryList.map((country, index) => {
            return (
              <div
                key={index}
                className="dropdown-item"
                onClick={() => {
                  setSelectedCountry(country);
                  setIsActive(false);
                }}
              >
                {country}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CountryDropdown;
