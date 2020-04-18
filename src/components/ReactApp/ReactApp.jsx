import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import StartingRoute from 'routes';
import initStore from 'state';

// TODO: React.StrictMode throws warnings when using Ant-design library.
// It is being fixed, need to check new releses to reenable strict mode.
const ReactApp = () => (
  // <React.StrictMode>
  <Provider store={initStore()}>
    <BrowserRouter>
      <StartingRoute />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);

export default ReactApp;
