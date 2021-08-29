import { createAction } from 'typesafe-actions';
import * as _Types from './types';

// 휴대폰 인증번호 요청 액션
export const getPhoneAuthRequestAction = createAction(
    _Types.GET_PHONE_AUTH_CODE,
    ({ phone_number }: { phone_number: string }) => ({
        phone_number,
    })
)();

// 휴대폰 인증번호 확인 액션.
export const phoneAuthConfirmAction = createAction(
    _Types.PHONE_AUTH_CONFIRM,
    ({ auth_code, auth_index }: { auth_code: string; auth_index: number }) => ({
        auth_code,
        auth_index,
    })
)();

// 회원 가입 시도.
export const tryRegisterAction = createAction(
    _Types.REGISTER_TRY,
    ({
        auth_index,
        user_id,
        user_password,
        user_password_confirm,
        user_name,
        user_email,
        user_select_email,
        user_select_message,
    }: {
        auth_index: number;
        user_id: string;
        user_password: string;
        user_password_confirm: string;
        user_name: string;
        user_email: string;
        user_select_email: string;
        user_select_message: string;
    }) => ({
        auth_index,
        user_id,
        user_password,
        user_password_confirm,
        user_name,
        user_email,
        user_select_email,
        user_select_message,
    })
)();

// 로그인 시도.
export const loginAction = createAction(
    _Types.LOGIN_TRY,
    ({
        login_id,
        login_password,
        option_remember,
    }: {
        login_id: string;
        login_password: string;
        option_remember: boolean;
    }) => ({ login_id, login_password, option_remember })
)();

// 로그아웃.
export const logoutAction = createAction(_Types.LOGOUT_TRY)();
