import { asyncTypes } from './asyncTypes';

export const asyncActionWithData = Object.freeze({
  getDataAsync: () => ({
    type: asyncTypes.GET_DATA_ASYNC,
  }),
  removeItemAsync: itemId => ({
    type: asyncTypes.REMOVE_ITEM_ASYNC,
    payload: itemId,
  }),
  onToggleDoneAsync: itemId => ({
    type: asyncTypes.TOGGLE_DONE_ASYNC,
    payload: itemId,
  }),
});
