import { takeLatest, fork, put, call } from 'redux-saga/effects';
import _Alert_ from '@_Alert_';
import { checkServerNotice, getBaseData } from '@API';
import { COLORLOG } from '@Helper';
import { axiosDefaultHeader } from '@Util/_Axios_';
import axios from 'axios';
import { ServiceResponse, AppBase } from 'ServiceTypes';

import { START_APP_LOADING, END_APP_LOADING, APP_INIT_START, APP_INIT_END, APP_ERROR, COMMON_DATA } from './actions';

// 서버 통신 체크만 따로 뺴서..
const checkServerStatus = async () => {
    return axios.get('/api/system/check-status', axiosDefaultHeader);
};

function* appInitSaga() {
    yield put({ type: START_APP_LOADING }); // 공통 로딩 시작.

    try {
        yield call(checkServerStatus);

        const serverNotice: ServiceResponse<{ notice: string }> = yield call(checkServerNotice);
        if (serverNotice.status === true && serverNotice.payload && serverNotice.payload.notice) {
            _Alert_.default({ text: serverNotice.payload.notice });
        }

        const serverBaseData: ServiceResponse<AppBase> = yield call(getBaseData);

        yield put({
            type: COMMON_DATA,
            payload: {
                codes: serverBaseData.payload.codes,
            },
        });

        yield put({ type: APP_INIT_END });
    } catch (error) {
        COLORLOG(':: check Server Error :: ', 'error');
        yield put({
            type: APP_ERROR,
            payload: {
                message: '어플리 케이션 초기화중 문제가 발생했습니다. \n 잠시후 다시 시도해 주세요.',
            },
        });
    }

    yield put({ type: END_APP_LOADING }); // 공통 로딩 끝.
}

function* onBaseSagaWatcher() {
    yield takeLatest(APP_INIT_START as any, appInitSaga);
}

export default [fork(onBaseSagaWatcher)];
