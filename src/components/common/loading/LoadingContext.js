import React, { useContext, useState } from 'react';

const LoadingContext = React.createContext();

const useLoading = () => useContext(LoadingContext);

const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(false);
  const [formLoader, setFormLoader] = useState(false);

  return (
    <LoadingContext.Provider
      value={{
        loading,
        setLoading,
        loadingStep,
        setLoadingStep,
        formLoader,
        setFormLoader,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export { LoadingContext, LoadingProvider, useLoading };
