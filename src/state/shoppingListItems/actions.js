import { generateActionsForApiRequest } from '~/utils/stateHelpers';

export const types = {
  CREATE: generateActionsForApiRequest('API_POST_SHOP_LIST_ITEM'),
  UPDATE: generateActionsForApiRequest('API_PUT_SHOP_LIST_ITEM'),
  DELETE: generateActionsForApiRequest('API_DELETE_SHOP_LIST_ITEM'),
};

const shopListItemCreate = {
  request: (shopListId, item) => (
    { type: types.CREATE.REQUEST, payload: { shopListId, item } }
  ),
  requestSuccess: () => (
    { type: types.CREATE.REQUEST_SUCCESS }
  ),
  requestFail: () => (
    { type: types.CREATE.REQUEST_FAIL }
  ),
};

const shopListItemUpdate = {
  request: (shopListId, itemId, item) => (
    { type: types.UPDATE.REQUEST, payload: { shopListId, itemId, item } }
  ),
  requestSuccess: (updatedItem) => (
    { type: types.UPDATE.REQUEST_SUCCESS, payload: updatedItem }
  ),
  requestFail: () => (
    { type: types.UPDATE.REQUEST_FAIL }
  ),
};

const shopListItemDelete = {
  request: (shopListId, itemId) => (
    { type: types.DELETE.REQUEST, payload: { shopListId, itemId } }
  ),
  requestSuccess: () => (
    { type: types.DELETE.REQUEST_SUCCESS }
  ),
  requestFail: () => (
    { type: types.DELETE.REQUEST_FAIL }
  ),
};

export const actionsShopListItems = {
  shopListItemCreate,
  shopListItemUpdate,
  shopListItemDelete,
};
