import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from './context';
import LocaleService from './service/locale/LocaleService';

const GenderDropdown = () => {
  const t = LocaleService.translate;
  const { selectedGender, setSelectedGender } = useContext(AppContext);
  const [isActive, setIsActive] = useState(false);
  const options = [
    t('GENDER_DROPDOWN.OPTION_MALE'),
    t('GENDER_DROPDOWN.OPTION_FEMALE'),
  ];

  return (
    <div className="dropdown">
      <h1 className="dropdown-header header-label">
        {t('GENDER_DROPDOWN.TITLE')}
      </h1>
      <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
        {selectedGender}
        <span>
          <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
        </span>
      </div>
      {isActive && (
        <div className="dropdown-content dropdown-height">
          {options.map((option, index) => {
            return (
              <div
                key={index}
                className="dropdown-item"
                onClick={() => {
                  setSelectedGender(option);
                  setIsActive(false);
                }}
              >
                {option}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default GenderDropdown;
