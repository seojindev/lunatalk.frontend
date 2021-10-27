import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

// category List action
export const GET_CATEGORY_LIST_START = 'main/GET_CATEGORY_LIST_START';
export const GET_CATEGORY_LIST_SUCCESS = 'main/GET_CATEGORY_LIST_SUCCESS';
export const GET_CATEGORY_LIST_FAILURE = 'main/GET_CATEGORY_LIST_FAILURE';

export type MainAction = ActionType<typeof actions>;
