
export const types = {
  ADD_PRODUCT: 'ADD_PRODUCT',
};

export const actions = {
  addProduct: (prod) => ({ type: types.ADD_PRODUCT, payload: prod }),
};
