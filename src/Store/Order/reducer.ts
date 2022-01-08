import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import { OrderState } from 'StoreTypes';
import { SagaAction } from 'CommonTypes';
import { CREATE_ORDER_PRODUCT } from '@Store/Order/types';

// 스토어 init.
const initialState: OrderState = {
    info: {
        name: '',
        zipcode: '',
        address1: '',
        address2: '',
        phone: '',
        email: '',
        message: '',
    },
    product: [],
};

export const OrderSagaReducer = createReducer<OrderState>(initialState, {
    // TODO: 로딩 어떻게 할지 고민
    // [GET_MAIN_BANNER_START]: (state: MainState) => {
    //     return produce(state, draft => {
    //         draft.loading = true;
    //     });
    // },
    [CREATE_ORDER_PRODUCT]: (state: OrderState, action: SagaAction<{ orderProduct: OrderState['product'] }>) => {
        return produce(state, draft => {
            draft.product = action.payload.orderProduct;
        });
    },
});
export default OrderSagaReducer;
