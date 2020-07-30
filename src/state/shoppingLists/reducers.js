import { combineReducers } from 'redux';

import { types } from './actions';

const defaultShopListAll = { data: [], requesting: false };
const reducerShopListsAll = (shoppingListsAll = defaultShopListAll, action) => {
  switch (action.type) {
    case types.ALL.REQUEST:
      return {
        data: [],
        requesting: true,
      };
    case types.ALL.REQUEST_SUCCESS:
      return {
        data: [...action.payload],
        requesting: false,
      };
    case types.ALL.REQUEST_FAIL:
      return {
        ...shoppingListsAll,
        requesting: false,
      };
    default:
      return shoppingListsAll;
  }
};

const defaultShopListOne = { data: undefined, requesting: false };
const reducerShopListOne = (shoppingListsOne = defaultShopListOne, action) => {
  switch (action.type) {
    case types.ONE.REQUEST:
      return {
        ...shoppingListsOne,
        requesting: true,
      };
    case types.ONE.REQUEST_SUCCESS:
      return {
        data: action.payload,
        requesting: false,
      };
    case types.ONE.REQUEST_FAIL:
      return {
        ...shoppingListsOne,
        requesting: false,
      };
    default:
      return shoppingListsOne;
  }
};

const defaultShopListCreate = { requesting: false };
const reducerShopListCreate = (shoppingListsCreate = defaultShopListCreate, action) => {
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
      return shoppingListsCreate;
  }
};

const defaultShopListUpdate = { requesting: false };
const reducerShopListUpdate = (shoppingListsUpdate = defaultShopListUpdate, action) => {
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
      return shoppingListsUpdate;
  }
};

const defaultShopListDelete = { requesting: false };
const reducerShopListDelete = (shoppingListsDelete = defaultShopListDelete, action) => {
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
      return shoppingListsDelete;
  }
};

const reducerShopLists = combineReducers({
  all: reducerShopListsAll,
  one: reducerShopListOne,
  create: reducerShopListCreate,
  update: reducerShopListUpdate,
  delete: reducerShopListDelete,
});

export default reducerShopLists;
