import { deprecated } from 'typesafe-actions';
import { GET_MAIN_SLIDE_START } from '@Store/Main/types';
const { createStandardAction } = deprecated;

// 메인배너 불러오기.
export const getMainSlideAction = createStandardAction(GET_MAIN_SLIDE_START)();

// // 메인 베스트 아이템 불러오기.
// export const getMainBestItemAction = createStandardAction(GET_MAIN_BESTITEM_START)();
//
// // 메인 핫 아이템 불러오기.
// export const getMainhotItemAction = createStandardAction(GET_MAIN_HOTITEM_START)();
//
// // 메인 카테고리 불러오기.
// export const getMainCategoriesAction = createStandardAction(GET_MAIN_CATEGORY_START)();
