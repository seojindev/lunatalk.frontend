declare module 'StoreTypes' {
    import { RouterState } from 'connected-react-router';

    export interface ErrorMessage {
        message: string;
    }

    export interface AppState {
        loading: boolean;
    }

    export interface RootState {
        // TODO: 왜 에러가 나는지 못참음 찾을때까지 일단 주석. -psmever
        // router: RouterState;
        app: AppState;
    }
}
