import { _Axios_ } from '@Utils';
import { PhoneAuth, Register, ServiceResponse } from 'ServiceTypes';
import { AppBase, Login } from 'ServiceTypes';
import { Banner, BestItem } from 'MainTypes';

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
}): Promise<ServiceResponse<Register>> {
    return _Axios_({ method: 'post', url: '/api/v1/auth/register', payload });
}

// 휴대폰 인증.
export function phoneAuth(payload: { phone_number: string }): Promise<ServiceResponse<PhoneAuth>> {
    return _Axios_({ method: 'post', url: '/api/v1/auth/phone-auth', payload });
}

// 휴대폰 인증 확인.
export function phoneAuthConfirm(payload: { auth_code: string; auth_index: number }) {
    return _Axios_({
        method: 'post',
        url: `/api/v1/auth/${payload.auth_index}/phone-auth-confirm`,
        payload: {
            auth_code: payload.auth_code,
        },
    });
}

// 메인 배너
export function getMainBanner(): Promise<ServiceResponse<Banner>> {
    return _Axios_({ method: 'get', url: '/api/v1/pages/tabs/main-top', payload: { data: {} } });
}

// 메인 베스트 아이템
export function getMainBestItem(): Promise<ServiceResponse<BestItem>> {
    return _Axios_({ method: 'get', url: '/api/v1/pages/tabs/main-products-best-items', payload: { data: {} } });
}
// 메인 핫 아이템
export function getMainHotItem(): Promise<ServiceResponse<BestItem>> {
    return _Axios_({ method: 'get', url: '/api/v1/pages/tabs/main-products-hot-items', payload: { data: {} } });
}
