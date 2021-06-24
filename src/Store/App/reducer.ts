import { createReducer } from 'typesafe-actions';
// import { SagaAction } from 'CommonTypes';
import produce from 'immer';
// import { ErrorMessage } from 'StoreTypes';
import { AppState } from 'StoreTypes';
import {} from './actions';

import { START_LOADING } from './actions';

// 스토어 init.
const initialState: AppState = {
    loading: false,
};

export const AppSagaReducer = createReducer<AppState>(initialState, {
    [START_LOADING]: (state: AppState) => {
        return produce(state, draft => {
            draft.loading = true;
        });
    },
});
export default AppSagaReducer;
