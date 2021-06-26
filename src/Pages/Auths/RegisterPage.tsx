import { RegisterForm } from '@Src/Components/Elements/RegisterForm';
import { MainLayout } from '@Src/Components/Layouts/MainLayouts';
import { useRegister } from '@Src/Hooks';
import React from 'react';

export default function RegisterPage() {
    const { onChange, onSubmit, registerData, checkboxOnChange, registerCheckbox } = useRegister();
    return (
        <MainLayout>
            <RegisterForm
                onChange={onChange}
                onSubmit={onSubmit}
                data={registerData}
                checkboxOnChange={checkboxOnChange}
                registerCheckbox={registerCheckbox}
            />
        </MainLayout>
    );
}
