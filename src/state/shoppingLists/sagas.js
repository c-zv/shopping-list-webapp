import { takeLatest, call, put } from 'redux-saga/effects';

import api from 'utils/api';
import { types, actionsShopLists } from './actions';


// TODO: replace this method with global notifications
const showGlobalNotification = (errorMessage) => {
  const defaultMessage = 'Something went wrong. Please try again later';
  const message = errorMessage || defaultMessage;
  console.log('--> showGlobalNotification: ', message);
};

function* requestShopListsAll() {
  try {
    const result = yield call(api.shopLists.getAll);
    yield put(actionsShopLists.shopListAll.requestSuccess(result.data));
  } catch (error) {
    yield put(actionsShopLists.shopListAll.requestFail());
    const errorMessage = error.response ? error.response.data.error : error.message;
    showGlobalNotification(errorMessage);
  }
}

function* requestShopListsOne(action) {
  try {
    const result = yield call(api.shopLists.getOne, action.payload);
    yield put(actionsShopLists.shopListOne.requestSuccess(result.data));
  } catch (error) {
    yield put(actionsShopLists.shopListOne.requestFail());
    const errorMessage = error.response ? error.response.data.error : error.message;
    showGlobalNotification(errorMessage);
  }
}

function* requestShopListsCreate(action) {
  try {
    yield call(api.shopLists.create, action.payload);
    yield put(actionsShopLists.shopListCreate.requestSuccess());
    yield put(actionsShopLists.shopListAll.request());
  } catch (error) {
    yield put(actionsShopLists.shopListCreate.requestFail());
    const errorMessage = error.response ? error.response.data.error : error.message;
    showGlobalNotification(errorMessage);
  }
}

function* requestShopListsUpdate(action) {
  try {
    yield call(api.shopLists.update, action.payload.id, action.payload.shopList);
    yield put(actionsShopLists.shopListUpdate.requestSuccess());
    yield put(actionsShopLists.shopListAll.request());
  } catch (error) {
    yield put(actionsShopLists.shopListUpdate.requestFail());
    const errorMessage = error.response ? error.response.data.error : error.message;
    showGlobalNotification(errorMessage);
  }
}

function* requestShopListsDelete(action) {
  try {
    yield call(api.shopLists.delete, action.payload);
    yield put(actionsShopLists.shopListDelete.requestSuccess());
    yield put(actionsShopLists.shopListAll.request());
  } catch (error) {
    yield put(actionsShopLists.shopListDelete.requestFail());
    const errorMessage = error.response ? error.response.data.error : error.message;
    showGlobalNotification(errorMessage);
  }
}

export default function* sagaShopLists() {
  yield takeLatest(types.ALL.REQUEST, requestShopListsAll);
  yield takeLatest(types.ONE.REQUEST, requestShopListsOne);
  yield takeLatest(types.CREATE.REQUEST, requestShopListsCreate);
  yield takeLatest(types.UPDATE.REQUEST, requestShopListsUpdate);
  yield takeLatest(types.DELETE.REQUEST, requestShopListsDelete);
}
