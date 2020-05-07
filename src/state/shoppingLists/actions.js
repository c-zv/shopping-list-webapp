import { generateActionsForApiRequest } from 'utils/api';

export const types = {
  ALL: generateActionsForApiRequest('API_GET_ALL_SHOPPING_LISTS'),
  ONE: generateActionsForApiRequest('API_GET_ONE_SHOPPING_LIST'),
  CREATE: generateActionsForApiRequest('API_POST_SHOPPING_LIST'),
  UPDATE: generateActionsForApiRequest('API_PUT_SHOPPING_LIST'),
  DELETE: generateActionsForApiRequest('API_DELETE_SHOPPING_LIST'),
};

const shopListAll = {
  request: () => (
    { type: types.ALL.REQUEST }
  ),
  requestSuccess: (shopLists) => (
    { type: types.ALL.REQUEST_SUCCESS, payload: shopLists }
  ),
  requestFail: () => (
    { type: types.ALL.REQUEST_FAIL }
  ),
};

const shopListOne = {
  request: (id) => (
    { type: types.ONE.REQUEST, payload: id }
  ),
  requestSuccess: (shopList) => (
    { type: types.ONE.REQUEST_SUCCESS, payload: shopList }
  ),
  requestFail: () => (
    { type: types.ONE.REQUEST_FAIL }
  ),
};

const shopListCreate = {
  request: (shopList) => (
    { type: types.CREATE.REQUEST, payload: shopList }
  ),
  requestSuccess: () => (
    { type: types.CREATE.REQUEST_SUCCESS }
  ),
  requestFail: () => (
    { type: types.CREATE.REQUEST_FAIL }
  ),
};

const shopListUpdate = {
  request: (id, shopList) => (
    { type: types.UPDATE.REQUEST, payload: { id, shopList } }
  ),
  requestSuccess: () => (
    { type: types.UPDATE.REQUEST_SUCCESS }
  ),
  requestFail: () => (
    { type: types.UPDATE.REQUEST_FAIL }
  ),
};

const shopListDelete = {
  request: (id) => (
    { type: types.DELETE.REQUEST, payload: id }
  ),
  requestSuccess: () => (
    { type: types.DELETE.REQUEST_SUCCESS }
  ),
  requestFail: () => (
    { type: types.DELETE.REQUEST_FAIL }
  ),
};

export const actionsShopLists = {
  shopListAll,
  shopListOne,
  shopListCreate,
  shopListUpdate,
  shopListDelete,
};
