import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { History } from 'history';
import { all } from 'redux-saga/effects';

/** store start */
import app from '@Store/App';
import main from '@Store/Main';

import appSagas from '@Store/App/sagas';
import mainSagas from '@Store/Main/sagas';
/** store end */

export const createRootReducer = (history: History) =>
    combineReducers({
        router: connectRouter(history),
        app: app,
        main: main,
    });

export function* rootSaga() {
    yield all([...appSagas, ...mainSagas]);
}
