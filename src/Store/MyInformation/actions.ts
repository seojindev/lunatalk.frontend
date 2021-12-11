import { GET_MY_INFORMATION_START } from '@Store/MyInformation/types';
import { deprecated } from 'typesafe-actions';
const { createStandardAction } = deprecated;

// export const categoryListAction = createAction(GET_CATEGORY_LIST_START, ({ uuid }: { uuid: string }) => ({
//     uuid,
// }))();

export const getMyInformationAction = createStandardAction(GET_MY_INFORMATION_START)();
