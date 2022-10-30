import React, { useEffect, useState } from 'react';
import LocaleService from '../../service/locale/LocaleService';
import MESSAGES from '../../service/locale/messages';

const LocaleContext = React.createContext();

const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState('en');

  LocaleService.initLocalization(locale, MESSAGES);

  useEffect(() => {
    LocaleService.initLocalization(locale, MESSAGES);
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export { LocaleContext, LocaleProvider };
