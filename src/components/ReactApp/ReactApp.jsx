import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import NavigationBar from 'components/NavigationBar';

const ReactApp = () => {

  return (
    <React.StrictMode>
      <BrowserRouter>
        <NavigationBar />
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default ReactApp;
