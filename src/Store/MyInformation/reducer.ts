import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import { SagaAction, MyInformationResponse } from 'CommonTypes';
import { GET_MY_INFORMATION_SUCCESS } from '@Store/MyInformation/types';
import { MyPageState } from 'StoreTypes';

// 스토어 init.
const initialState: MyPageState = {
    information: {
        uuid: '',
        login_id: '',
        client: {
            code_id: '',
            code_name: '',
        },
        type: {
            code_id: '',
            code_name: '',
        },
        level: {
            code_id: '',
            code_name: '',
        },
        status: {
            code_id: '',
            code_name: '',
        },
        name: '',
        address: {
            zipcode: '',
            step1: '',
            step2: '',
        },
        email: {
            full_email: '',
            gubun1: {
                step1: '',
                step2: '',
            },
            gubun2: {
                step1: '',
                step2: '',
            },
        },
        phone_number: {
            step1: '',
            step2: '',
            step3: '',
        },
    },
};

export const MyInformationSagaReducer = createReducer<MyPageState>(initialState, {
    // TODO: 로딩 어떻게 할지 고민
    // [GET_MAIN_BANNER_START]: (state: MainState) => {
    //     return produce(state, draft => {
    //         draft.loading = true;
    //     });
    // },
    [GET_MY_INFORMATION_SUCCESS]: (
        state: MyPageState,
        action: SagaAction<{ myInformation: MyInformationResponse }>
    ) => {
        return produce(state, draft => {
            draft.information = action.payload.myInformation;
        });
    },
});
export default MyInformationSagaReducer;
