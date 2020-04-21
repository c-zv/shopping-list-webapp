import { createSelector } from 'reselect';

const getProducts = (state) => state.products;

const getProductByIdCreator = () => createSelector(
  [
    getProducts,
    (_, productId) => productId,
  ],
  (products, productId) => products.find((prod) => prod.id === productId),
);

const selectorsProducts = {
  getProducts,
  getProductByIdCreator,
};

export default selectorsProducts;
