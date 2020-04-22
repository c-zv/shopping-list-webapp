
export const types = {
  ADD_SHOPPING_LIST: 'ADD_SHOPPING_LIST',
  EDIT_SHOPPING_LIST: 'EDIT_SHOPPING_LIST',
  DELETE_SHOPPING_LIST: 'DELETE_SHOPPING_LIST',
};

const addShoppingList = (shoppingList) => (
  { type: types.ADD_SHOPPING_LIST, payload: shoppingList }
);

const editShoppingList = (shoppingList) => (
  { type: types.EDIT_SHOPPING_LIST, payload: shoppingList }
);

const deleteShoppingList = (id) => (
  { type: types.DELETE_SHOPPING_LIST, payload: id }
);

export const actionsShopLists = {
  addShoppingList,
  editShoppingList,
  deleteShoppingList,
};
