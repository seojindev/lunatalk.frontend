import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

// cart list action
export const GET_CART_LIST_START = 'cart/GET_CART_LIST_START';
export const GET_CART_LIST_SUCCESS = 'cart/GET_CART_LIST_SUCCESS';
export const GET_CART_LIST_FAILURE = 'cart/GET_CART_LIST_FAILURE';

export type CartAction = ActionType<typeof actions>;
