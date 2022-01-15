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

    export interface MainCategory {
        name: string;
        uuid: string;
        image: {
            file_name: string;
            url: string;
            width: number;
            height: number;
        };
    }

    // category Menu 코드.
    export interface Categories {
        uuid: string;
        name: string;
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
        product_category: Categories[];
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
    export interface ListItem {
        uuid: string;
        product: {
            uuid: string;
            name: string;
            original_price: {
                number: number;
                string: string;
            };
            price: {
                number: number;
                string: string;
            };
            color: Array<{ id: number; name: string }>;
            review_count: {
                number: number;
                string: string;
            };
            rep_image: {
                file_name: string;
                url: string;
            };
            badge:
                | Array<{
                      id: number;
                      name: string;
                      image: {
                          id: number;
                          file_name: string;
                          url: string;
                      };
                  }>
                | Array;
        };
        error_message: string;
    }
    export interface CategoryItem {
        uuid?: string;
        products: CategoryProduct[];
    }
    export interface CategoryProduct {
        uuid: string;
        name: string;
        original_price: {
            number: number;
            string: string;
        };
        price: {
            number: number;
            string: string;
        };
        color: Array<{ id: number; name: string }>;
        review_count: {
            number: number;
            string: string;
        };
        rep_image: {
            file_name: string;
            url: string;
        };
        badge:
            | Array<{
                  id: number;
                  name: string;
                  image: {
                      id: number;
                      file_name: string;
                      url: string;
                  };
              }>
            | Array;
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
        url: {
            product_uuid: string;
            slide_url: string;
        };
    }
    export interface MainNotice {
        uuid: string;
        title: string;
        category: {
            code_id: string;
            code_name: string;
        };
        created_at: string;
    }

    export interface ProductDetail {
        uuid: string;
        category: {
            uuid: string;
            name: string;
        };
        name: string;
        barcode: string;
        original_price: {
            number: number;
            string: string;
        };
        price: {
            number: number;
            string: string;
        };
        quantity: {
            number: number;
            string: string;
        };
        reviews: [];
        options: {
            color: {
                id: number;
                name: string;
            }[];
            wireless: {
                id: number;
                name: string;
            }[];
        };
        image: {
            rep: {
                id: number;
                file_name: string;
                url: string;
            }[];
            detail: {
                id: number;
                file_name: string;
                url: string;
            }[];
        };
        sale: string;
        active: string;
        created_at: {
            type1: string;
            type2: string;
            type3: string;
        };
    }
    export interface Cart {
        cart_id: number;
        product_uuid: string;
        name: string;
        color: {
            id: number;
            name: string;
        }[];
        price: {
            number: number;
            string: string;
        };
        rep_image: {
            id: number;
            file_name: string;
            url: string;
        };
    }

    export interface MyInformationResponse {
        uuid: string;
        login_id: string;
        client: {
            code_id: string;
            code_name: string;
        };
        type: {
            code_id: string;
            code_name: string;
        };
        level: {
            code_id: string;
            code_name: string;
        };
        status: {
            code_id: string;
            code_name: string;
        };
        name: string;
        address: {
            zipcode: string;
            step1: string;
            step2: string;
        };
        email: {
            full_email: string;
            gubun1: {
                step1: string;
                step2: string;
            };
            gubun2: {
                step1: string;
                step2: string;
            };
        };
        phone_number: {
            step1: string;
            step2: string;
            step3: string;
        };
    }
    export interface NoticeDetailResponse {
        id: number;
        uuid: string;
        category: {
            code_id: string;
            code_name: string;
        };
        title: string;
        content: string;
        images:
            | []
            | {
                  file_name: string;
                  url: string;
              }[];
        created_at: {
            type1: string;
            type2: string;
        };
    }

    export interface OrderProduct {
        uuid: string;
        name: string;
        count: number;
        price: string;
        numberPrice: number;
        options: string | undefined;
    }
    export interface CallPaymentOrderPayload {
        name: string;
        zipcode: string;
        address1: string;
        address2: string;
        phone: string;
        email: string;
        message: string | undefined;
        product: string[];
    }

    export interface OrderMyInfoResponse {
        name: string;
        address: {
            zipcode: string;
            step1: string;
            step2: string;
        };
        email: {
            full_email: string;
            gubun1: {
                step1: string;
                step2: string;
            };
            gubun2: {
                step1: string;
                step2: string;
            };
        };
        phone_number: {
            step1: string;
            step2: string;
            step3: string;
        };
    }
}
