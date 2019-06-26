import { all, call } from 'redux-saga/effects';

import { watcherData } from '../core/todoData/saga/watchers';

export function* rootSaga(dispatch, getState) {
  yield all([
    call(watcherData, getState),
  ]);
}
