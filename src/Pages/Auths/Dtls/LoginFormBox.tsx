import React from 'react';

export default function LoginFormBox() {
    return (
        <div className="login-form-container">
            <div className="login-register-form">
                <form action="#">
                    <input type="text" name="user-name" placeholder="아이디" />
                    <input type="password" name="user-password" placeholder="비밀번호" />
                    <div className="button-box">
                        <div className="login-toggle-btn">
                            <input type="checkbox" />
                            <label>아이디 저장</label>
                            <a href="#">아이디/비밀번호 찾기</a>
                        </div>
                        <button type="submit">
                            <span>로그인</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
