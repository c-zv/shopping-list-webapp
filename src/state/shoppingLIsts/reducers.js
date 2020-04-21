import { types } from './actions';

const reducerShopLists = (shoppingLists = [], action) => {
  switch (action.type) {
    case types.ADD_SHOPPING_LIST:
      return [...shoppingLists, action.payload];
    default:
      return shoppingLists;
  }
};

export default reducerShopLists;
