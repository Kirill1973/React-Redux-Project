import { Map } from 'immutable';

import { types } from './types';

const initialState = Map({
  todoListArray: [],
  searchTerm: '',
  loading: true,
  error: '',
});

export const todoListDataReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case types.DATA_SUCCESS:
      return state.merge({ loading: false, todoListArray: payload });
    case types.ON_UPDATE_TODO_LIST:
      return state.merge({ todoListArray: payload, error: '' });
    case types.ON_SET_ERROR:
      return state.set('error', payload);
    case types.ON_SEARCH_ITEMS:
      return state.set('searchTerm', payload);
    default:
      return state;
  }
};
