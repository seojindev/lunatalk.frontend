import { takeLatest, fork, put, call } from 'redux-saga/effects';
import { getMainBanner } from '@API';
import { ServiceResponse } from 'ServiceTypes';

import { GET_MAIN_BANNER_START, GET_MAIN_BANNER_SUCCESS, GET_MAIN_BANNER_FAILURE } from './actions';
import { Banner } from 'MainTypes';

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

function* onBaseSagaWatcher() {
    yield takeLatest(GET_MAIN_BANNER_START as any, getMainBannerSaga);
}

export default [fork(onBaseSagaWatcher)];
