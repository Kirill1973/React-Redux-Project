import { all, takeEvery } from 'redux-saga/effects';

import { asyncTypes } from './asyncTypes';

import { getData } from './workers/getData';

function* watchData() {
  yield takeEvery(asyncTypes.GET_DATA_ASYNC, getData);
}

export function* watcherData() {
  yield all([
    watchData(),
  ]);
}
