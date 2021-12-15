import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import { ProductState } from 'StoreTypes';
import { SagaAction, ProductDetail, CategoryProduct } from 'CommonTypes';
import { GET_PRODUCT_DETAIL_SUCCESS, GET_PRODUCT_RECOMMEND_SUCCESS } from '@Store/Product/types';

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
        reviews: [],
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
    recommend: [],
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
    [GET_PRODUCT_RECOMMEND_SUCCESS]: (state: ProductState, action: SagaAction<{ recommend: CategoryProduct[] }>) => {
        return produce(state, draft => {
            draft.recommend = action.payload.recommend;
        });
    },
});
export default ProductDetailSagaReducer;
