import React, { FC, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { AppProvider } from '@contexts/AppContext';
import Routes from '@routes/index';
import globalStyle from '@styles/globalStyle';

const App: FC = () => {
  useEffect(() => {
    const loadingOverlay = window.document.getElementById('loading-overlay');
    if (!loadingOverlay) {
      return;
    }
    loadingOverlay.parentNode.removeChild(loadingOverlay);
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="crossOrigin"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div className={globalStyle}>
        <AppProvider>
          <Routes />
        </AppProvider>
      </div>
    </HelmetProvider>
  );
};

export default App;
