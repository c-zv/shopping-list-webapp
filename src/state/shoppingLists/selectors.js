
const shopListsAll = (state) => state.shoppingLists.all;
const shopListsOne = (state) => state.shoppingLists.one;
const shopListsCreate = (state) => state.shoppingLists.create;
const shopListsUpdate = (state) => state.shoppingLists.update;
const shopListsDelete = (state) => state.shoppingLists.delete;

const selectorsShopLists = {
  shopListsAll,
  shopListsOne,
  shopListsCreate,
  shopListsUpdate,
  shopListsDelete,
};

export default selectorsShopLists;
