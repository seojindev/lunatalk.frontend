import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

// main slide action
export const GET_MAIN_SLIDE_START = 'main/GET_MAIN_SLIDE_START';
export const GET_MAIN_SLIDE_SUCCESS = 'main/GET_MAIN_SLIDE_SUCCESS';
export const GET_MAIN_SLIDE_FAILURE = 'main/GET_MAIN_SLIDE_FAILURE';

// main category action
export const GET_CATEGORY_START = 'main/GET_CATEGORY_START';
export const GET_CATEGORY_SUCCESS = 'main/GET_CATEGORY_SUCCESS';
export const GET_CATEGORY_FAILURE = 'main/GET_CATEGORY_FAILURE';

export type MainAction = ActionType<typeof actions>;
