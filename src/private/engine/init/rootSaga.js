import { all, call } from 'redux-saga/effects';

import { watcherData } from '../core/dataMain/saga/watchers';

export function* rootSaga(dispatch, getState) {
  yield all([
    call(watcherData, getState),
  ]);
}
