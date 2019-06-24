import { asyncTypes } from './asyncTypes';

export const getDataAsync = Object.freeze({
  getDataAsync: () => ({
    type: asyncTypes.GET_DATA_ASYNC,
  }),
});
