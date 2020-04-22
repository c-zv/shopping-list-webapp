
export const types = {
  ADD_SHOPPING_LIST: 'ADD_SHOPPING_LIST',
};

const addShoppingList = (shoppingList) => (
  { type: types.ADD_SHOPPING_LIST, payload: shoppingList }
);

export const actionsShopLists = {
  addShoppingList,
};
