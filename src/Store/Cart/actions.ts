import { deprecated } from 'typesafe-actions';
import { GET_CART_LIST_START } from '@Store/Cart/types';
const { createStandardAction } = deprecated;

// 카트 리스트 불러오기.
export const getCartListAction = createStandardAction(GET_CART_LIST_START)();
