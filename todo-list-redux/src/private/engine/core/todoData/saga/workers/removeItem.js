import { put, select } from 'redux-saga/effects';
import { dataActions } from '../../actions';

const getCurrentArrData = state => state.dataReducer.get('mainData');

export function* removeItem({ payload: itemId }) {
  const { cardsData } = yield select(getCurrentArrData);
  const idx = cardsData.findIndex(item => item.id === itemId);
  const newArr = [...cardsData.slice(0, idx), ...cardsData.slice(idx + 1)];
  yield put(dataActions.removeItem((newArr)));
}
