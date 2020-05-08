import { combineReducers } from 'redux';

import { types } from './actions';

const defaultCategoriesAll = { data: [], requesting: false };
const reducerCategoriesAll = (categoriesAll = defaultCategoriesAll, action) => {
  switch (action.type) {
    case types.ALL.REQUEST:
      return {
        ...categoriesAll,
        requesting: true,
      };
    case types.ALL.REQUEST_SUCCESS:
      return {
        data: [...action.payload],
        requesting: false,
      };
    case types.ALL.REQUEST_FAIL:
      return {
        ...categoriesAll,
        requesting: false,
      };
    default:
      return categoriesAll;
  }
};

const reducerShopListCategories = combineReducers({
  all: reducerCategoriesAll,
});

export default reducerShopListCategories;
