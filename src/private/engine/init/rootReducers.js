import { combineReducers } from 'redux';

import { dataReducer } from '../core/todoData/reducers';

export const rootReducers = () => combineReducers({
  dataReducer,
});
