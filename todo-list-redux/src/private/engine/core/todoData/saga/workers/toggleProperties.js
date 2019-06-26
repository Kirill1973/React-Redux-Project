import { select, put } from 'redux-saga/effects';
import { dataActions } from '../../actions';

const getCurrentArrData = state => state.dataReducer.get('mainData');

export function* toggleProperties({ payload: itemId, value }) {
  const { cardsData } = yield select(getCurrentArrData);
  const idx = cardsData.findIndex(item => item.id === itemId);
  const item = cardsData[idx];
  const newItem = { ...item, [value]: !item[value] };
  const newArr = [...cardsData.slice(0, idx), newItem, ...cardsData.slice(idx + 1)];
  yield put(dataActions.onToggleProperties(newArr));
}
