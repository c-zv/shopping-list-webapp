import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import StartingRoute from 'routes';
import initStore from 'state';

const ReactApp = () => (
  <React.StrictMode>
    <Provider store={initStore()}>
      <BrowserRouter>
        <StartingRoute />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

export default ReactApp;
