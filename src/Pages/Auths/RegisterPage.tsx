import { RegisterForm } from '@Src/Components/Elements/RegisterForm';
import { MainLayout } from '@Src/Components/Layouts/MainLayouts';
import { useRegister } from '@Src/Hooks';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'StoreTypes';

export default function RegisterPage() {
    const {
        onChange,
        onSubmit,
        registerData,
        checkboxOnChange,
        registerCheckbox,
        resetData,
        onPhoneAuth,
        onPhoneAuthConfirm,
    } = useRegister();
    const { E01 } = useSelector((store: RootState) => ({
        E01: store.app.common.codes.code_group.E01,
    }));

    // 페이지 이동시 초기화.
    useEffect(() => {
        return () => {
            resetData();
        };
    }, []);
    return (
        <MainLayout>
            <RegisterForm
                onChange={onChange}
                onSubmit={onSubmit}
                onPhoneAuth={onPhoneAuth}
                onPhoneAuthConfirm={onPhoneAuthConfirm}
                data={registerData}
                checkboxOnChange={checkboxOnChange}
                registerCheckbox={registerCheckbox}
                emailAddress={E01}
            />
        </MainLayout>
    );
}
