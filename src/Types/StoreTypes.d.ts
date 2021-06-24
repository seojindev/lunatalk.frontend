declare module 'StoreTypes' {
    import { RouterState } from 'connected-react-router';

    export interface ErrorMessage {
        message: string;
    }

    export interface AppState {
        loading: boolean;
    }

    export interface RootState {
        router: RouterState;
        app: AppState;
    }
}
