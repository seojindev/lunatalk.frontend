import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import { SagaAction } from 'CommonTypes';
import { AuthsState } from 'StoreTypes';
import * as _Types from './types';

// 스토어 init.
const initialState: AuthsState = {
    register: {
        getAuthCodeRequest: {
            status: 'idle',
            result: {
                phone_number: '',
                auth_index: null,
                auth_code: '',
                message: '',
            },
        },
        authCodeConfirm: {
            status: 'idle',
            result: {
                phone_number: '',
                auth_index: null,
                message: '',
            },
        },
        tryRegister: {
            status: 'idle',
            message: '',
            result: {
                id: '',
                uuid: '',
                login_id: '',
                name: '',
                type: '',
                level: '',
                status: '',
            },
        },
    },
    login: {
        tryLogin: {
            status: 'idle',
            message: '',
            result: {
                access_token: '',
                refresh_token: '',
            },
        },
    },
    logout: {
        tryLogout: {
            status: 'idle',
            message: '',
        },
    },
};

export const AuthsSagaReducer = createReducer<AuthsState>(initialState, {
    [_Types.GET_PHONE_AUTH_CODE]: (state: AuthsState) => {
        return produce(state, draft => {
            draft.register.getAuthCodeRequest.status = 'loading';
            draft.register.getAuthCodeRequest.result = initialState.register.getAuthCodeRequest.result;
        });
    },
    [_Types.GET_PHONE_AUTH_CODE_SUCCESS]: (
        state: AuthsState,
        action: SagaAction<{ result: { phone_number: string; auth_index: number; auth_code: string } }>
    ) => {
        return produce(state, draft => {
            draft.register.getAuthCodeRequest.status = 'success';
            draft.register.getAuthCodeRequest.result = {
                phone_number: action.payload.result.phone_number,
                auth_index: action.payload.result.auth_index,
                auth_code: action.payload.result.auth_code,
                message: '',
            };
        });
    },
    [_Types.GET_PHONE_AUTH_CODE_FAILURE]: (state: AuthsState, action: SagaAction<{ message: string }>) => {
        return produce(state, draft => {
            draft.register.getAuthCodeRequest.status = 'failure';
            draft.register.getAuthCodeRequest.result = {
                phone_number: initialState.register.getAuthCodeRequest.result.phone_number,
                auth_index: initialState.register.getAuthCodeRequest.result.auth_index,
                auth_code: initialState.register.getAuthCodeRequest.result.auth_code,
                message: action.payload.message,
            };
        });
    },
    [_Types.PHONE_AUTH_CONFIRM]: (state: AuthsState) => {
        return produce(state, draft => {
            draft.register.authCodeConfirm.status = 'loading';
            draft.register.authCodeConfirm.result = initialState.register.authCodeConfirm.result;
        });
    },
    [_Types.PHONE_AUTH_CONFIRM_SUCCESS]: (
        state: AuthsState,
        action: SagaAction<{ result: { phone_number: string; auth_index: number; auth_code: string } }>
    ) => {
        return produce(state, draft => {
            draft.register.authCodeConfirm.status = 'success';
            draft.register.authCodeConfirm.result = {
                phone_number: action.payload.result.phone_number,
                auth_index: action.payload.result.auth_index,
                message: '',
            };
        });
    },
    [_Types.PHONE_AUTH_CONFIRM_FAILURE]: (state: AuthsState, action: SagaAction<{ message: string }>) => {
        return produce(state, draft => {
            draft.register.authCodeConfirm.status = 'failure';
            draft.register.authCodeConfirm.result = {
                phone_number: initialState.register.authCodeConfirm.result.phone_number,
                auth_index: initialState.register.authCodeConfirm.result.auth_index,
                message: action.payload.message,
            };
        });
    },
    [_Types.REGISTER_TRY]: (state: AuthsState) => {
        return produce(state, draft => {
            draft.register.tryRegister.status = 'loading';
            draft.register.tryRegister.result = initialState.register.tryRegister.result;
        });
    },
    [_Types.REGISTER_TRY_SUCCESS]: (
        state: AuthsState,
        action: SagaAction<{
            result: {
                id: string;
                uuid: string;
                login_id: string;
                name: string;
                type: string;
                level: string;
                status: string;
            };
        }>
    ) => {
        return produce(state, draft => {
            draft.register.tryRegister.status = 'success';
            draft.register.tryRegister.result = action.payload.result;
        });
    },
    [_Types.REGISTER_TRY_FAILURE]: (state: AuthsState, action: SagaAction<{ message: string }>) => {
        return produce(state, draft => {
            draft.register.tryRegister.status = 'failure';
            draft.register.tryRegister.result = initialState.register.tryRegister.result;
            draft.register.tryRegister.message = action.payload.message;
        });
    },
    [_Types.LOGIN_TRY]: (state: AuthsState) => {
        return produce(state, draft => {
            draft.login.tryLogin.status = 'loading';
            draft.login.tryLogin.result = initialState.login.tryLogin.result;
        });
    },
    [_Types.LOGIN_TRY_SUCCESS]: (
        state: AuthsState,
        action: SagaAction<{
            result: {
                access_token: string;
                refresh_token: string;
            };
        }>
    ) => {
        return produce(state, draft => {
            draft.login.tryLogin.status = 'success';
            draft.login.tryLogin.result = action.payload.result;
        });
    },
    [_Types.LOGIN_TRY_FAILURE]: (state: AuthsState, action: SagaAction<{ message: string }>) => {
        return produce(state, draft => {
            draft.login.tryLogin.status = 'failure';
            draft.login.tryLogin.result = initialState.login.tryLogin.result;
            draft.login.tryLogin.message = action.payload.message;
        });
    },
    [_Types.LOGOUT_TRY]: (state: AuthsState) => {
        return produce(state, draft => {
            draft.login.tryLogin.status = 'loading';
            draft.login.tryLogin.result = initialState.login.tryLogin.result;
        });
    },
    [_Types.LOGOUT_TRY_SUCCESS]: (
        state: AuthsState,
        action: SagaAction<{
            message: string;
        }>
    ) => {
        return produce(state, draft => {
            draft.logout.tryLogout.status = 'success';
            draft.logout.tryLogout.message = action.payload.message;
        });
    },
    [_Types.LOGOUT_TRY_FAILURE]: (state: AuthsState, action: SagaAction<{ message: string }>) => {
        return produce(state, draft => {
            draft.logout.tryLogout.status = 'failure';
            draft.logout.tryLogout.message = action.payload.message;
        });
    },
});
export default AuthsSagaReducer;
