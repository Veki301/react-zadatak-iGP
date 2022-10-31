import React, { useEffect } from 'react';
import Loader from '../common/loading/Loader';
import { useLoading } from '../common/loading/LoadingContext';

const AppLayout = ({ children }) => {
  const { loading, setLoading } = useLoading();

  useEffect(() => {
    setLoading(true);
    let timeOut = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timeOut);
  }, []);

  return (
    <div className="container-whole">
      <Loader isLoading={loading}>
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
      </Loader>
    </div>
  );
};

export default AppLayout;
