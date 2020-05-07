import {
  createStore, applyMiddleware, combineReducers, compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import { reducerProducts } from './products';
import { reducerShopLists, sagaShopLists } from './shoppingLists';

export const rootReducer = combineReducers({
  products: reducerProducts,
  shoppingLists: reducerShopLists,
});

function* rootSaga() {
  yield all([
    sagaShopLists(),
  ]);
}

export const initStore = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const middlewares = [sagaMiddleware];
  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),
  );

  const store = createStore(rootReducer, initialState, enhancer);
  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./', () => store.replaceReducer(rootReducer));
  }
  sagaMiddleware.run(rootSaga);
  return store;
};
