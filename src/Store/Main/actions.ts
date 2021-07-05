import { deprecated } from 'typesafe-actions';
const { createStandardAction } = deprecated;

// main banner ation
export const GET_MAIN_BANNER_START = 'main/GET_MAIN_BANNER_START';
export const GET_MAIN_BANNER_SUCCESS = 'main/GET_MAIN_BANNER_SUCCESS';
export const GET_MAIN_BANNER_FAILURE = 'main/GET_MAIN_BANNER_FAILURE';

// 메인배너 불러오기.
export const getMainBannerAction = createStandardAction(GET_MAIN_BANNER_START)();
