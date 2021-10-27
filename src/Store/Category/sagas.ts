import { takeLatest, fork, put, call } from 'redux-saga/effects';
import * as COMMON_TYPES from 'CommonTypes';
import { getCategoryListItem } from '@API';
import { GET_CATEGORY_LIST_FAILURE, GET_CATEGORY_LIST_START, GET_CATEGORY_LIST_SUCCESS } from '@Store/Category/types';

function* getCategoryListSaga({ payload }: { payload: { categoryUuid: string } }) {
    try {
        const response: COMMON_TYPES.ServiceResponse<COMMON_TYPES.ListItem[]> = yield call(getCategoryListItem, {
            categoryUuid: payload.categoryUuid,
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

function* onBaseSagaWatcher() {
    yield takeLatest(GET_CATEGORY_LIST_START as any, getCategoryListSaga);
    // yield takeLatest(GET_MAIN_BESTITEM_START as any, getMainBestItemSaga);
    // yield takeLatest(GET_MAIN_HOTITEM_START as any, getMainHotItemSaga);
    // yield takeLatest(GET_MAIN_CATEGORY_START as any, getMainCategoriesSaga);
}

export default [fork(onBaseSagaWatcher)];
