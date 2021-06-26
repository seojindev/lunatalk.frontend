declare module 'RegisterTypes' {
    export interface RegisterData {
        auth_id: string;
        user_id: string;
        user_password: string;
        user_password_confirm: string;
        user_nickname: string;
        user_email: string;
        user_email_select: string;
    }
    export interface CheckboxData {
        checkbox1: boolean;
        checkbox2: boolean;
        checkbox3: boolean;
    }
}
