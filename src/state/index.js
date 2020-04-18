import { createStore } from 'redux';
import { reducerProducts } from './products';

const rootReducer = reducerProducts;

const initState = {
  products: [
    {
      id: '1',
      name: 'Dummy product 1',
      imageLink: 'http://placeimg.com/190/200/tech',
    },
  ],
  shoppingLists: [
    {
      id: '1',
      name: 'My tech list',
    },
  ],
};

/* eslint-disable no-underscore-dangle */
const initStore = () => {
  const store = createStore(
    rootReducer,
    initState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./', () => store.replaceReducer(rootReducer));
  }
  return store;
};
/* eslint-enable */

export default initStore;
