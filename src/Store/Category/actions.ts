import { createAction } from 'typesafe-actions';
import { GET_CATEGORY_LIST_START } from '@Store/Category/types';

// export const categoryListAction = createAction(GET_CATEGORY_LIST_START, ({ uuid }: { uuid: string }) => ({
//     uuid,
// }))();

export const categoryListAction = createAction(
    GET_CATEGORY_LIST_START,
    ({ categoryUuid }: { categoryUuid: string }) => ({
        categoryUuid,
    })
)();
