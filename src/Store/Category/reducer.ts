import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import { GET_CATEGORY_LIST_SUCCESS, GET_SEARCH_LIST_SUCCESS } from '@Store/Category/types';
import { CategoryItem, CategoryProduct, SagaAction } from 'CommonTypes';
import { CategoryState } from 'StoreTypes';

// 스토어 init.
const initialState: CategoryState = {
    products: {
        uuid: '',
        products: [],
    },
};

export const CategorySagaReducer = createReducer<CategoryState>(initialState, {
    // TODO: 로딩 어떻게 할지 고민
    // [GET_MAIN_BANNER_START]: (state: MainState) => {
    //     return produce(state, draft => {
    //         draft.loading = true;
    //     });
    // },
    [GET_CATEGORY_LIST_SUCCESS]: (state: CategoryState, action: SagaAction<{ category: CategoryItem }>) => {
        return produce(state, draft => {
            draft.products = action.payload.category;
        });
    },
    [GET_SEARCH_LIST_SUCCESS]: (state: CategoryState, action: SagaAction<{ searchProducts: CategoryProduct[] }>) => {
        return produce(state, draft => {
            draft.products.products = action.payload.searchProducts;
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
export default CategorySagaReducer;
