import { LoginStyle } from '@Src/Styles/LoginStyles';
import React from 'react';

export default function LoginForm() {
    //1. 아이디를 입력한다 -> 아이디를 입력해주세요
    //2. 비밀번호를 입력한다. ->비밀번호를 입력해주세요
    //3. 아이디저장?
    //4. 로그인한다.
    //5.카카오?
    // 1. 버튼에 이벤트를 준다
    // 2. 아이디와 비밀번호 입력값을 준다
    // 3. 아이디와 비밀번호 입력값을 useState 담기
    // 4. 로그인 성공

    const handleSubmitButton = e => {
        e.preventDefault();

        alert('로그인 성공했습니다');
    };

    // const handleChangeInputUsername = e => {
    //     setInputUserName(e.target.debug);
    // };

    return (
        <LoginStyle>
            <div className="login__column">
                <h2>로그인</h2>
                <div className="login__box">
                    <form id="customer_login">
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
                        <button className="btn_login" onClick={e => handleSubmitButton(e)}>
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
