import { GET_MY_INFORMATION_START, GET_MY_ORDER_INFORMATION_START } from '@Store/MyInformation/types';
import { deprecated } from 'typesafe-actions';
const { createStandardAction } = deprecated;

// export const categoryListAction = createAction(GET_CATEGORY_LIST_START, ({ uuid }: { uuid: string }) => ({
//     uuid,
// }))();

export const getMyInformationAction = createStandardAction(GET_MY_INFORMATION_START)();

export const getMyOrderInfoAction = createStandardAction(GET_MY_ORDER_INFORMATION_START)();
