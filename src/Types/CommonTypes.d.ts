declare module 'CommonTypes' {
    export type DefaultStatus = 'idle' | 'loading' | 'success' | 'failure';
    export type defaultYesNo = 'Y' | 'N';

    // 사가 기본 타입.
    export interface SagaAction<T> {
        type: SagaTypes;
        payload: T;
    }
}
