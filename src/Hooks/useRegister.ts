import { register } from '@Src/Modules/API';
import React, { useState } from 'react';
import { CheckboxData, RegisterData } from 'RegisterTypes';

export default function useRegister() {
    const [registerData, setRegisterData] = useState<RegisterData>({
        auth_id: '4',
        user_id: '',
        user_password: '',
        user_password_confirm: '',
        user_nickname: '',
        user_email: '',
        user_email_select: '',
    });
    const [registerCheckbox, setRegisterCheckbox] = useState<CheckboxData>({
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
    });

    const checkboxOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // console.debug(e);
        const { name, checked } = e.target;
        if (name === 'All') {
            setRegisterCheckbox({
                checkbox1: checked,
                checkbox2: checked,
                checkbox3: checked,
            });
        } else {
            setRegisterCheckbox({
                ...registerCheckbox,
                [name]: checked,
            });
        }
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { value, name } = e.target;
        setRegisterData({
            ...registerData,
            [name]: value,
        });
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await register({
            auth_id: '5',
            user_id: registerData.user_id,
            user_password: registerData.user_password,
            user_password_confirm: registerData.user_password_confirm,
            user_nickname: registerData.user_nickname,
            user_email: registerData.user_email + registerData.user_email_select,
        });
        console.debug(response);
    };

    return {
        onChange,
        onSubmit,
        registerData,
        checkboxOnChange,
        registerCheckbox,
    };
}
