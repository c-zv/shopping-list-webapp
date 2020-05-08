import { generateActionsForApiRequest } from 'utils/stateHelpers';

export const types = {
  ALL: generateActionsForApiRequest('API_GET_ALL_SHOP_LIST_CATEGORIES'),
};

const categoriesAll = {
  request: () => (
    { type: types.ALL.REQUEST }
  ),
  requestSuccess: (categories) => (
    { type: types.ALL.REQUEST_SUCCESS, payload: categories }
  ),
  requestFail: () => (
    { type: types.ALL.REQUEST_FAIL }
  ),
};

export const actionsShopListCategories = {
  categoriesAll,
};
