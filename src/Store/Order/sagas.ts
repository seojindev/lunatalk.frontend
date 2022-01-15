import { takeLatest, fork, put, call } from 'redux-saga/effects';
import { OrderMyInfoResponse, ServiceResponse } from 'CommonTypes';
import { getOrderMyInfo } from '@API';
import { GET_ORDER_MY_INFO_FAILURE, GET_ORDER_MY_INFO_START, GET_ORDER_MY_INFO_SUCCESS } from '@Store/Order/types';

function* getOrderMyInfoSaga() {
    try {
        const response: ServiceResponse<OrderMyInfoResponse> = yield call(getOrderMyInfo);
        yield put({ type: GET_ORDER_MY_INFO_SUCCESS, payload: { myInfo: response.payload } });
    } catch (e) {
        yield put({ type: GET_ORDER_MY_INFO_FAILURE, payload: { message: '정보를 불러오지 못했습니다.' } });
    }
}

function* onBaseSagaWatcher() {
    yield takeLatest(GET_ORDER_MY_INFO_START as any, getOrderMyInfoSaga);
}

export default [fork(onBaseSagaWatcher)];
