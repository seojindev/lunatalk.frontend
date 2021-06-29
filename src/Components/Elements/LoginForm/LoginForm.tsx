/* eslint-disable no-unused-vars */
import { LoginStyle } from '@Src/Styles/LoginStyles';
import React from 'react';

interface LoginFormProps {
    usernameHandleChanage: (e: React.ChangeEvent<HTMLInputElement>) => void;
    userpasswordHandleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSumbit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function LoginForm({ usernameHandleChanage, userpasswordHandleChange, onSumbit }: LoginFormProps) {
    return (
        <LoginStyle>
            <div className="login__column">
                <h2>로그인</h2>
                <div className="login__box">
                    <form id="customer_login" onSubmit={e => onSumbit(e)}>
                        <input
                            type="id"
                            id="customer_id"
                            placeholder="아이디"
                            onChange={e => usernameHandleChanage(e)}
                        />
                        <input
                            type="password"
                            id="customer_pw"
                            placeholder="비밀번호"
                            onChange={e => userpasswordHandleChange(e)}
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
