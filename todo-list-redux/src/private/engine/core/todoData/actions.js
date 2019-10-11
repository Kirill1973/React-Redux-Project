import { types } from './types';

export const todoListDataActions = Object.freeze({
  dataSuccess: newArrData => ({
    type: types.DATA_SUCCESS,
    payload: newArrData,
  }),
  onUpdateItems: newArrData => ({
    type: types.ON_UPDATE_TODO_LIST,
    payload: newArrData,
  }),
  onSearchItems: term => ({
    type: types.ON_SEARCH_ITEMS,
    payload: term,
  }),
  onSetError: error => ({
    type: types.ON_SET_ERROR,
    payload: error,
  }),
});
