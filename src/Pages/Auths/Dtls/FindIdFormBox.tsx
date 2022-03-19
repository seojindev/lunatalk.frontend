import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function FindIdFormBox() {
    const [sendEmail, setSendEmail] = useState<{ email: string }>({ email: '' });

    const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = e.target;
        setSendEmail({ email: value });
    };
    return (
        <div className="login-form-container">
            <div className="login-register-form">
                <form onSubmit={() => console.log('test')}>
                    <input
                        type="text"
                        name="email"
                        placeholder="이메일을 입력해주세요."
                        value={sendEmail.email}
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
