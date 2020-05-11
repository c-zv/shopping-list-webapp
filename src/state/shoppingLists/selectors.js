
const shopListsAllData = (state) => state.shoppingLists.all.data;
const shopListsAllRequesting = (state) => state.shoppingLists.all.requesting;

const shopListsOneData = (state) => state.shoppingLists.one.data;
const shopListsOneRequesting = (state) => state.shoppingLists.one.requesting;

const shopListsCreate = (state) => state.shoppingLists.create;
const shopListsUpdate = (state) => state.shoppingLists.update;
const shopListsDelete = (state) => state.shoppingLists.delete;

const selectorsShopLists = {
  shopListsAll: {
    data: shopListsAllData,
    requesting: shopListsAllRequesting,
  },
  shopListsOne: {
    data: shopListsOneData,
    requesting: shopListsOneRequesting,
  },
  shopListsCreate,
  shopListsUpdate,
  shopListsDelete,
};

export default selectorsShopLists;
