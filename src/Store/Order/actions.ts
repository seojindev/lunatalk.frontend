import { CREATE_ORDER_PRODUCT } from '@Store/Order/types';
import { createAction } from 'typesafe-actions';
import { OrderState } from 'StoreTypes';

export const createOrderProductAction = createAction(
    CREATE_ORDER_PRODUCT,
    ({ orderProduct }: { orderProduct: OrderState['product'] }) => ({
        orderProduct,
    })
)();
