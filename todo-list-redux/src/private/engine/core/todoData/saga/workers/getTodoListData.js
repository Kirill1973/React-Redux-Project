import { put, call } from 'redux-saga/effects';
import { todoListDataActions } from '../../actions';
import { api } from '../../../../config/api';

export function* getTodoListData() {
  yield put(todoListDataActions.dataRequest());
  const response = yield call(api.data.fetchTaskTodoListData);
  yield put(todoListDataActions.dataSuccess(response));
}
