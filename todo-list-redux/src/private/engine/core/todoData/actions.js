import { types } from './types';

export const todoListDataActions = Object.freeze({
  dataRequest: () => ({
    type: types.DATA_REQUEST,
  }),
  dataSuccess: newArrData => ({
    type: types.DATA_SUCCESS,
    payload: newArrData,
  }),
  dataFailure: errors => ({
    type: types.DATA_FAILURE,
    payload: errors,
  }),
  removeItem: newArrData => ({
    type: types.REMOVE_ITEM,
    payload: newArrData,
  }),
  onToggleProperties: newArrData => ({
    type: types.ON_TOGGLE_PROPERTIES,
    payload: newArrData,
  }),
  onAddItem: newArrData => ({
    type: types.ON_ADD_ITEM,
    payload: newArrData,
  }),
  onSearchItems: term => ({
    type: types.ON_SEARCH_ITEMS,
    payload: term,
  }),
  onEditItem: newArrData => ({
    type: types.ON_EDIT_ITEM,
    payload: newArrData,
  }),
  onAllItemsDone: newArrData => ({
    type: types.ON_ALL_ITEMS_DONE,
    payload: newArrData,
  }),
});
