declare module 'StoreTypes' {
    import { RouterState } from 'connected-react-router';
    import {
        Categories,
        Codes,
        DefaultStatus,
        ListItem,
        Login,
        MainCategory,
        MainNotice,
        MainSlide,
        CategoryItem,
        ProductDetail,
        Cart,
        MyInformationResponse,
        CategoryProduct,
        OrderProduct,
    } from 'CommonTypes';

    // App Store
    export interface AppState {
        loading: boolean;
        pageLoading: boolean;
        status: boolean;
        loginState: boolean;
        service_message: string;
        common: {
            codes: Codes;
            categories: Categories[];
        };
        loginUser: Login;
    }

    // Main Store
    export interface MainState {
        main_slide: MainSlide[];
        main_category: MainCategory[];
        main_notice: MainNotice[];
        main_best_item: ListItem[];
        main_new_item: ListItem[];
        // best_item: BestItem[];
        // hot_item: BestItem[];
        // categories: Categories;
    }

    export interface CategoryState {
        products: CategoryItem;
    }
    export interface ProductState {
        detail: ProductDetail;
        recommend: CategoryProduct[];
    }

    export interface CartState {
        list: Cart[];
    }
    export interface MyPageState {
        information: MyInformationResponse;
    }

    export interface OrderState {
        info: {
            name: string;
            zipcode: string;
            address1: string;
            address2: string;
            phone: string;
            email: string;
            message: string;
        };
        product: OrderProduct[];
    }

    // 인증 처리 Store
    export interface AuthsState {
        register: {
            getAuthCodeRequest: {
                status: DefaultStatus;
                result: {
                    phone_number: string;
                    auth_index: number | null;
                    auth_code: string;
                    message: string;
                };
            };
            authCodeConfirm: {
                status: DefaultStatus;
                result: {
                    phone_number: string;
                    auth_index: number | null;
                    message: string;
                };
            };
            tryRegister: {
                status: DefaultStatus;
                message: string;
                result: {
                    id: string;
                    uuid: string;
                    login_id: string;
                    name: string;
                    type: string;
                    level: string;
                    status: string;
                };
            };
        };
        login: {
            tryLogin: {
                status: DefaultStatus;
                message: string;
                result: {
                    access_token: string;
                    refresh_token: string;
                };
            };
        };
        logout: {
            tryLogout: {
                status: DefaultStatus;
                message: string;
            };
        };
    }

    // store 인터페이스.
    export interface RootState {
        router: RouterState;
        app: AppState;
        main: MainState;
        auths: AuthsState;
        category: CategoryState;
        product: ProductState;
        cart: CartState;
        my: MyPageState;
        order: OrderState;
    }
}
