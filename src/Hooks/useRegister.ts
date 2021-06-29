import { phoneAuth, phoneAuthConfirm, register } from '@Src/Modules/API';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CheckboxData, RegisterData } from 'RegisterTypes';

export default function useRegister() {
    const history = useHistory();
    const [registerData, setRegisterData] = useState<RegisterData>({
        auth_id: '',
        user_id: '',
        user_password: '',
        user_password_confirm: '',
        user_nickname: '',
        user_email: '',
        user_email_select: '',
        first: '',
        second: '',
        third: '',
        auth_code: '',
        index: null,
        auth_confirm: false,
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
        if (registerCheckbox.checkbox1 && registerCheckbox.checkbox2 && registerCheckbox.checkbox3) {
            const response = await register({
                auth_id: registerData.index,
                user_id: registerData.user_id,
                user_password: registerData.user_password,
                user_password_confirm: registerData.user_password_confirm,
                user_nickname: registerData.user_nickname,
                user_email: registerData.user_email + '@' + registerData.user_email_select,
            });
            if (response.status === true) {
                history.push('/auth/login');
            }
        } else {
            alert('이용약관을 동의해주세요.');
            return;
        }
    };

    const onPhoneAuth = async () => {
        const response = await phoneAuth({
            phone_number: registerData.first + registerData.second + registerData.third,
        });
        if (response.status === true) {
            alert('인증번호가 전송되었습니다.');
            setRegisterData({
                ...registerData,
                index: response.payload.auth_index,
            });
        }
    };

    const onPhoneAuthConfirm = async () => {
        if (!registerData.index) {
            alert('휴대폰인증을 진행하세요.');
            return;
        }
        const response = await phoneAuthConfirm({
            auth_code: registerData.auth_code,
            auth_index: registerData.index,
        });
        if (response.status === true) {
            alert('휴대폰인증이 완료 되었습니다.');
            setRegisterData({
                ...registerData,
                auth_confirm: response.status,
            });
        }
    };

    const resetData = () => {
        setRegisterData({
            auth_id: '',
            user_id: '',
            user_password: '',
            user_password_confirm: '',
            user_nickname: '',
            user_email: '',
            user_email_select: '',
            first: '',
            second: '',
            third: '',
            auth_code: '',
            auth_confirm: false,
            index: null,
        });
        setRegisterCheckbox({
            checkbox1: false,
            checkbox2: false,
            checkbox3: false,
        });
    };

    return {
        onChange,
        onSubmit,
        registerData,
        checkboxOnChange,
        registerCheckbox,
        resetData,
        onPhoneAuth,
        onPhoneAuthConfirm,
    };
}
