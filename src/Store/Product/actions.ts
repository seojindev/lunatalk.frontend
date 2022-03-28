import { createAction } from 'typesafe-actions';
import { GET_PRODUCT_DETAIL_START, GET_PRODUCT_RECOMMEND_START } from '@Store/Product/types';

// export const categoryListAction = createAction(GET_CATEGORY_LIST_START, ({ uuid }: { uuid: string }) => ({
//     uuid,
// }))();

export const productDetailAction = createAction(
    GET_PRODUCT_DETAIL_START,
    ({ productUuid }: { productUuid: string }) => ({
        productUuid,
    })
)();

export const productRecommendAction = createAction(
    GET_PRODUCT_RECOMMEND_START,
    ({ productUuid }: { productUuid: string }) => ({
        productUuid,
    })
)();
