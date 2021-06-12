declare module 'StoreTypes' {
    import { RouterState } from 'connected-react-router';

    export interface ErrorMessage {
        message: string;
    }

    export interface RootState {
        router: RouterState;

    }
}
