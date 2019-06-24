import { types } from './types';

export const dataActions = Object.freeze({
  dataRequest: () => ({
    type: types.DATA_REQUEST,
  }),
  dataSuccess: data => ({
    type: types.DATA_SUCCESS,
    payload: data,
  }),
  dataFailure: errors => ({
    type: types.DATA_FAILURE,
    payload: errors,
  }),
});
