import { generateActionsForApiRequest } from '~/utils/stateHelpers';

export const types = {
  ALL: generateActionsForApiRequest('API_GET_ALL_STORES'),
};

const storesAll = {
  request: () => (
    { type: types.ALL.REQUEST }
  ),
  requestSuccess: (stores) => (
    { type: types.ALL.REQUEST_SUCCESS, payload: stores }
  ),
  requestFail: () => (
    { type: types.ALL.REQUEST_FAIL }
  ),
};

export const actionsStores = {
  storesAll,
};
