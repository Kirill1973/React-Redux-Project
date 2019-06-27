import { put, select } from 'redux-saga/effects';
import { todoListDataActions } from '../../actions';

let maxId = 5;

const getDataFromTodoList = state => state.todoListData.get('todoListArray');

export function* addItemTodoList({ payload: term }) {
  const cardsData = yield select(getDataFromTodoList);
  const newItem = {
    label: term, id: maxId++, important: false, done: false, edit: false,
  };
  const newArr = [newItem, ...cardsData];
  yield put(todoListDataActions.onAddItem(newArr));
}
