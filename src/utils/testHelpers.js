/*
  eslint-disable
    import/no-extraneous-dependencies,
    react/jsx-filename-extension
*/

import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { initStore } from '~/state';

export const testsInitSetup = () => {
  // mock matchMedia used by some components. For more details check:
  // https://jestjs.io/docs/en/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
};

export const withReduxWrapper = (
  component,
  { initialState, store = initStore(initialState) } = {},
) => (
  <Provider store={store}>{component}</Provider>
);

export const withRouterWrapper = (component) => {
  const history = createMemoryHistory();
  return (
    <Router history={history}>
      {component}
    </Router>
  );
};

export const withReduxRouterWrapper = (
  component,
  { initialState, store = initStore(initialState) } = {},
) => {
  const history = createMemoryHistory();
  return (
    <Provider store={store}>
      <Router history={history}>
        {component}
      </Router>
    </Provider>
  );
};

export const mocks = {
  categories: [
    {
      id: 1,
      name: 'Tech',
      color: '#8da0cb',
    },
    {
      id: 2,
      name: 'Food',
      color: '#fc8d62',
    },
    {
      id: 3,
      name: 'Regular',
      color: '#66c2a5',
    },
  ],
};

export const initStates = {
  withCategories: {
    shoppingListCategories: {
      all: {
        data: mocks.categories,
      },
    },
  },
};
