import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';

const logMiddleWare = ({getState}) => (dispatch) => (action) => {
    console.log(action.type, getState())
    dispatch(action);
};

const stringMiddleWare = () => (dispatch) => (action) => {
    if (typeof action === 'string') {
        return dispatch({
            type: action
        })
    }

    return dispatch(action);
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware,stringMiddleWare
, logMiddleWare));

const myActionCreator = (timeout) => (dispatch) => {
    setTimeout(() => {
        dispatch({
            type: 'DELAYED_ACTION'
        })
    }, timeout)
}

store.dispatch(myActionCreator(3000));

export default store;