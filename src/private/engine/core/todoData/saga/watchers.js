import { all, takeEvery } from 'redux-saga/effects';

import { asyncTypes } from './asyncTypes';

import { getData } from './workers/getData';
import { removeItem } from './workers/removeItem';
import { toggleProperties } from './workers/toggleDone';

function* watchGetData() {
  yield takeEvery(asyncTypes.GET_DATA_ASYNC, getData);
}

function* watchRemoveItem() {
  yield takeEvery(asyncTypes.REMOVE_ITEM_ASYNC, removeItem);
}

function* watchToggleProperties() {
  yield takeEvery(asyncTypes.TOGGLE_PROPERTIES_ASYNC, toggleProperties);
}

export function* watcherData() {
  yield all([
    watchGetData(),
    watchRemoveItem(),
    watchToggleProperties(),
  ]);
}
