import { createStore, combineReducers } from 'redux';
import { reducerProducts } from './products';
import { reducerShopLists } from './shoppingLIsts';

const rootReducer = combineReducers({
  products: reducerProducts,
  shoppingLists: reducerShopLists,
});

/* eslint-disable no-underscore-dangle */
const initStore = () => {
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./', () => store.replaceReducer(rootReducer));
  }
  return store;
};
/* eslint-enable */

export default initStore;
