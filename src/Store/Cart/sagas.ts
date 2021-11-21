import { takeLatest, fork, put, call } from 'redux-saga/effects';
import { Cart, ServiceResponse } from 'CommonTypes';
import { getCartList } from '@API';
import { GET_CART_LIST_FAILURE, GET_CART_LIST_START, GET_CART_LIST_SUCCESS } from '@Store/Cart/types';

function* getCartListSaga() {
    try {
        const response: ServiceResponse<Cart[]> = yield call(getCartList);
        yield put({ type: GET_CART_LIST_SUCCESS, payload: { cart: response.payload ? response.payload : [] } });
    } catch (e) {
        yield put({
            type: GET_CART_LIST_FAILURE,
            payload: {
                message: '카트 리스트를 불러오지 못했습니다. \n 잠시후 다시 시도해 주세요.',
            },
        });
    }
}

function* onBaseSagaWatcher() {
    yield takeLatest(GET_CART_LIST_START as any, getCartListSaga);
}

export default [fork(onBaseSagaWatcher)];
