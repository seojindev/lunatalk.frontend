import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

// PRODUCT_DETAIL
export const GET_MY_INFORMATION_START = 'my/GET_MY_INFORMATION_START';
export const GET_MY_INFORMATION_SUCCESS = 'my/GET_MY_INFORMATION_SUCCESS';
export const GET_MY_INFORMATION_FAILURE = 'my/GET_MY_INFORMATION_FAILURE';

export type MyAction = ActionType<typeof actions>;
