import { createSelector } from 'reselect';

const getShopLists = (state) => state.shoppingLists;

const getShopListByIdCreator = () => (createSelector(
  [
    getShopLists,
    (_, shopListId) => shopListId,
  ],
  (shopLists, shopListId) => shopLists.find((sl) => sl.id === shopListId),
));

const selectorsShopLists = {
  getShopLists,
  getShopListByIdCreator,
};

export default selectorsShopLists;
