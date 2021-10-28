import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { History } from 'history';
import { all } from 'redux-saga/effects';

/** store start */
import app from '@Store/App';
import main from '@Store/Main';
import auths from '@Store/Auths';
import category from '@Store/Category';
import product from '@Store/Product';

import appSagas from '@Store/App/sagas';
import mainSagas from '@Store/Main/sagas';
import authsSagas from '@Store/Auths/sagas';
import categorySagas from '@Store/Category/sagas';
import productSagas from '@Store/Product/sagas';
/** store end */

export const createRootReducer = (history: History) =>
    combineReducers({
        router: connectRouter(history),
        app: app,
        main: main,
        auths: auths,
        category: category,
        product: product,
    });

export function* rootSaga() {
    yield all([...appSagas, ...mainSagas, ...authsSagas, ...categorySagas, ...productSagas]);
}
