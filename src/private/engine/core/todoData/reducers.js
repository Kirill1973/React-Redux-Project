import { Map } from 'immutable';

import { types } from './types';

const initialState = Map({
  request: false,
  success: false,
  errors: '',
  mainData: {},
});

export const dataReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case types.DATA_REQUEST:
      return state.set('request', true);
    case types.DATA_SUCCESS:
      return state.merge({ request: false, success: true, mainData: payload });
    case types.DATA_FAILURE:
      return state.merge({ request: false, success: false, errors: payload });
    case types.REMOVE_ITEM:
      return state.set('mainData', payload);
    case types.ON_TOGGLE_PROPERTIES:
      return state.set('mainData', payload);
    default:
      return state;
  }
};
