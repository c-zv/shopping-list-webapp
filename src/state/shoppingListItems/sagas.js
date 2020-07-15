import { takeLatest, call, put } from 'redux-saga/effects';

import api from 'utils/api';
import Notification from 'utils/notificationManager';
import { actionsShopLists } from 'state/shoppingLists';
import { types, actionsShopListItems } from './actions';

function* requestShopListItemCreate(action) {
  try {
    const { shopListId, item } = action.payload;
    yield call(api.shopListItems.create, shopListId, item);
    yield put(actionsShopListItems.shopListItemCreate.requestSuccess());
  } catch (error) {
    const notification = new Notification();
    yield put(actionsShopListItems.shopListItemCreate.requestFail());
    const errorMessage = error.response ? error.response.data.error : error.message;
    notification.error(errorMessage);
  }
}

function* requestShopListItemUpdate(action) {
  try {
    const { shopListId, itemId, item } = action.payload;
    yield call(api.shopListItems.update, shopListId, itemId, item);
    yield put(actionsShopListItems.shopListItemUpdate.requestSuccess());
    yield put(actionsShopLists.shopListOne.request(shopListId));
  } catch (error) {
    const notification = new Notification();
    yield put(actionsShopListItems.shopListItemUpdate.requestFail());
    const errorMessage = error.response ? error.response.data.error : error.message;
    notification.error(errorMessage);
  }
}

function* requestShopListItemDelete(action) {
  try {
    const { shopListId, itemId } = action.payload;
    yield call(api.shopListItems.delete, shopListId, itemId);
    yield put(actionsShopListItems.shopListItemDelete.requestSuccess());
    yield put(actionsShopLists.shopListOne.request(shopListId));
  } catch (error) {
    const notification = new Notification();
    yield put(actionsShopListItems.shopListItemDelete.requestFail());
    const errorMessage = error.response ? error.response.data.error : error.message;
    notification.error(errorMessage);
  }
}

export default function* sagaShopLists() {
  yield takeLatest(types.CREATE.REQUEST, requestShopListItemCreate);
  yield takeLatest(types.UPDATE.REQUEST, requestShopListItemUpdate);
  yield takeLatest(types.DELETE.REQUEST, requestShopListItemDelete);
}
