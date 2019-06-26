import { put, call } from 'redux-saga/effects';
import { dataActions } from '../../actions';
import { api } from '../../../../config/api';

export function* getData() {
  yield put(dataActions.dataRequest());
  const response = yield call(api.data.fetchTaskData);
  yield put(dataActions.dataSuccess(response));
}
