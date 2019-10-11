import { put, select } from 'redux-saga/effects';
import { todoListDataActions } from '../../actions';

const getDataFromTodoList = state => state.todoListData.get('todoListArray');

export function* addItemTodoList({ payload: term }) {
  const maxId = Math.floor(Math.random() * (25 - 5)) + 5;
  const cardsData = yield select(getDataFromTodoList);
  const repeatId = cardsData.findIndex(item => item.id === maxId);
  if (repeatId !== -1) {
    yield put(todoListDataActions.onSetError('error'));
  } else {
    const newItem = {
      label: term, id: maxId, important: false, done: false, edit: false,
    };
    const newArr = [newItem, ...cardsData];
    yield put(todoListDataActions.onUpdateItems(newArr));
  }
}
