import { put, apply } from 'redux-saga/effects';
import { dataActions } from '../../actions';
import { api } from '../../../../config/api';

export function* getData() {
  yield put(dataActions.dataRequest());
  const response = apply(api, api.data.fetchTaskData);
  const body = yield response;
  if (response.status > 400) {
    yield put(dataActions.dataFailure('error'));
  } else {
    yield put(dataActions.dataSuccess(body));
  }
}
