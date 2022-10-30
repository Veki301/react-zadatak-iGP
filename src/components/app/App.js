import React from 'react';
import { AppProvider } from '../../context';
import RegistrationForm from '../form/RegistrationForm';
import AppLayout from './AppLayout';

const App = () => {
  return (
    <AppProvider>
      <AppLayout>
        <RegistrationForm />
      </AppLayout>
    </AppProvider>
  );
};

export default App;
