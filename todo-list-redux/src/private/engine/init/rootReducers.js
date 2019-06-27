import { combineReducers } from 'redux';

import { todoListDataReducer as todoListData } from '../core/todoData/reducers';

export const rootReducers = () => combineReducers({
  todoListData,
});
