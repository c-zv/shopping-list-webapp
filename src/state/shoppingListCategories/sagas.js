import { takeLatest, call, put } from 'redux-saga/effects';

import api from 'utils/api';
import Notification from 'utils/notificationManager';
import { types, actionsShopListCategories } from './actions';

function* requestCategoriesAll() {
  const notification = new Notification();
  try {
    const result = yield call(api.categories.getAll);
    yield put(actionsShopListCategories.categoriesAll.requestSuccess(result.data));
  } catch (error) {
    yield put(actionsShopListCategories.categoriesAll.requestFail());
    const errorMessage = error.response ? error.response.data.error : error.message;
    notification.error(errorMessage);
  }
}

export default function* sagaShopListCategories() {
  yield takeLatest(types.ALL.REQUEST, requestCategoriesAll);
}
