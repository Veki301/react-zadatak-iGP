import React from 'react';
import { AppProvider } from '../../context';
import RegistrationForm from '../form/RegistrationForm';
import AppLayout from './AppLayout';
import { LocaleProvider } from './LocaleProvider';

const App = () => {
  return (
    <AppProvider>
      <LocaleProvider>
        <AppLayout>
          <RegistrationForm />
        </AppLayout>
      </LocaleProvider>
    </AppProvider>
  );
};

export default App;
