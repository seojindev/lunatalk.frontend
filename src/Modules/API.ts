import { _Axios_ } from '@Utils';
import {
    ListItem,
    AppBase,
    Login,
    PhoneAuthResponse,
    Register,
    ServiceResponse,
    PhoneAuthConfirmResponse,
    Logout,
    MainSlide,
    MainCategory,
    MainNotice,
    ProductDetail,
    Cart,
} from 'CommonTypes';

// 서버 공지 사항 체크.
export function checkServerNotice(): Promise<ServiceResponse<{ notice: string }>> {
    return _Axios_({ method: 'get', url: '/api/system/check-notice', payload: { data: {} } });
}

// 싸이트 기본 데이터.
export function getBaseData(): Promise<ServiceResponse<AppBase>> {
    return _Axios_({ method: 'get', url: '/api/system/base-data', payload: { data: {} } });
}

// 로그인.
export function login(payload: { login_id: string; login_password: string }): Promise<ServiceResponse<Login>> {
    return _Axios_({ method: 'post', url: '/api/front/v1/auth/login', payload: payload });
}

// 로그아웃.
export function logout(): Promise<ServiceResponse<Logout>> {
    return _Axios_({ method: 'delete', url: '/api/front/v1/auth/logout', payload: { data: {} } });
}

// 회원가입.
export function register(payload: {
    auth_index: number;
    user_id: string;
    user_password: string;
    user_password_confirm: string;
    user_name: string;
    user_email: string;
    user_select_email: string;
    user_select_message: string;
}): Promise<ServiceResponse<Register>> {
    return _Axios_({ method: 'post', url: `/api/front/v1/auth/register`, payload });
}

// 휴대폰 인증.
export function phoneAuth(payload: { phone_number: string }): Promise<ServiceResponse<PhoneAuthResponse>> {
    return _Axios_({
        method: 'get',
        url: `/api/front/v1/auth/${payload.phone_number}/phone-auth`,
        payload: { data: {} },
    });
}

// 휴대폰 인증 확인.
export function phoneAuthConfirm(payload: {
    auth_code: string;
    auth_index: number;
}): Promise<ServiceResponse<PhoneAuthConfirmResponse>> {
    return _Axios_({
        method: 'post',
        url: `/api/front/v1/auth/${payload.auth_index}/phone-auth-confirm`,
        payload: {
            auth_code: payload.auth_code,
        },
    });
}

// 메인 배너
export function getMainSlide(): Promise<ServiceResponse<MainSlide[]>> {
    return _Axios_({ method: 'get', url: '/api/front/v1/pages/main/main-slide', payload: { data: {} } });
}

// 메인 카테고리
export function getMainCategory(): Promise<ServiceResponse<MainCategory[]>> {
    return _Axios_({ method: 'get', url: '/api/front/v1/pages/main/main-product-category', payload: { data: {} } });
}

// 메인 공지사항
export function getMainNotice(): Promise<ServiceResponse<MainNotice[]>> {
    return _Axios_({ method: 'get', url: '/api/front/v1/pages/main/main-notice', payload: { data: {} } });
}

// 메인 베스트 아이템
export function getMainBestItem(): Promise<ServiceResponse<ListItem[]>> {
    return _Axios_({ method: 'get', url: '/api/front/v1/pages/main/main-product-best-item', payload: { data: {} } });
}
// 메인 뉴 아이템
export function getMainNewItem(): Promise<ServiceResponse<ListItem[]>> {
    return _Axios_({ method: 'get', url: '/api/front/v1/pages/main/main-product-new-item', payload: { data: {} } });
}

// 카테고리 리스트
export function getCategoryListItem(payload: { categoryUuid: string }): Promise<ServiceResponse<ListItem[]>> {
    return _Axios_({
        method: 'get',
        url: `/api/front/v1/pages/product-category/${payload.categoryUuid}/list`,
        payload: { data: {} },
    });
}

// 상품 디테일
export function getProductDetail(payload: { productUuid: string }): Promise<ServiceResponse<ProductDetail>> {
    return _Axios_({
        method: 'get',
        url: `/api/front/v1/product/${payload.productUuid}/detail`,
        payload: { data: {} },
    });
}

// 장바구니 아이템 추가
export function addCProductToCart(payload: { productUuid: string }): Promise<ServiceResponse<{ message: string }>> {
    return _Axios_({
        method: 'post',
        url: `/api/front/v1/pages/cart/${payload.productUuid}/create`,
        payload: { data: {} },
    });
}

// 장바구니 리스트
export function getCartList(): Promise<ServiceResponse<Cart[]>> {
    return _Axios_({
        method: 'get',
        url: '/api/front/v1/pages/cart/list',
        payload: { data: {} },
    });
}
