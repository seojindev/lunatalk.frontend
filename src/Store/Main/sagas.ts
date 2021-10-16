import { takeLatest, fork, put, call } from 'redux-saga/effects';
import { getMainSlide } from '@API';
import { ServiceResponse, MainSlide } from 'CommonTypes';
import { GET_MAIN_SLIDE_FAILURE, GET_MAIN_SLIDE_START, GET_MAIN_SLIDE_SUCCESS } from '@Store/Main/actions';

function* getMainSlideSaga() {
    try {
        const response: ServiceResponse<MainSlide[]> = yield call(getMainSlide);
        yield put({ type: GET_MAIN_SLIDE_SUCCESS, payload: { main_slide: response.payload } });
    } catch (e) {
        yield put({
            type: GET_MAIN_SLIDE_FAILURE,
            payload: {
                message: '메인 배너 리스트를 불러오지 못했습니다. \n 잠시후 다시 시도해 주세요.',
            },
        });
    }
}

// function* getMainBestItemSaga() {
//     try {
//         const response: ServiceResponse<BestItem[]> = yield call(getMainBestItem);
//         yield put({ type: GET_MAIN_BESTITEM_SUCCESS, payload: { best_item: response.payload } });
//     } catch (e) {
//         yield put({
//             type: GET_MAIN_BESTITEM_FAILURE,
//             payload: {
//                 message: '메인 베스트 아이템을 불러오지 못했습니다. \n 잠시후 다시 시도해 주세요.',
//             },
//         });
//     }
// }
//
// function* getMainHotItemSaga() {
//     try {
//         const response: ServiceResponse<BestItem[]> = yield call(getMainHotItem);
//         yield put({ type: GET_MAIN_HOTITEM_SUCCESS, payload: { hot_item: response.payload } });
//     } catch (e) {
//         yield put({
//             type: GET_MAIN_HOTITEM_FAILURE,
//             payload: {
//                 message: '메인 핫 아이템을 불러오지 못했습니다. \n 잠시후 다시 시도해 주세요.',
//             },
//         });
//     }
// }
//
// function* getMainCategoriesSaga() {
//     try {
//         const response: ServiceResponse<Categories> = yield call(getMainCategoies);
//         yield put({ type: GET_MAIN_CATEGORY_SUCCESS, payload: { categories: response.payload } });
//     } catch (e) {
//         yield put({
//             type: GET_MAIN_CATEGORY_FAILURE,
//             payload: {
//                 message: '메인 카테고리을 불러오지 못했습니다. \n 잠시후 다시 시도해 주세요.',
//             },
//         });
//     }
// }

function* onBaseSagaWatcher() {
    yield takeLatest(GET_MAIN_SLIDE_START as any, getMainSlideSaga);
    // yield takeLatest(GET_MAIN_BESTITEM_START as any, getMainBestItemSaga);
    // yield takeLatest(GET_MAIN_HOTITEM_START as any, getMainHotItemSaga);
    // yield takeLatest(GET_MAIN_CATEGORY_START as any, getMainCategoriesSaga);
}

export default [fork(onBaseSagaWatcher)];
