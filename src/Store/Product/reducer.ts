import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import { ProductState } from 'StoreTypes';
import { SagaAction, ProductDetail } from 'CommonTypes';
import { GET_PRODUCT_DETAIL_SUCCESS } from '@Store/Product/types';

// 스토어 init.
const initialState: ProductState = {
    detail: {
        uuid: '',
        category: {
            uuid: '',
            name: '',
        },
        name: '',
        barcode: '',
        original_price: {
            number: 0,
            string: '',
        },
        price: {
            number: 0,
            string: '',
        },
        quantity: {
            number: 0,
            string: '',
        },
        options: {
            color: [
                {
                    id: 0,
                    name: '',
                },
            ],
            wireless: [
                {
                    id: 0,
                    name: '',
                },
            ],
        },
        image: {
            rep: [
                {
                    id: 0,
                    file_name: '',
                    url: '',
                },
            ],
            detail: [
                {
                    id: 0,
                    file_name: '',
                    url: '',
                },
            ],
        },
        sale: '',
        active: '',
        created_at: {
            type1: '',
            type2: '',
            type3: '',
        },
    },
};

export const ProductDetailSagaReducer = createReducer<ProductState>(initialState, {
    // TODO: 로딩 어떻게 할지 고민
    // [GET_MAIN_BANNER_START]: (state: MainState) => {
    //     return produce(state, draft => {
    //         draft.loading = true;
    //     });
    // },
    [GET_PRODUCT_DETAIL_SUCCESS]: (state: ProductState, action: SagaAction<{ productDetail: ProductDetail }>) => {
        return produce(state, draft => {
            draft.detail = action.payload.productDetail;
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
export default ProductDetailSagaReducer;
