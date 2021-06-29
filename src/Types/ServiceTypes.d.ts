declare module 'ServiceTypes' {
    // 기본 api 리턴 인테페이스
    export interface ServiceResponse<T> {
        status: boolean;
        message: string;
        payload: T;
    }

    // 기본 데이터들.
    export interface AppBase {
        codes: Codes[];
    }

    export interface Login {
        access_token: string;
        refresh_token: string;
    }

    export interface Register {
        id: number;
        user_uuid: string;
        login_id: string;
        name: string;
        user_type: string;
        user_level: string;
        user_state: string;
    }

    export interface PhoneAuth {
        phone_number: string;
        auth_index: number;
        auth_code: string;
    }
}
