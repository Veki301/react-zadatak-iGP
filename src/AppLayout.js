import React, { useContext, useEffect } from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';
import { AppContext } from './context';

const AppLayout = ({ children }) => {
  const { loading, setLoading } = useContext(AppContext);

  useEffect(() => {
    setLoading(true);
    let timeOut = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timeOut);
  }, []);

  return (
    <>
      <div className="container-whole">
        {loading ? (
          <PropagateLoader
            className="loader"
            size={30}
            color={'#002D62'}
            loading={loading}
          />
        ) : (
          <>
            <div className="left-side-nav">
              <div className="image-container">
                <img
                  src="https://i.imgur.com/uR4AR4i.png"
                  alt="logo"
                  className="logo-image"
                />
              </div>
            </div>
            <div className="right-side-nav">{children}</div>
          </>
        )}
      </div>
    </>
  );
};

export default AppLayout;
