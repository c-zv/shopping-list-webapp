import { takeLatest, call, put } from 'redux-saga/effects';

import api from '~/api';
import Notification from '~/utils/notificationManager';
import { types, actionsShopLists } from './actions';

function* requestShopListsAll() {
  const notification = new Notification();
  try {
    const result = yield call(api.shopLists.getAll);
    yield put(actionsShopLists.shopListAll.requestSuccess(result.data));
  } catch (error) {
    yield put(actionsShopLists.shopListAll.requestFail());
    const errorMessage = error.response ? error.response.data.error : error.message;
    notification.error(errorMessage);
  }
}

function* requestShopListsOne(action) {
  const notification = new Notification();
  try {
    const result = yield call(api.shopLists.getOne, action.payload);
    yield put(actionsShopLists.shopListOne.requestSuccess(result.data));
  } catch (error) {
    yield put(actionsShopLists.shopListOne.requestFail());
    const errorMessage = error.response ? error.response.data.error : error.message;
    notification.error(errorMessage);
  }
}

function* requestShopListsCreate(action) {
  const notification = new Notification();
  try {
    notification.loading('Creating shopping list...');
    yield call(api.shopLists.create, action.payload);
    yield put(actionsShopLists.shopListCreate.requestSuccess());
    notification.success('Shopping list created!');
    yield put(actionsShopLists.shopListAll.request());
  } catch (error) {
    yield put(actionsShopLists.shopListCreate.requestFail());
    const errorMessage = error.response ? error.response.data.error : error.message;
    notification.error(errorMessage);
  }
}

function* requestShopListsUpdate(action) {
  const notification = new Notification();
  try {
    notification.loading('Updating shopping list...');
    yield call(api.shopLists.update, action.payload.id, action.payload.shopList);
    yield put(actionsShopLists.shopListUpdate.requestSuccess());
    notification.success('Shopping list updated!');
    yield put(actionsShopLists.shopListAll.request());
  } catch (error) {
    yield put(actionsShopLists.shopListUpdate.requestFail());
    const errorMessage = error.response ? error.response.data.error : error.message;
    notification.error(errorMessage);
  }
}

function* requestShopListsDelete(action) {
  const notification = new Notification();
  try {
    notification.loading('Deleting shopping list...');
    yield call(api.shopLists.delete, action.payload);
    yield put(actionsShopLists.shopListDelete.requestSuccess());
    notification.success('Shopping list deleted!');
    yield put(actionsShopLists.shopListAll.request());
  } catch (error) {
    yield put(actionsShopLists.shopListDelete.requestFail());
    const errorMessage = error.response ? error.response.data.error : error.message;
    notification.error(errorMessage);
  }
}

export default function* sagaShopLists() {
  yield takeLatest(types.ALL.REQUEST, requestShopListsAll);
  yield takeLatest(types.ONE.REQUEST, requestShopListsOne);
  yield takeLatest(types.CREATE.REQUEST, requestShopListsCreate);
  yield takeLatest(types.UPDATE.REQUEST, requestShopListsUpdate);
  yield takeLatest(types.DELETE.REQUEST, requestShopListsDelete);
}
