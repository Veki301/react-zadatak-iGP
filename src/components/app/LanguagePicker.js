import React from 'react';
import { useLocale } from './App';

const LanguagePicker = () => {
  const { setLocale } = useLocale();
  return (
    <div className="language-container">
      <button onClick={() => setLocale('en')} className="eng-btn"></button>
      <button onClick={() => setLocale('es')} className="spa-btn"></button>
    </div>
  );
};

export default LanguagePicker;
