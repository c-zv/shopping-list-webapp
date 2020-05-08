import { takeLatest, call, put } from 'redux-saga/effects';

import api from 'utils/api';
import { types, actionsShopListCategories } from './actions';

// TODO: replace this method with global notifications
const showGlobalNotification = (errorMessage) => {
  const defaultMessage = 'Something went wrong. Please try again later';
  const message = errorMessage || defaultMessage;
  console.log('--> showGlobalNotification.2: ', message);
};

function* requestCategoriesAll() {
  try {
    const result = yield call(api.categories.getAll);
    yield put(actionsShopListCategories.categoriesAll.requestSuccess(result.data));
  } catch (error) {
    yield put(actionsShopListCategories.categoriesAll.requestFail());
    const errorMessage = error.response ? error.response.data.error : error.message;
    showGlobalNotification(errorMessage);
  }
}

export default function* sagaShopListCategories() {
  yield takeLatest(types.ALL.REQUEST, requestCategoriesAll);
}
