import { types } from './actions';

const reducerProducts = (products = [], action) => {
  switch (action.type) {
    case types.ADD_PRODUCT:
      return [...products, action.payload];
    default:
      return products;
  }
};

export default reducerProducts;
