import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { todoListDataReducer as todoListData } from '../core/todoData/reducers';

export const rootReducers = history => combineReducers({
  router: connectRouter(history),
  todoListData,
});
