import { _Axios_ } from '@Utils';
import { RegisterData } from 'RegisterTypes';
import { ServiceResponse } from 'ServiceTypes';
import { AppBase, Login } from 'ServiceTypes';

// 서버 공지 사항 체크.
export function checkServerNotice(): Promise<ServiceResponse<{ notice: string }>> {
    return _Axios_({ method: 'get', url: '/api/system/check-notice', payload: { data: {} } });
}

// 싸이트 기본 데이터.
export function getBaseData(): Promise<ServiceResponse<AppBase>> {
    return _Axios_({ method: 'get', url: '/api/system/base-data', payload: { data: {} } });
}

export function login(payload: { login_id: string; login_password: string }): Promise<ServiceResponse<Login>> {
    return _Axios_({ method: 'post', url: '/api/v1/auth/login', payload: payload });
}
// 회원가입.
export function register(payload: {
    auth_id: string;
    user_id: string;
    user_password: string;
    user_password_confirm: string;
    user_nickname: string;
    user_email: string;
}): Promise<ServiceResponse<AppBase>> {
    return _Axios_({ method: 'post', url: '/api/v1/auth/register', payload: payload });
}
