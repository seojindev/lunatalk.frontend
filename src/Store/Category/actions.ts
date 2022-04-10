import { createAction } from 'typesafe-actions';
import { GET_CATEGORY_LIST_START, GET_SEARCH_LIST_START } from '@Store/Category/types';

// export const categoryListAction = createAction(GET_CATEGORY_LIST_START, ({ uuid }: { uuid: string }) => ({
//     uuid,
// }))();

export const categoryListAction = createAction(
    GET_CATEGORY_LIST_START,
    ({ categoryUuid, orderNumber }: { categoryUuid: string; orderNumber: string }) => ({
        categoryUuid,
        orderNumber,
    })
)();

export const searchListAction = createAction(GET_SEARCH_LIST_START, ({ name }: { name: string }) => ({ name }))();
