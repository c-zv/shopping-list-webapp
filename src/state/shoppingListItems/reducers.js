import { combineReducers } from 'redux';

import { types } from './actions';

const defaultShopListItemCreate = { requesting: false };
const reducershopListItemCreate = (shopListItemCreate = defaultShopListItemCreate, action) => {
  switch (action.type) {
    case types.CREATE.REQUEST:
      return {
        requesting: true,
      };
    case types.CREATE.REQUEST_SUCCESS:
    case types.CREATE.REQUEST_FAIL:
      return {
        requesting: false,
      };
    default:
      return shopListItemCreate;
  }
};

const defaultShopListItemUpdate = { requesting: false };
const reducershopListItemUpdate = (shopListItemUpdate = defaultShopListItemUpdate, action) => {
  switch (action.type) {
    case types.UPDATE.REQUEST:
      return {
        requesting: true,
      };
    case types.UPDATE.REQUEST_SUCCESS:
    case types.UPDATE.REQUEST_FAIL:
      return {
        requesting: false,
      };
    default:
      return shopListItemUpdate;
  }
};

const defaultShopListItemDelete = { requesting: false };
const reducershopListItemDelete = (shopListItemDelete = defaultShopListItemDelete, action) => {
  switch (action.type) {
    case types.DELETE.REQUEST:
      return {
        requesting: true,
      };
    case types.DELETE.REQUEST_SUCCESS:
    case types.DELETE.REQUEST_FAIL:
      return {
        requesting: false,
      };
    default:
      return shopListItemDelete;
  }
};

const reducerShopListItems = combineReducers({
  create: reducershopListItemCreate,
  update: reducershopListItemUpdate,
  delete: reducershopListItemDelete,
});

export default reducerShopListItems;
