import {
  createStore, applyMiddleware, combineReducers, compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import { reducerShopLists, sagaShopLists } from './shoppingLists';
import { reducerShopListCategories, sagaShopListCategories } from './shoppingListCategories';
import { reducerShopListItems, sagaShopListItems } from './shoppingListItems';
import { reducerStores, sagaStores } from './stores';

export const rootReducer = combineReducers({
  shoppingLists: reducerShopLists,
  shoppingListCategories: reducerShopListCategories,
  shoppingListItems: reducerShopListItems,
  stores: reducerStores,
});

function* rootSaga() {
  yield all([
    sagaShopLists(),
    sagaShopListCategories(),
    sagaShopListItems(),
    sagaStores(),
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
