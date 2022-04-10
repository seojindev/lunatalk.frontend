import { takeLatest, fork, put, call } from 'redux-saga/effects';
import * as COMMON_TYPES from 'CommonTypes';
import { getCategoryProductByOrder, getSearchProduct } from '@API';
import {
    GET_CATEGORY_LIST_FAILURE,
    GET_CATEGORY_LIST_START,
    GET_CATEGORY_LIST_SUCCESS,
    GET_SEARCH_LIST_FAILURE,
    GET_SEARCH_LIST_START,
    GET_SEARCH_LIST_SUCCESS,
} from '@Store/Category/types';

function* getCategoryListSaga({ payload }: { payload: { categoryUuid: string; orderNumber: string } }) {
    try {
        const response: COMMON_TYPES.ServiceResponse<COMMON_TYPES.ListItem[]> = yield call(getCategoryProductByOrder, {
            categoryUuid: payload.categoryUuid,
            order: payload.orderNumber,
        });
        yield put({ type: GET_CATEGORY_LIST_SUCCESS, payload: { category: response.payload } });
    } catch (e) {
        yield put({
            type: GET_CATEGORY_LIST_FAILURE,
            payload: {
                message: '카테고리 리스트를 불러오지 못했습니다. \n 잠시후 다시 시도해 주세요.',
            },
        });
    }
}

function* getSearchListSaga({ payload }: { payload: { name: string } }) {
    try {
        const response: COMMON_TYPES.ServiceResponse<COMMON_TYPES.ListItem[]> = yield call(getSearchProduct, {
            name: payload.name,
        });
        yield put({
            type: GET_SEARCH_LIST_SUCCESS,
            payload: { searchProducts: response.payload.length > 0 ? response.payload : [] },
        });
    } catch (e) {
        yield put({
            type: GET_SEARCH_LIST_FAILURE,
            payload: {
                message: '카테고리 리스트를 불러오지 못했습니다. \n 잠시후 다시 시도해 주세요.',
            },
        });
    }
}

function* onBaseSagaWatcher() {
    yield takeLatest(GET_CATEGORY_LIST_START as any, getCategoryListSaga);
    yield takeLatest(GET_SEARCH_LIST_START as any, getSearchListSaga);
}

export default [fork(onBaseSagaWatcher)];
