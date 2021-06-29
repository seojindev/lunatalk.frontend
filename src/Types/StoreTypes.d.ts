declare module 'StoreTypes' {
    import { RouterState } from 'connected-react-router';
    import { Codes } from 'CommonTypes';
    import { Login } from 'ServiceTypes';

    // App Store
    export interface AppState {
        loading: boolean;
        status: boolean;
        loginState: boolean;
        service_message: string;
        common: {
            codes: Codes;
        };
        loginUser: Login;
    }

    // store 인터페이스.
    export interface RootState {
        // TODO: 왜 에러가 나는지 못참음 찾을때까지 일단 주석. -psmever
        // router: RouterState;
        app: AppState;
    }
}
