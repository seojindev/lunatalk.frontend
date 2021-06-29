import LoginForm from '@Src/Components/Elements/LoginForm/LoginForm';
import { MainLayout } from '@Src/Components/Layouts/MainLayouts';
import useLogin from '@Src/Hooks/useLogin';
import React from 'react';

export default function LoginPage() {
    const { handleSubmitButton, handleChangeInputUsername, handleChangeInputPassword } = useLogin();
    return (
        <MainLayout>
            <LoginForm
                usernameHandleChanage={handleChangeInputUsername}
                userpasswordHandleChange={handleChangeInputPassword}
                onSumbit={handleSubmitButton}
            />
        </MainLayout>
    );
}
