import {
  createStore, applyMiddleware, combineReducers, compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import { reducerShopLists, sagaShopLists } from './shoppingLists';
import { reducerShopListCategories, sagaShopListCategories } from './shoppingListCategories';
import { reducerShopListItems, sagaShopListItems } from './shoppingListItems';

export const rootReducer = combineReducers({
  shoppingLists: reducerShopLists,
  shoppingListCategories: reducerShopListCategories,
  shoppingListItems: reducerShopListItems,
});

function* rootSaga() {
  yield all([
    sagaShopLists(),
    sagaShopListCategories(),
    sagaShopListItems(),
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
