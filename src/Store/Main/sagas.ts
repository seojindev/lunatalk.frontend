import { takeLatest, fork, put, call } from 'redux-saga/effects';
import { getMainBanner, getMainBestItem, getMainCategoies, getMainHotItem } from '@API';
import { ServiceResponse, Banner, BestItem, Categories } from 'CommonTypes';

import {
    GET_MAIN_BANNER_START,
    GET_MAIN_BANNER_SUCCESS,
    GET_MAIN_BANNER_FAILURE,
    GET_MAIN_BESTITEM_SUCCESS,
    GET_MAIN_BESTITEM_FAILURE,
    GET_MAIN_BESTITEM_START,
    GET_MAIN_HOTITEM_SUCCESS,
    GET_MAIN_HOTITEM_FAILURE,
    GET_MAIN_HOTITEM_START,
    GET_MAIN_CATEGORY_SUCCESS,
    GET_MAIN_CATEGORY_FAILURE,
    GET_MAIN_CATEGORY_START,
} from './actions';

function* getMainBannerSaga() {
    try {
        const response: ServiceResponse<Banner[]> = yield call(getMainBanner);
        yield put({ type: GET_MAIN_BANNER_SUCCESS, payload: { banner: response.payload } });
    } catch (e) {
        yield put({
            type: GET_MAIN_BANNER_FAILURE,
            payload: {
                message: '메인 배너 리스트를 불러오지 못했습니다. \n 잠시후 다시 시도해 주세요.',
            },
        });
    }
}

function* getMainBestItemSaga() {
    try {
        const response: ServiceResponse<BestItem[]> = yield call(getMainBestItem);
        yield put({ type: GET_MAIN_BESTITEM_SUCCESS, payload: { best_item: response.payload } });
    } catch (e) {
        yield put({
            type: GET_MAIN_BESTITEM_FAILURE,
            payload: {
                message: '메인 베스트 아이템을 불러오지 못했습니다. \n 잠시후 다시 시도해 주세요.',
            },
        });
    }
}

function* getMainHotItemSaga() {
    try {
        const response: ServiceResponse<BestItem[]> = yield call(getMainHotItem);
        yield put({ type: GET_MAIN_HOTITEM_SUCCESS, payload: { hot_item: response.payload } });
    } catch (e) {
        yield put({
            type: GET_MAIN_HOTITEM_FAILURE,
            payload: {
                message: '메인 핫 아이템을 불러오지 못했습니다. \n 잠시후 다시 시도해 주세요.',
            },
        });
    }
}

function* getMainCategoriesSaga() {
    try {
        const response: ServiceResponse<Categories> = yield call(getMainCategoies);
        yield put({ type: GET_MAIN_CATEGORY_SUCCESS, payload: { categories: response.payload } });
    } catch (e) {
        yield put({
            type: GET_MAIN_CATEGORY_FAILURE,
            payload: {
                message: '메인 카테고리을 불러오지 못했습니다. \n 잠시후 다시 시도해 주세요.',
            },
        });
    }
}

function* onBaseSagaWatcher() {
    yield takeLatest(GET_MAIN_BANNER_START as any, getMainBannerSaga);
    yield takeLatest(GET_MAIN_BESTITEM_START as any, getMainBestItemSaga);
    yield takeLatest(GET_MAIN_HOTITEM_START as any, getMainHotItemSaga);
    yield takeLatest(GET_MAIN_CATEGORY_START as any, getMainCategoriesSaga);
}

export default [fork(onBaseSagaWatcher)];
