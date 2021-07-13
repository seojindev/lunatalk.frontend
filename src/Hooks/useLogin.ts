import { login } from '@Src/Modules/API';
import { saveLoginToken } from '@Src/Utils/Helper';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function useLogin() {
    const [inputUserName, setInputUserName] = useState<string>('');
    const [inputUserPassWord, setInputUserPassWord] = useState<string>('');
    const history = useHistory();

    const handleSubmitButton = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const response = await login({ login_id: inputUserName, login_password: inputUserPassWord });
        console.debug(response);

        if (response.status === false) {
            alert(response.message);
            return;
        } else {
            // TODO: 로그인처리 정해지면 추가하기
            // FIXME: Helper.ts saveLoginToken 함수 사용 2021.06.29
            saveLoginToken({
                access_token: response.payload.access_token,
                refresh_token: response.payload.refresh_token,
            });
            history.push('/');
        }
    };

    const handleChangeInputUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputUserName(e.target.value);
        // console.debug(inputUserName);
    };

    const handleChangeInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputUserPassWord(e.target.value);
    };

    return {
        handleSubmitButton,
        handleChangeInputUsername,
        handleChangeInputPassword,
        inputUserName,
        inputUserPassWord,
    };
}
