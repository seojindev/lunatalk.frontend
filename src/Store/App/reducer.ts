import { createReducer } from 'typesafe-actions';
import { SagaAction, Codes } from 'CommonTypes';
import produce from 'immer';
// import { ErrorMessage } from 'StoreTypes';
import { AppState } from 'StoreTypes';
import {} from './actions';

import { START_APP_LOADING, END_APP_LOADING, APP_INIT_END, COMMON_DATA, APP_ERROR } from './actions';

// 스토어 init.
const initialState: AppState = {
    loading: false,
    status: false,
    service_message: '',
    common: {
        codes: [],
    },
};

export const AppSagaReducer = createReducer<AppState>(initialState, {
    [START_APP_LOADING]: (state: AppState) => {
        return produce(state, draft => {
            draft.loading = true;
        });
    },
    [END_APP_LOADING]: (state: AppState) => {
        return produce(state, draft => {
            draft.loading = false;
        });
    },
    [COMMON_DATA]: (state: AppState, action: SagaAction<{ codes: Codes[] }>) => {
        return produce(state, draft => {
            draft.common.codes = action.payload.codes;
        });
    },
    [APP_INIT_END]: (state: AppState) => {
        return produce(state, draft => {
            draft.status = true;
        });
    },
    [APP_ERROR]: (state: AppState, action: SagaAction<{ message: string }>) => {
        return produce(state, draft => {
            draft.service_message = action.payload.message;
        });
    },
});
export default AppSagaReducer;
