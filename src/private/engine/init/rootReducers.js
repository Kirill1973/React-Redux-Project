import { combineReducers } from 'redux';

import { dataReducer } from '../core/dataMain/reducers';

export const rootReducers = () => combineReducers({
  dataReducer,
});
