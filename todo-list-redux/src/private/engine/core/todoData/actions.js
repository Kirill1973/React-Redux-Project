import { types } from './types';

export const dataActions = Object.freeze({
  dataRequest: () => ({
    type: types.DATA_REQUEST,
  }),
  dataSuccess: mainData => ({
    type: types.DATA_SUCCESS,
    payload: mainData,
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
});
