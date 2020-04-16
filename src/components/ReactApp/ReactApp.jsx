import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import StartingRoute from 'routes';


const ReactApp = () => {

  return (
    <React.StrictMode>
      <BrowserRouter>
          <StartingRoute />
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default ReactApp;
