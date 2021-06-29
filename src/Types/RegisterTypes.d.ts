declare module 'RegisterTypes' {
    export interface RegisterData {
        auth_id: string;
        user_id: string;
        user_password: string;
        user_password_confirm: string;
        user_nickname: string;
        user_email: string;
        user_email_select: string;
        first: string;
        second: string;
        third: string;
        auth_code: string;
        auth_confirm: boolean;
        index: any;
    }
    export interface CheckboxData {
        checkbox1: boolean;
        checkbox2: boolean;
        checkbox3: boolean;
    }
}
