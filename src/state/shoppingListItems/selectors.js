const shopListItemCreate = (state) => state.shoppingListItems.create;
const shopListItemUpdate = (state) => state.shoppingListItems.update;
const shopListItemDelete = (state) => state.shoppingListItems.delete;

const selectorsShopListItems = {
  shopListItemCreate: {
    requesting: shopListItemCreate,
  },
  shopListItemUpdate: {
    requesting: shopListItemUpdate,
  },
  shopListItemDelete: {
    requesting: shopListItemDelete,
  },
};

export default selectorsShopListItems;
