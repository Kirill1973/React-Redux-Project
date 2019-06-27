import { asyncTypes } from './asyncTypes';

export const asyncActionTodoList = Object.freeze({
  getDataAsync: () => ({
    type: asyncTypes.GET_DATA_ASYNC,
  }),
  removeItemAsync: itemId => ({
    type: asyncTypes.REMOVE_ITEM_ASYNC,
    payload: itemId,
  }),
  onTogglePropertiesAsync: (itemId, value) => ({
    type: asyncTypes.TOGGLE_PROPERTIES_ASYNC,
    payload: itemId,
    value,
  }),
  addItemAsync: term => ({
    type: asyncTypes.ADD_ITEM_ASYNC,
    payload: term,
  }),
  searchItems: term => ({
    type: asyncTypes.SEARCH_ITEMS_ASYNC,
    payload: term,
  }),
  editItemAsync: (itemId, term) => ({
    type: asyncTypes.EDIT_ITEM_ASYNC,
    payload: itemId,
    term,
  }),
  allItemsDoneAsync: () => ({
    type: asyncTypes.ALL_ITEMS_DONE_ASYNC,
  }),
});
