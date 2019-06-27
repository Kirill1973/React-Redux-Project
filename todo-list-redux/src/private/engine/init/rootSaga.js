import { all, call } from 'redux-saga/effects';

import { watcherTodoListData } from '../core/todoData/saga/watchers';

export function* rootSaga(dispatch, getState) {
  yield all([
    call(watcherTodoListData, getState),
  ]);
}
