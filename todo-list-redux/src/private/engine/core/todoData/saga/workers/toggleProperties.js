import { select, put } from 'redux-saga/effects';
import { todoListDataActions } from '../../actions';

const getDataFromTodoList = state => state.todoListData.get('todoListArray');

export function* togglePropertiesTodoList({ payload: itemId, value }) {
  const cardsData = yield select(getDataFromTodoList);
  const idx = cardsData.findIndex(item => item.id === itemId);
  const item = cardsData[idx];
  const newItem = { ...item, [value]: !item[value] };
  const newArr = [...cardsData.slice(0, idx), newItem, ...cardsData.slice(idx + 1)];
  yield put(todoListDataActions.onUpdateItems(newArr));
}
