import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

// CREATE_ORDER_PRODUCT order 상품 등록.
export const CREATE_ORDER_PRODUCT = 'order/CREATE_ORDER_PRODUCT';

// 오더 내정보 불러오기.
export const GET_ORDER_MY_INFO_START = 'order/GET_ORDER_MY_INFO_START';
export const GET_ORDER_MY_INFO_SUCCESS = 'order/GET_ORDER_MY_INFO_SUCCESS';
export const GET_ORDER_MY_INFO_FAILURE = 'order/GET_ORDER_MY_INFO_FAILURE';

export type OrderAction = ActionType<typeof actions>;
