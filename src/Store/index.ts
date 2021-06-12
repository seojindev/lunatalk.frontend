import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { History } from 'history';
import { all } from 'redux-saga/effects';

export const createRootReducer = (history: History) =>
    combineReducers({
        router: connectRouter(history),
    });

export function* rootSaga() {
    yield all([]);
}
