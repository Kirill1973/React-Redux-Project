import { put } from 'redux-saga/effects';
import { todoListDataActions } from '../../actions';

export function* searchTodoItems({ payload: term }) {
  yield put(todoListDataActions.onSearchItems(term));
}
