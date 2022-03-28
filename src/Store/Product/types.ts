import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

// PRODUCT_DETAIL
export const GET_PRODUCT_DETAIL_START = 'product/GET_PRODUCT_DETAIL_START';
export const GET_PRODUCT_DETAIL_SUCCESS = 'product/GET_PRODUCT_DETAIL_SUCCESS';
export const GET_PRODUCT_DETAIL_FAILURE = 'product/GET_PRODUCT_DETAIL_FAILURE';

// PRODUCT_DETAIL
export const GET_PRODUCT_RECOMMEND_START = 'product/GET_PRODUCT_RECOMMEND_START';
export const GET_PRODUCT_RECOMMEND_SUCCESS = 'product/GET_PRODUCT_RECOMMEND_SUCCESS';
export const GET_PRODUCT_RECOMMEND_FAILURE = 'product/GET_PRODUCT_RECOMMEND_FAILURE';

export type ProductAction = ActionType<typeof actions>;
