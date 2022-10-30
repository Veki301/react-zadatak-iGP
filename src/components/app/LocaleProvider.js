import React, { useEffect, useState } from 'react';
import LocaleService from '../../service/locale/LocaleService';
import MESSAGES from '../../service/locale/messages';

const LocaleContext = React.createContext();

export const useTranslate = (message) => LocaleService.translate(message);

const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState('en');

  useEffect(() => {
    LocaleService.initLocalization(locale, MESSAGES);
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export default LocaleProvider;
