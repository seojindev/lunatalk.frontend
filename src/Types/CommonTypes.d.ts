declare module 'CommonTypes' {
    export type DefaultStatus = 'idle' | 'loading' | 'success' | 'failure';
    export type defaultYesNo = 'Y' | 'N';

    // 사가 기본 타입.
    export interface SagaAction<T> {
        type: SagaTypes;
        payload: T;
    }

    // 토큰
    export type AccessTokenType = string;

    // 토큰 저장 인터페이스.
    export interface LocalTokenInterface {
        access_token: string;
        refresh_token: string;
    }

    // 공통 코드 세부
    export interface CodeItem {
        code_id: string;
        code_name: string;
    }

    // 공통 코드.
    export interface Codes {
        code_name: any;
        code_group: {
            '110': CodeItem[];
            '120': CodeItem[];
            '130': CodeItem[];
            '210': CodeItem[];
            '300': CodeItem[];
            '400': CodeItem[];
            '010': CodeItem[];
        };
    }

    // 기본 api 리턴 인테페이스
    export interface ServiceResponse<T> {
        status: boolean;
        message: string;
        payload: T;
    }

    // 기본 데이터들.
    export interface AppBase {
        codes: Codes[];
    }

    export interface Login {
        access_token: string;
        refresh_token: string;
    }

    export interface Logout {
        message: string;
    }

    export interface Register {
        id: number;
        user_uuid: string;
        login_id: string;
        name: string;
        user_type: string;
        user_level: string;
        user_state: string;
    }

    export interface PhoneAuthResponse {
        phone_number: string;
        auth_index: number;
        auth_code: string;
    }

    export interface PhoneAuthConfirmResponse {
        auth_index: number;
        phone_number: string;
    }

    export interface Banner {
        click_code: string;
        product_name: string;
        product_uuid: string;
        product_image: string;
    }
    export interface BestItem {
        click_code: string;
        product_name: string;
        product_uuid: string;
        product_price: {
            type1: number;
            type2: string;
        };
        product_image: string;
    }
    export interface Category {
        click_code: string;
        product_name: string;
        product_uuid: string;
        product_image: string;
        product_thumb_image: string;
    }
    export interface Categories {
        acc: Category;
        bag: Category;
        stationery: Category;
        wallet: Category;
        CUSTOM_ITEM: Category;
    }

    export interface MainSlide {
        name: string;
        image: {
            file_name: string;
            url: string;
            width: number;
            height: number;
        };
    }
}
