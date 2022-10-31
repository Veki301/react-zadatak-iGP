import React from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';

const Loader = ({ isLoading, children }) => {
  return isLoading ? (
    <PropagateLoader
      className="loader"
      size={30}
      color={'#002D62'}
      loading={isLoading}
    />
  ) : (
    { children }
  );
};

export default Loader;
