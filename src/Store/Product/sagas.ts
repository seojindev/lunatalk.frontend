import { takeLatest, fork, put, call } from 'redux-saga/effects';
import * as COMMON_TYPES from 'CommonTypes';
import { getProductDetail, getRecommendProduct } from '@API';
import {
    GET_PRODUCT_DETAIL_FAILURE,
    GET_PRODUCT_DETAIL_START,
    GET_PRODUCT_DETAIL_SUCCESS,
    GET_PRODUCT_RECOMMEND_FAILURE,
    GET_PRODUCT_RECOMMEND_START,
    GET_PRODUCT_RECOMMEND_SUCCESS,
} from '@Store/Product/types';

function* getProductDetailSaga({ payload }: { payload: { productUuid: string } }) {
    try {
        const response: COMMON_TYPES.ServiceResponse<COMMON_TYPES.ProductDetail> = yield call(getProductDetail, {
            productUuid: payload.productUuid,
        });
        yield put({ type: GET_PRODUCT_DETAIL_SUCCESS, payload: { productDetail: response.payload } });
    } catch (e) {
        yield put({
            type: GET_PRODUCT_DETAIL_FAILURE,
            payload: {
                message: '상품 디테일를 불러오지 못했습니다. \n 잠시후 다시 시도해 주세요.',
            },
        });
    }
}

function* getProductRecommendSaga({ payload }: { payload: { productUuid: string } }) {
    try {
        const response: COMMON_TYPES.ServiceResponse<COMMON_TYPES.CategoryProduct[]> = yield call(getRecommendProduct, {
            productUuid: payload.productUuid,
        });
        yield put({ type: GET_PRODUCT_RECOMMEND_SUCCESS, payload: { recommend: response.payload } });
    } catch (e) {
        yield put({
            type: GET_PRODUCT_RECOMMEND_FAILURE,
            payload: {
                message: '추천상품을 불러오지 못했습니다. \n 잠시후 다시 시도해 주세요.',
            },
        });
    }
}
function* onBaseSagaWatcher() {
    yield takeLatest(GET_PRODUCT_DETAIL_START as any, getProductDetailSaga);
    yield takeLatest(GET_PRODUCT_RECOMMEND_START as any, getProductRecommendSaga);
}

export default [fork(onBaseSagaWatcher)];
