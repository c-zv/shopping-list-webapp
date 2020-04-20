
export const types = {
  ADD_PRODUCT: 'ADD_PRODUCT',
};

const addProduct = (prod) => ({ type: types.ADD_PRODUCT, payload: prod });

export const actionsProducts = {
  addProduct,
};
