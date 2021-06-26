import { LoginStyle } from '@Src/Styles/LoginStyles';
import React, { useState } from 'react';
import { login } from '@API';
import { useHistory } from 'react-router-dom';

export default function LoginForm() {
    const [inputUserName, setInputUserName] = useState('');
    const [inputUserPassWord, setInputUserPassWord] = useState('');
    const history = useHistory();

    const handleSubmitButton = async (e: any) => {
        e.preventDefault();

        // if (inputUserName == '') {
        //     alert('아이디를 입력해주세요');
        //     return;
        // }
        // if (inputUserPassWord == '') {
        //     alert('비밀번호를 입력해주세요');
        //     return;
        // }

        // alert('로그인 성공했습니다');

        let response = await login({ login_id: inputUserName, login_password: inputUserPassWord });
        console.debug(response);

        if (response.status === false) {
            alert(response.message);
            return;
        } else {
            // TODO: 로그인처리 정해지면 추가하기
            history.push('/');
        }
    };

    const handleChangeInputUsername = (e: any) => {
        setInputUserName(e.target.value);
        // console.debug(inputUserName);
    };

    const handleChangeInputPassword = (e: any) => {
        setInputUserPassWord(e.target.value);
    };

    return (
        <LoginStyle>
            <div className="login__column">
                <h2>로그인</h2>
                <div className="login__box">
                    <form id="customer_login" onSubmit={e => handleSubmitButton(e)}>
                        <input
                            type="id"
                            id="customer_id"
                            placeholder="아이디"
                            onChange={e => handleChangeInputUsername(e)}
                        />
                        <input
                            type="password"
                            id="customer_pw"
                            placeholder="비밀번호"
                            onChange={e => handleChangeInputPassword(e)}
                        />
                        <button className="btn_login" type="submit">
                            로그인
                        </button>
                        <div className="idpassword__help">
                            <label>
                                <input type="checkbox" name="saved_id" /> 아이디저장
                            </label>
                            <p className="forget">아이디 / 비밀번호 찾기 &gt; </p>
                        </div>
                        <p className="hr__login">
                            <span>또는</span>
                        </p>
                        <div className="snsLogin">
                            <button className="btn_kakao_login">카카오계정으로 가입</button>
                        </div>
                    </form>
                </div>
            </div>
        </LoginStyle>
    );
}
