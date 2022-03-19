import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function FindPasswordFormBox() {
    const [findPasswordData, setFindPasswordData] = useState<{ loginId: string; email: string }>({
        loginId: '',
        email: '',
    });

    const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFindPasswordData({ ...findPasswordData, [name]: value });
    };
    return (
        <div className="login-form-container">
            <div className="login-register-form">
                <form onSubmit={() => console.log('test')}>
                    <input
                        type="text"
                        name="loginId"
                        placeholder="아이디를 입력해주세요."
                        value={findPasswordData.loginId}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeInputValue(e)}
                    />
                    <input
                        type="text"
                        name="loginId"
                        placeholder="이메일를 입력해주세요."
                        value={findPasswordData.email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeInputValue(e)}
                    />
                    <div className="button-box">
                        <div className="login-toggle-btn">
                            <Link to={'/auths/register'} style={{ marginLeft: '10px' }}>
                                회원가입
                            </Link>
                            <Link to={'/auths/login'}>로그인</Link>
                        </div>
                        <button onClick={() => console.log('test')}>
                            <span>이메일 전송</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
