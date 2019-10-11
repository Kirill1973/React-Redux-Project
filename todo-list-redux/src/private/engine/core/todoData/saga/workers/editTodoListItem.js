import { select, put } from 'redux-saga/effects';
import { todoListDataActions } from '../../actions';

const getDataFromTodoList = state => state.todoListData.get('todoListArray');

export function* editTodoListItem({ payload: itemId, term }) {
  const cardsData = yield select(getDataFromTodoList);
  const idx = cardsData.findIndex(item => item.id === itemId);
  const item = cardsData[idx];
  item.label = term;
  const newArr = [...cardsData.slice(0, idx), item, ...cardsData.slice(idx + 1)];
  yield put(todoListDataActions.onUpdateItems(newArr));
}
