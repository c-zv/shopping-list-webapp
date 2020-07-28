import { combineReducers } from 'redux';

import { types } from './actions';

const defaultStoresAll = { data: [], requesting: false };
const reducerStoresAll = (storesAll = defaultStoresAll, action) => {
  switch (action.type) {
    case types.ALL.REQUEST:
      return {
        ...storesAll,
        requesting: true,
      };
    case types.ALL.REQUEST_SUCCESS:
      return {
        data: [...action.payload],
        requesting: false,
      };
    case types.ALL.REQUEST_FAIL:
      return {
        ...storesAll,
        requesting: false,
      };
    default:
      return storesAll;
  }
};

const reducerStores = combineReducers({
  all: reducerStoresAll,
});

export default reducerStores;
