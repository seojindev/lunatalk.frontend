import { takeLatest, fork, put, call, select } from 'redux-saga/effects';
import { RootState } from 'StoreTypes';
import _Alert_ from '@_Alert_';
import {} from '@API';

import { COLORLOG, getLocalToken, isEmpty, removeLoginToken } from '@Helper';
import { axiosDefaultHeader } from '@Util/_Axios_';
import axios from 'axios';

import { START_LOADING, APP_INIT_START } from './actions';

function* getState() {
    const state: RootState = yield select();
    return state;
}

// 서버 통신 체크만 따로 뺴서..
const checkServerStatus = async () => {
    return axios.get('/api/system/check-status', axiosDefaultHeader);
};

function* appInitSaga() {
    yield put({ type: START_LOADING }); // 공통 로딩 시작.
}

function* onBaseSagaWatcher() {
    yield takeLatest(APP_INIT_START as any, appInitSaga);
}

export default [fork(onBaseSagaWatcher)];
