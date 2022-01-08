import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

// CREATE_ORDER_PRODUCT order 상품 등록.
export const CREATE_ORDER_PRODUCT = 'order/CREATE_ORDER_PRODUCT';

export type OrderAction = ActionType<typeof actions>;
