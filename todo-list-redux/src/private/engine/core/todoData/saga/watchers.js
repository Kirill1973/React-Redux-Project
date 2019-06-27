import { all, takeEvery } from 'redux-saga/effects';

import { asyncTypes } from './asyncTypes';

import { getTodoListData } from './workers/getTodoListData';
import { removeTodoListItem } from './workers/removeTodoListItem';
import { togglePropertiesTodoList } from './workers/toggleProperties';
import { addItemTodoList } from './workers/addItemTodoList';
import { searchTodoItems } from './workers/searchTodoItems';
import { editTodoListItem } from './workers/editTodoListItem';
import { allItemsDone } from './workers/allItemsDone';

function* watchGetData() {
  yield takeEvery(asyncTypes.GET_DATA_ASYNC, getTodoListData);
}

function* watchRemoveItem() {
  yield takeEvery(asyncTypes.REMOVE_ITEM_ASYNC, removeTodoListItem);
}

function* watchToggleProperties() {
  yield takeEvery(asyncTypes.TOGGLE_PROPERTIES_ASYNC, togglePropertiesTodoList);
}

function* watchAddItem() {
  yield takeEvery(asyncTypes.ADD_ITEM_ASYNC, addItemTodoList);
}

function* watchSearchItems() {
  yield takeEvery(asyncTypes.SEARCH_ITEMS_ASYNC, searchTodoItems);
}

function* watchEditItem() {
  yield takeEvery(asyncTypes.EDIT_ITEM_ASYNC, editTodoListItem);
}

function* watchAllItemsDone() {
  yield takeEvery(asyncTypes.ALL_ITEMS_DONE_ASYNC, allItemsDone);
}

export function* watcherTodoListData() {
  yield all([
    watchGetData(),
    watchRemoveItem(),
    watchToggleProperties(),
    watchAddItem(),
    watchSearchItems(),
    watchEditItem(),
    watchAllItemsDone(),
  ]);
}
