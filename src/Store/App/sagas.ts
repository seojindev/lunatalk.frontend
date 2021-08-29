import { takeLatest, fork, put, call } from 'redux-saga/effects';
import _Alert_ from '@_Alert_';
import { checkServerNotice, getBaseData } from '@API';
import { COLORLOG, getLocalToken } from '@Helper';
import { axiosDefaultHeader } from '@Util/_Axios_';
import axios from 'axios';
import { ServiceResponse, AppBase } from 'CommonTypes';
import * as _Type from './types';

// 서버 통신 체크만 따로 뺴서..
const checkServerStatus = async () => {
    return axios.get('/api/system/check-status', axiosDefaultHeader);
};

function* appInitSaga() {
    yield put({ type: _Type.START_APP_LOADING }); // 공통 로딩 시작.

    try {
        yield call(checkServerStatus);

        const serverNotice: ServiceResponse<{ notice: string }> = yield call(checkServerNotice);
        if (serverNotice.status === true && serverNotice.payload && serverNotice.payload.notice) {
            _Alert_.default({ text: serverNotice.payload.notice });
        }

        const serverBaseData: ServiceResponse<AppBase> = yield call(getBaseData);

        yield put({
            type: _Type.COMMON_DATA,
            payload: {
                codes: serverBaseData.payload.codes,
            },
        });
        //  로그인후 데이터 저장
        yield put({ type: _Type.LOGIN_SET_START });

        yield put({ type: _Type.APP_INIT_END });
    } catch (error) {
        COLORLOG(':: check Server Error :: ', 'error');
        yield put({
            type: _Type.APP_ERROR,
            payload: {
                message: '어플리 케이션 초기화중 문제가 발생했습니다. \n 잠시후 다시 시도해 주세요.',
            },
        });
    }

    yield put({ type: _Type.END_APP_LOADING }); // 공통 로딩 끝.
}

// function* loginCheckSaga() {
// TODO: api 완성시 추가해야함.
// }

function* loginSetSaga() {
    const localToken = getLocalToken();
    const { login_access_token, login_refresh_token, login_state } = localToken;
    yield put({
        type: _Type.LOGIN_SET_END,
        payload: {
            login_state: login_state === true ? true : false,
            access_token: login_access_token,
            refresh_token: login_refresh_token,
        },
    });
}

function* onBaseSagaWatcher() {
    yield takeLatest(_Type.APP_INIT_START as any, appInitSaga);
    // yield takeLatest(CHECK_LOGIN_START as any, checkLoginSaga);
    yield takeLatest(_Type.LOGIN_SET_START as any, loginSetSaga);
}

export default [fork(onBaseSagaWatcher)];
