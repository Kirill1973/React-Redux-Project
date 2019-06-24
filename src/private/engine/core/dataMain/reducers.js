import { Map } from 'immutable';

import { types } from './types';

const initialState = Map({
  request: false,
  success: false,
  errors: '',
  data: {},
});

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DATA_REQUEST:
      return state.set('request', true);
    case types.DATA_SUCCESS:
      return state.merge({ request: false, success: true, data: action.payload });
    case types.DATA_FAILURE:
      return state.merge({ request: false, success: false, errors: action.payload });
    default:
      return state;
  }
};
