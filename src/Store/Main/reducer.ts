import { createReducer } from 'typesafe-actions';
import { SagaAction } from 'CommonTypes';
import produce from 'immer';
// import { ErrorMessage } from 'StoreTypes';
import { MainState } from 'StoreTypes';
import { GET_MAIN_HOTITEM_SUCCESS } from './actions';

import { GET_MAIN_BANNER_SUCCESS, GET_MAIN_BESTITEM_SUCCESS } from './actions';
import { Banner, BestItem } from 'MainTypes';

// 스토어 init.
const initialState: MainState = {
    banner: [],
    best_item: [],
    hot_item: [],
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
    [GET_MAIN_BESTITEM_SUCCESS]: (state: MainState, action: SagaAction<{ best_item: BestItem[] }>) => {
        return produce(state, draft => {
            draft.best_item = action.payload.best_item;
        });
    },
    [GET_MAIN_HOTITEM_SUCCESS]: (state: MainState, action: SagaAction<{ hot_item: BestItem[] }>) => {
        return produce(state, draft => {
            draft.hot_item = action.payload.hot_item;
        });
    },
});
export default AppSagaReducer;
