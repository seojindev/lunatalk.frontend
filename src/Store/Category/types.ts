import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

// category List action
export const GET_CATEGORY_LIST_START = 'main/GET_CATEGORY_LIST_START';
export const GET_CATEGORY_LIST_SUCCESS = 'main/GET_CATEGORY_LIST_SUCCESS';
export const GET_CATEGORY_LIST_FAILURE = 'main/GET_CATEGORY_LIST_FAILURE';

// search List action
export const GET_SEARCH_LIST_START = 'main/GET_SEARCH_LIST_START';
export const GET_SEARCH_LIST_SUCCESS = 'main/GET_SEARCH_LIST_SUCCESS';
export const GET_SEARCH_LIST_FAILURE = 'main/GET_SEARCH_LIST_FAILURE';
export type CategoryAction = ActionType<typeof actions>;
