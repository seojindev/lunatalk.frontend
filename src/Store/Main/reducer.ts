import { createReducer } from 'typesafe-actions';
import { SagaAction } from 'CommonTypes';
import produce from 'immer';
// import { ErrorMessage } from 'StoreTypes';
import { MainState } from 'StoreTypes';
import {} from './actions';

import { GET_MAIN_BANNER_SUCCESS } from './actions';
import { Banner } from 'MainTypes';

// 스토어 init.
const initialState: MainState = {
    banner: [],
};

export const AppSagaReducer = createReducer<MainState>(initialState, {
    // TODO: 로딩 어떻게 할지 고민
    // [GET_MAIN_BANNER_START]: (state: MainState) => {
    //     return produce(state, draft => {
    //         draft.loading = true;
    //     });
    // },
    [GET_MAIN_BANNER_SUCCESS]: (state: MainState, action: SagaAction<{ banner: Banner[] }>) => {
        return produce(state, draft => {
            draft.banner = action.payload.banner;
        });
    },
});
export default AppSagaReducer;
