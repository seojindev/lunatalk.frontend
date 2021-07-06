import { deprecated } from 'typesafe-actions';
const { createStandardAction } = deprecated;

// main banner action
export const GET_MAIN_BANNER_START = 'main/GET_MAIN_BANNER_START';
export const GET_MAIN_BANNER_SUCCESS = 'main/GET_MAIN_BANNER_SUCCESS';
export const GET_MAIN_BANNER_FAILURE = 'main/GET_MAIN_BANNER_FAILURE';

// main bestItem action
export const GET_MAIN_BESTITEM_START = 'main/GET_MAIN_BESTITEM_START';
export const GET_MAIN_BESTITEM_SUCCESS = 'main/GET_MAIN_BESTITEM_SUCCESS';
export const GET_MAIN_BESTITEM_FAILURE = 'main/GET_MAIN_BESTITEM_FAILURE';

// main hotItem action
export const GET_MAIN_HOTITEM_START = 'main/GET_MAIN_HOTITEM_START';
export const GET_MAIN_HOTITEM_SUCCESS = 'main/GET_MAIN_HOTITEM_SUCCESS';
export const GET_MAIN_HOTITEM_FAILURE = 'main/GET_MAIN_HOTITEM_FAILURE';

// 메인배너 불러오기.
export const getMainBannerAction = createStandardAction(GET_MAIN_BANNER_START)();
// 메인 베스트 아이템 불러오기.
export const getMainBestItemAction = createStandardAction(GET_MAIN_BESTITEM_START)();

// 메인 핫 아이템 불러오기.
export const getMainhotItemAction = createStandardAction(GET_MAIN_HOTITEM_START)();
