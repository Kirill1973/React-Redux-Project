import { select, put } from 'redux-saga/effects';
import { dataActions } from '../../actions';

const getCurrentArrData = state => state.dataReducer.get('mainData');

export function* toggleDone({ payload: itemId }) {
  const { cardsData } = yield select(getCurrentArrData);
  const idx = cardsData.findIndex(item => item.id === itemId);
  const item = cardsData[idx];
  item.done = !item.done;
  const newArr = [...cardsData.slice(0, idx), item, ...cardsData.slice(idx + 1)];
  yield put(dataActions.onToggleDone(newArr));
}
