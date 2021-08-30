import { createReducer } from 'typesafe-actions';
import { SagaAction, Codes } from 'CommonTypes';
import produce from 'immer';
// import { ErrorMessage } from 'StoreTypes';
import { AppState } from 'StoreTypes';
import {} from './actions';

import * as _Type from './types';

// 스토어 init.
const initialState: AppState = {
    loading: false,
    pageLoading: false,
    status: false,
    loginState: false,
    service_message: '',
    common: {
        codes: {
            code_name: '',
            code_group: {
                '110': [],
                '120': [],
                '130': [],
                '210': [],
                '300': [],
                '400': [],
                '010': [],
            },
        },
    },
    loginUser: {
        access_token: '',
        refresh_token: '',
    },
};

export const AppSagaReducer = createReducer<AppState>(initialState, {
    [_Type.START_APP_LOADING]: (state: AppState) => {
        return produce(state, draft => {
            draft.loading = true;
        });
    },
    [_Type.END_APP_LOADING]: (state: AppState) => {
        return produce(state, draft => {
            draft.loading = false;
        });
    },
    [_Type.COMMON_DATA]: (state: AppState, action: SagaAction<{ codes: Codes }>) => {
        return produce(state, draft => {
            draft.common.codes = action.payload.codes;
        });
    },
    [_Type.APP_INIT_END]: (state: AppState) => {
        return produce(state, draft => {
            draft.status = true;
        });
    },
    [_Type.APP_ERROR]: (state: AppState, action: SagaAction<{ message: string }>) => {
        return produce(state, draft => {
            draft.service_message = action.payload.message;
        });
    },
    // 새로고침시 로그인 확인
    // 로그인 정보 저장시 초기화.
    [_Type.LOGIN_SET_START]: (state: AppState) => {
        return produce(state, draft => {
            draft.loginState = false;
            draft.loginUser = initialState.loginUser;
        });
    },
    // 로그인 체크후 로그인 정보 저장.
    [_Type.LOGIN_SET_END]: (
        state: AppState,
        action: SagaAction<{ login_state: boolean; access_token: string; refresh_token: string }>
    ) => {
        return produce(state, draft => {
            draft.loginState = action.payload.login_state;
            draft.loginUser.access_token = action.payload.access_token;
            draft.loginUser.refresh_token = action.payload.refresh_token;
        });
    },
    [_Type.PAGE_LOADING_START]: (state: AppState) => {
        return produce(state, draft => {
            draft.pageLoading = true;
        });
    },
    [_Type.PAGE_LOADING_END]: (state: AppState) => {
        return produce(state, draft => {
            draft.pageLoading = false;
        });
    },
});
export default AppSagaReducer;
