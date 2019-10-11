import { put, select } from 'redux-saga/effects';
import { todoListDataActions } from '../../actions';

const getDataFromTodoList = state => state.todoListData.get('todoListArray');

export function* removeTodoListItem({ payload: itemId }) {
  const cardsData = yield select(getDataFromTodoList);
  const idx = cardsData.findIndex(item => item.id === itemId);
  const newArr = [...cardsData.slice(0, idx), ...cardsData.slice(idx + 1)];
  yield put(todoListDataActions.onUpdateItems(newArr));
}
