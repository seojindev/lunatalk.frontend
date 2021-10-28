import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

// PRODUCT_DETAIL
export const GET_PRODUCT_DETAIL_START = 'main/GET_PRODUCT_DETAIL_START';
export const GET_PRODUCT_DETAIL_SUCCESS = 'main/GET_PRODUCT_DETAIL_SUCCESS';
export const GET_PRODUCT_DETAIL_FAILURE = 'main/GET_PRODUCT_DETAIL_FAILURE';

export type MainAction = ActionType<typeof actions>;
