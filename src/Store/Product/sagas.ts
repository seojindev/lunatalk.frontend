import { fork } from 'redux-saga/effects';

function* onBaseSagaWatcher() {
    // yield takeLatest(GET_PRODUCT_DETAIL_START as any, getProductDetailSaga);
    // yield takeLatest(GET_PRODUCT_RECOMMEND_START as any, getProductRecommendSaga);
}

export default [fork(onBaseSagaWatcher)];
