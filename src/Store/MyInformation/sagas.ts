import { takeLatest, fork, put, call } from 'redux-saga/effects';
import * as COMMON_TYPES from 'CommonTypes';
import { getMyInformation } from '@API';
import {
    GET_MY_INFORMATION_FAILURE,
    GET_MY_INFORMATION_START,
    GET_MY_INFORMATION_SUCCESS,
} from '@Store/MyInformation/types';

function* getMyInformationSaga() {
    try {
        const response: COMMON_TYPES.ServiceResponse<COMMON_TYPES.MyInformationResponse> = yield call(getMyInformation);
        yield put({ type: GET_MY_INFORMATION_SUCCESS, payload: { myInformation: response.payload } });
    } catch (e) {
        yield put({
            type: GET_MY_INFORMATION_FAILURE,
            payload: {
                message: '정보를 불러오지 못했습니다. \n 잠시후 다시 시도해 주세요.',
            },
        });
    }
}

function* onBaseSagaWatcher() {
    yield takeLatest(GET_MY_INFORMATION_START as any, getMyInformationSaga);
}

export default [fork(onBaseSagaWatcher)];
