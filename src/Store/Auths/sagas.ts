import { takeLatest, fork, put, call } from 'redux-saga/effects';
import * as COMMON_TYPES from 'CommonTypes';

import * as _AppTypes from '@Store/App/types';
import * as _Types from './types';
import * as _API from '@API';
import { cookieManager, saveLoginToken, removeLoginToken } from '@Helper';

// 휴대폰 인증 코드 요청 사가.
function* getPhoneAuthCodeRequestSaga({ payload }: { payload: { phone_number: string } }) {
    yield put({
        type: _AppTypes.PAGE_LOADING_START,
    });

    const response: COMMON_TYPES.ServiceResponse<COMMON_TYPES.PhoneAuthResponse> = yield call(_API.phoneAuth, {
        phone_number: payload.phone_number,
    });

    if (response.status) {
        yield put({
            type: _Types.GET_PHONE_AUTH_CODE_SUCCESS,
            payload: {
                result: response.payload,
            },
        });
    } else {
        yield put({
            type: _Types.GET_PHONE_AUTH_CODE_FAILURE,
            payload: {
                message: response.message,
            },
        });
    }

    yield put({
        type: _AppTypes.PAGE_LOADING_END,
    });
}

// 휴대폰 인증번호 확인 사가.
function* phoneAuthConfirmSaga({ payload }: { payload: { auth_code: string; auth_index: number } }) {
    yield put({
        type: _AppTypes.PAGE_LOADING_START,
    });

    const response: COMMON_TYPES.ServiceResponse<COMMON_TYPES.PhoneAuthConfirmResponse> = yield call(
        _API.phoneAuthConfirm,
        {
            auth_code: payload.auth_code,
            auth_index: payload.auth_index,
        }
    );

    if (response.status) {
        yield put({
            type: _Types.PHONE_AUTH_CONFIRM_SUCCESS,
            payload: {
                result: response.payload,
            },
        });
    } else {
        yield put({
            type: _Types.PHONE_AUTH_CONFIRM_FAILURE,
            payload: {
                message: response.message,
            },
        });
    }

    yield put({
        type: _AppTypes.PAGE_LOADING_END,
    });
}

// 회원가입 시도.
function* tryRegisterSaga({
    payload,
}: {
    payload: {
        auth_index: number;
        user_id: string;
        user_password: string;
        user_password_confirm: string;
        user_name: string;
        user_email: string;
        user_select_email: string;
        user_select_message: string;
    };
}) {
    yield put({
        type: _AppTypes.PAGE_LOADING_START,
    });

    const response: COMMON_TYPES.ServiceResponse<COMMON_TYPES.Register> = yield call(_API.register, payload);

    if (response.status) {
        yield put({
            type: _Types.REGISTER_TRY_SUCCESS,
            payload: {
                result: response.payload,
            },
        });
    } else {
        yield put({
            type: _Types.REGISTER_TRY_FAILURE,
            payload: {
                message: response.message,
            },
        });
    }

    yield put({
        type: _AppTypes.PAGE_LOADING_END,
    });
}

// 로그인 사가.
function* loginSaga({
    payload,
}: {
    payload: {
        login_id: string;
        login_password: string;
        option_remember: boolean;
    };
}) {
    yield put({
        type: _AppTypes.PAGE_LOADING_START,
    });

    if (payload.option_remember) {
        cookieManager.set('login_id', payload.login_id);
    } else {
        cookieManager.remove('login_id');
    }

    const response: COMMON_TYPES.ServiceResponse<COMMON_TYPES.Login> = yield call(_API.login, {
        login_id: payload.login_id,
        login_password: payload.login_password,
    });

    if (response.status) {
        // 토큰 저장.
        saveLoginToken({
            access_token: response.payload.access_token,
            refresh_token: response.payload.refresh_token,
        });

        yield put({
            type: _Types.LOGIN_TRY_SUCCESS,
            payload: {
                result: {
                    login_id: payload.login_id,
                    login_password: payload.login_password,
                },
            },
        });
        yield put({ type: _AppTypes.LOGIN_SET_START });
    } else {
        // 토큰 삭제.
        removeLoginToken();

        yield put({
            type: _Types.LOGIN_TRY_FAILURE,
            payload: {
                message: response.message,
            },
        });
    }

    yield put({
        type: _AppTypes.PAGE_LOADING_END,
    });
}

// 로그아웃.
function* logoutSaga() {
    const response: COMMON_TYPES.ServiceResponse<COMMON_TYPES.Logout> = yield call(_API.logout);

    if (response.status) {
        removeLoginToken();
        yield put({
            type: _Types.LOGOUT_TRY_SUCCESS,
            payload: response.payload,
        });
        yield put({ type: _AppTypes.LOGIN_SET_START });
    } else {
        // 토큰 삭제.
        removeLoginToken();
        yield put({
            type: _Types.LOGOUT_TRY_FAILURE,
            payload: {
                message: response.message,
            },
        });
        yield put({ type: _AppTypes.LOGIN_SET_START });
    }
}

function* onAuthSagaWatcher() {
    yield takeLatest(_Types.GET_PHONE_AUTH_CODE as any, getPhoneAuthCodeRequestSaga);
    yield takeLatest(_Types.PHONE_AUTH_CONFIRM as any, phoneAuthConfirmSaga);
    yield takeLatest(_Types.REGISTER_TRY as any, tryRegisterSaga);
    yield takeLatest(_Types.LOGIN_TRY as any, loginSaga);
    yield takeLatest(_Types.LOGOUT_TRY as any, logoutSaga);
}

export default [fork(onAuthSagaWatcher)];
