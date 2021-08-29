import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type MainAction = ActionType<typeof actions>;

// 휴대폰 인증 번호 전송
export const GET_PHONE_AUTH_CODE = 'auth/GET_PHONE_AUTH_CODE';
export const GET_PHONE_AUTH_CODE_SUCCESS = 'auth/GET_PHONE_AUTH_CODE_SUCCESS';
export const GET_PHONE_AUTH_CODE_FAILURE = 'auth/GET_PHONE_AUTH_CODE_FAILURE';

// 휴대폰 인증 코드 확인.
export const PHONE_AUTH_CONFIRM = 'auth/PHONE_AUTH_CONFIRM';
export const PHONE_AUTH_CONFIRM_SUCCESS = 'auth/PHONE_AUTH_CONFIRM_SUCCESS';
export const PHONE_AUTH_CONFIRM_FAILURE = 'auth/PHONE_AUTH_CONFIRM_FAILURE';

// 회원 가입.
export const REGISTER_TRY = 'auth/REGISTER_TRY';
export const REGISTER_TRY_SUCCESS = 'auth/REGISTER_TRY_SUCCESS';
export const REGISTER_TRY_FAILURE = 'auth/REGISTER_TRY_FAILURE';

// 로그인.
export const LOGIN_TRY = 'auth/LOGIN_TRY';
export const LOGIN_TRY_SUCCESS = 'auth/LOGIN_TRY_SUCCESS';
export const LOGIN_TRY_FAILURE = 'auth/LOGIN_TRY_FAILURE';

// 로그아웃.
export const LOGOUT_TRY = 'auth/LOGOUT_TRY';
export const LOGOUT_TRY_SUCCESS = 'auth/LOGOUT_TRY_SUCCESS';
export const LOGOUT_TRY_FAILURE = 'auth/LOGOUT_TRY_FAILURE';
