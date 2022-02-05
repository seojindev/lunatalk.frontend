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
    MyInformationResponse,
    CategoryProduct,
    NoticeDetailResponse,
    CallPaymentOrderPayload,
    OrderMyInfoResponse,
    MyPageOrderInfoResponse,
    MyPageOrderInfoDetailResponse,
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

// 추천 상품
export function getRecommendProduct(payload: { productUuid: string }): Promise<ServiceResponse<CategoryProduct[]>> {
    return _Axios_({
        method: 'get',
        url: `/api/front/v1/product/${payload.productUuid}/recommend`,
        payload: { data: {} },
    });
}

// 장바구니 아이템 추가
export function addProductToCart(payload: { productUuid: string }): Promise<ServiceResponse<{ message: string }>> {
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

// 장바구니 삭제
export function deleteCart(payload: { cartList: number[] }): Promise<ServiceResponse<{ message: string }>> {
    return _Axios_({
        method: 'delete',
        url: '/api/front/v1/pages/cart/many-delete',
        payload: payload.cartList,
    });
}

// 리뷰 작성
export function addReview(payload: {
    productUuid: string;
    title: string;
    review: string;
}): Promise<ServiceResponse<{ message: string }>> {
    return _Axios_({
        method: 'post',
        url: `/api/front/v1/product/${payload.productUuid}/create-review`,
        payload: { title: payload.title, review: payload.review },
    });
}

// 검색페이지
export function getSearchProduct(payload: { name: string }): Promise<ServiceResponse<ListItem[]>> {
    return _Axios_({
        method: 'get',
        url: `/api/front/v1/product/${payload.name}/search-list`,
        payload: { data: {} },
    });
}

// 내정보
export function getMyInformation(): Promise<ServiceResponse<MyInformationResponse>> {
    return _Axios_({
        method: 'get',
        url: '/api/front/v1/pages/my-page/my-info',
        payload: { data: {} },
    });
}

// 내 정보 수정
export function updateMyInformation(payload: {
    authIndex: string | null;
    password: string;
    email: string;
    zipcode: string | null;
    step1: string | null;
    step2: string | null;
}): Promise<ServiceResponse<{ message: string }>> {
    return _Axios_({
        method: 'post',
        url: '/api/front/v1/pages/my-page/my-info',
        payload: {
            auth_index: payload.authIndex,
            password: payload.password,
            email: payload.email,
            zipcode: payload.zipcode,
            step1: payload.step1,
            step2: payload.step2,
        },
    });
}

export function getNoticeDetail(payload: { uuid: string }): Promise<ServiceResponse<NoticeDetailResponse>> {
    return _Axios_({
        method: 'get',
        url: `/api/front/v1/pages/main/${payload.uuid}/notice-detail`,
        payload: { data: {} },
    });
}

export function callPaymentOrder(payload: {
    paymentOrderData: CallPaymentOrderPayload;
}): Promise<ServiceResponse<{ pay_url: string }>> {
    return _Axios_({
        method: 'post',
        url: '/api/front/v1/pages/product/order',
        payload: payload.paymentOrderData,
    });
}

// 오더페이지 정보 불러오기.
export function getOrderMyInfo(): Promise<ServiceResponse<OrderMyInfoResponse>> {
    return _Axios_({
        method: 'get',
        url: '/api/front/v1/pages/my-page/my-order-info',
        payload: { data: {} },
    });
}

// 마이페이지 주문한 내역 불러오기
export function geyMyPageOrderInfo(): Promise<ServiceResponse<MyPageOrderInfoResponse>> {
    return _Axios_({
        method: 'get',
        url: '/api/front/v1/pages/my-page/my-order',
        payload: { data: {} },
    });
}
// 주문 디테일 정보 불러오기
export function getMyPageOrderDetail(payload: {
    orderUuid: string;
}): Promise<ServiceResponse<MyPageOrderInfoDetailResponse>> {
    return _Axios_({
        method: 'get',
        url: `/api/front/v1/pages/my-page/${payload.orderUuid}/my-order-detail`,
        payload: { data: {} },
    });
}
