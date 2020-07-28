import {
  takeLatest, call, put, select,
} from 'redux-saga/effects';

import api from '~/api';
import Notification from '~/utils/notificationManager';
import { types, actionsStores } from './actions';
import selectorsStores from './selectors';

function* requestStoresAll() {
  const notification = new Notification();
  try {
    const storesAll = yield select(selectorsStores.storesAllData);
    if (storesAll.length === 0) {
      const result = yield call(api.stores.getAll);
      yield put(actionsStores.storesAll.requestSuccess(result.data));
    } else {
      yield put(actionsStores.storesAll.requestSuccess(storesAll));
    }
  } catch (error) {
    yield put(actionsStores.storesAll.requestFail());
    const errorMessage = error.response ? error.response.data.error : error.message;
    notification.error(errorMessage);
  }
}

export default function* sagaShopListCategories() {
  yield takeLatest(types.ALL.REQUEST, requestStoresAll);
}
