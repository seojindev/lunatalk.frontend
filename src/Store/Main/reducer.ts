import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import { SagaAction, MainSlide, MainCategory, MainNotice } from 'CommonTypes';
import { MainState } from 'StoreTypes';
import {
    GET_CATEGORY_FAILURE,
    GET_CATEGORY_SUCCESS,
    GET_MAIN_SLIDE_SUCCESS,
    GET_NOTICE_SUCCESS,
} from '@Store/Main/types';
// import { GET_MAIN_CATEGORY_SUCCESS, GET_MAIN_HOTITEM_SUCCESS } from './actions';
//
// import { GET_MAIN_BANNER_SUCCESS, GET_MAIN_BESTITEM_SUCCESS } from './actions';

// 스토어 init.
const initialState: MainState = {
    main_slide: [],
    main_category: [],
    main_notice: [],
    // best_item: [],
    // hot_item: [],
    // categories: {
    //     acc: {
    //         click_code: '',
    //         product_name: '',
    //         product_uuid: '',
    //         product_image: '',
    //         product_thumb_image: '',
    //     },
    //     bag: {
    //         click_code: '',
    //         product_name: '',
    //         product_uuid: '',
    //         product_image: '',
    //         product_thumb_image: '',
    //     },
    //     stationery: {
    //         click_code: '',
    //         product_name: '',
    //         product_uuid: '',
    //         product_image: '',
    //         product_thumb_image: '',
    //     },
    //     wallet: {
    //         click_code: '',
    //         product_name: '',
    //         product_uuid: '',
    //         product_image: '',
    //         product_thumb_image: '',
    //     },
    //     CUSTOM_ITEM: {
    //         click_code: '',
    //         product_name: '',
    //         product_uuid: '',
    //         product_image: '',
    //         product_thumb_image: '',
    //     },
    // },
};

export const MainSagaReducer = createReducer<MainState>(initialState, {
    // TODO: 로딩 어떻게 할지 고민
    // [GET_MAIN_BANNER_START]: (state: MainState) => {
    //     return produce(state, draft => {
    //         draft.loading = true;
    //     });
    // },
    [GET_MAIN_SLIDE_SUCCESS]: (state: MainState, action: SagaAction<{ main_slide: MainSlide[] }>) => {
        return produce(state, draft => {
            draft.main_slide = action.payload.main_slide;
        });
    },
    [GET_CATEGORY_SUCCESS]: (state: MainState, action: SagaAction<{ main_category: MainCategory[] }>) => {
        return produce(state, draft => {
            draft.main_category = action.payload.main_category;
        });
    },
    [GET_CATEGORY_FAILURE]: (state: MainState, action: SagaAction<{ main_category: MainCategory[] }>) => {
        return produce(state, draft => {
            draft.main_category = action.payload.main_category;
        });
    },
    [GET_NOTICE_SUCCESS]: (state: MainState, action: SagaAction<{ main_notice: MainNotice[] }>) => {
        return produce(state, draft => {
            draft.main_notice = action.payload.main_notice;
        });
    },
    // [GET_MAIN_BESTITEM_SUCCESS]: (state: MainState, action: SagaAction<{ best_item: BestItem[] }>) => {
    //     return produce(state, draft => {
    //         draft.best_item = action.payload.best_item;
    //     });
    // },
    // [GET_MAIN_HOTITEM_SUCCESS]: (state: MainState, action: SagaAction<{ hot_item: BestItem[] }>) => {
    //     return produce(state, draft => {
    //         draft.hot_item = action.payload.hot_item;
    //     });
    // },
    // [GET_MAIN_CATEGORY_SUCCESS]: (state: MainState, action: SagaAction<{ categories: Categories }>) => {
    //     return produce(state, draft => {
    //         draft.categories = action.payload.categories;
    //     });
    // },
});
export default MainSagaReducer;
