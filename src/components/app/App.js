import React, { useContext, useState } from 'react';
import { AppProvider } from '../../context';
import RegistrationForm from '../form/RegistrationForm';
import AppLayout from './AppLayout';
import LocaleService from '../../service/locale/LocaleService';
import MESSAGES from '../../service/locale/messages';
import ErrorBoundary from '../common/ErrorBoundary';
import { LoadingProvider } from '../common/loading/LoadingContext';

const defaultLocale = 'en';

const LocaleContext = React.createContext();

export const useLocale = () => {
  return useContext(LocaleContext);
};

export const t = (name, params) => LocaleService.translate(name, params);

const App = () => {
  const [locale, setLocale] = useState(defaultLocale);
  LocaleService.initLocalization(locale, MESSAGES);

  return (
    <ErrorBoundary>
      <AppProvider>
        <LocaleContext.Provider value={{ locale, setLocale }}>
          <LoadingProvider>
            <AppLayout>
              <RegistrationForm />
            </AppLayout>
          </LoadingProvider>
        </LocaleContext.Provider>
      </AppProvider>
    </ErrorBoundary>
  );
};

export default App;
