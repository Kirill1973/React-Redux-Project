import { asyncTypes } from './asyncTypes';

export const asyncActionWithData = Object.freeze({
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
});
