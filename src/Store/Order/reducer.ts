import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import { OrderState } from 'StoreTypes';
import { OrderMyInfoResponse, SagaAction } from 'CommonTypes';
import { CREATE_ORDER_PRODUCT, GET_ORDER_MY_INFO_SUCCESS } from '@Store/Order/types';

// 스토어 init.
const initialState: OrderState = {
    info: {
        name: '',
        zipcode: '',
        address1: '',
        address2: '',
        phone: {
            step1: '',
            step2: '',
            step3: '',
        },
        email: {
            full: '',
            gubun1: '',
            gubun2: '',
        },
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
    [GET_ORDER_MY_INFO_SUCCESS]: (state: OrderState, action: SagaAction<{ myInfo: OrderMyInfoResponse }>) => {
        return produce(state, draft => {
            draft.info.name = action.payload.myInfo.name;
            draft.info.zipcode = action.payload.myInfo.address.zipcode;
            draft.info.address1 = action.payload.myInfo.address.step1;
            draft.info.address2 = action.payload.myInfo.address.step2;
            draft.info.phone.step1 = action.payload.myInfo.phone_number.step1;
            draft.info.phone.step2 = action.payload.myInfo.phone_number.step2;
            draft.info.phone.step3 = action.payload.myInfo.phone_number.step3;
            draft.info.email.full = action.payload.myInfo.email.full_email;
            draft.info.email.gubun1 = action.payload.myInfo.email.gubun1.step1;
            draft.info.email.gubun2 = action.payload.myInfo.email.gubun1.step2;
        });
    },
});
export default OrderSagaReducer;
