import React, { useEffect, useContext } from 'react';
import { AppContext } from '../../context';
import { t } from '../app/App';
import LanguagePicker from '../app/LanguagePicker';
import { useLoading } from '../common/loading/LoadingContext';
import RegistrationForm from '../form/RegistrationForm';
import Steps from '../common/Steps';

const AppView = () => {
  const { setLoadingStep, formLoader, setFormLoader } = useLoading();
  const { count, formErrors, isSubmit } = useContext(AppContext);

  useEffect(() => {
    setLoadingStep(true);
    let timeOut = setTimeout(() => {
      setLoadingStep(false);
    }, 1000);
    return () => clearTimeout(timeOut);
  }, [count]);

  useEffect(() => {
    setFormLoader(true);
    let timeOut = setTimeout(() => {
      setFormLoader(false);
    }, 7000);
    return () => clearTimeout(timeOut);
  }, [isSubmit]);

  return (
    <>
      {formLoader && Object.keys(formErrors).length === 0 && isSubmit && (
        <div className="registration-complete">
          {t('FORM.REGISTRATION_COMPLETE')}
        </div>
      )}
      <LanguagePicker />

      <div className="app">
        <Steps totalSteps={4} currentStep={count} />
        <RegistrationForm />
      </div>
    </>
  );
};

export default AppView;
