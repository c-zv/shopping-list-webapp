import { types } from './actions';

const reducerShopLists = (shoppingLists = [], action) => {
  switch (action.type) {
    case types.ADD_SHOPPING_LIST:
      return [...shoppingLists, action.payload];
    case types.EDIT_SHOPPING_LIST:
      return shoppingLists.map((sl) => (sl.id === action.payload.id ? { ...action.payload } : sl));
    case types.DELETE_SHOPPING_LIST:
      return shoppingLists.filter((sl) => sl.id !== action.payload);
    default:
      return shoppingLists;
  }
};

export default reducerShopLists;
