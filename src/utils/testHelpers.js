/*
  eslint-disable
    import/no-extraneous-dependencies,
    react/jsx-filename-extension
*/

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from 'state';

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
  { initialState, store = createStore(rootReducer, initialState) } = {},
) => (
  <Provider store={store}>{component}</Provider>
);
