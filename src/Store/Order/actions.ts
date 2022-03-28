import { CREATE_ORDER_PRODUCT, GET_ORDER_MY_INFO_START } from '@Store/Order/types';
import { createAction } from 'typesafe-actions';
import { OrderState } from 'StoreTypes';
import { deprecated } from 'typesafe-actions';
const { createStandardAction } = deprecated;

export const createOrderProductAction = createAction(
    CREATE_ORDER_PRODUCT,
    ({ orderProduct }: { orderProduct: OrderState['product'] }) => ({
        orderProduct,
    })
)();

export const getOrderMyInfoAction = createStandardAction(GET_ORDER_MY_INFO_START)();
