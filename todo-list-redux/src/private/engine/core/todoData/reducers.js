import { Map } from 'immutable';

import { types } from './types';

const initialState = Map({
  request: false,
  success: false,
  errors: '',
  todoListArray: [],
  searchTerm: '',
});

export const todoListDataReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case types.DATA_REQUEST:
      return state.set('request', true);
    case types.DATA_SUCCESS:
      return state.merge({ request: false, success: true, todoListArray: payload });
    case types.DATA_FAILURE:
      return state.merge({ request: false, success: false, errors: payload });
    case types.REMOVE_ITEM:
      return state.set('todoListArray', payload);
    case types.ON_TOGGLE_PROPERTIES:
      return state.set('todoListArray', payload);
    case types.ON_ADD_ITEM:
      return state.set('todoListArray', payload);
    case types.ON_SEARCH_ITEMS:
      return state.set('searchTerm', payload);
    case types.ON_EDIT_ITEM:
      return state.set('todoListArray', payload);
    case types.ON_ALL_ITEMS_DONE:
      return state.set('todoListArray', payload);
    default:
      return state;
  }
};
