import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import { CartState } from 'StoreTypes';
import { Cart, SagaAction } from 'CommonTypes';
import { GET_CART_LIST_FAILURE, GET_CART_LIST_SUCCESS } from '@Store/Cart/types';

// 스토어 init.
const initialState: CartState = {
    list: [],
};

export const MainSagaReducer = createReducer<CartState>(initialState, {
    // TODO: 로딩 어떻게 할지 고민
    // [GET_MAIN_BANNER_START]: (state: MainState) => {
    //     return produce(state, draft => {
    //         draft.loading = true;
    //     });
    // },
    [GET_CART_LIST_SUCCESS]: (state: CartState, action: SagaAction<{ cart: Cart[] }>) => {
        return produce(state, draft => {
            draft.list = action.payload.cart;
        });
    },
    [GET_CART_LIST_FAILURE]: (state: CartState) => {
        return produce(state, draft => {
            draft.list = [];
        });
    },
});
export default MainSagaReducer;
