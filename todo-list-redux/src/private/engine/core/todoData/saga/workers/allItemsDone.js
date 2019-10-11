import { put, select } from 'redux-saga/effects';
import { todoListDataActions } from '../../actions';

const getDataFromTodoList = state => state.todoListData.get('todoListArray');

export function* allItemsDone() {
  const cardsData = yield select(getDataFromTodoList);
  const itemsDone = cardsData.filter(item => item.done === true);
  const simpleItems = cardsData.filter(item => item.done === false);
  for (let i = 0; i < simpleItems.length; i += 1) {
    simpleItems[i].done = !simpleItems[i].done;
  }
  if (itemsDone.length === cardsData.length) {
    for (let i = 0; i < itemsDone.length; i += 1) {
      itemsDone[i].done = !itemsDone[i].done;
    }
  }
  const newArr = [...itemsDone, ...simpleItems];
  yield put(todoListDataActions.onUpdateItems(newArr));
}
