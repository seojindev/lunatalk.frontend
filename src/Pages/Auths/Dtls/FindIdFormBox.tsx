import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { sendLoginIdByEmail } from '@API';
import _Alert_ from '@_Alert_';

export default function FindIdFormBox() {
    const navigate = useNavigate();
    const [sendEmail, setSendEmail] = useState<{ email: string }>({ email: '' });

    const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = e.target;
        setSendEmail({ email: value });
    };

    const handleOnFindLoginId = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (sendEmail.email !== '') {
            const response = await sendLoginIdByEmail({ email: sendEmail.email });
            if (response.status) {
                _Alert_.default({ text: '이메일로 전송 되었습니다.' });
                setSendEmail({ email: '' });
                navigate('/auths/login');
            } else {
                _Alert_.default({ text: response.message });
                setSendEmail({ email: '' });
            }
        } else {
            _Alert_.default({ text: '이메일을 입력 해주세요.' });
        }
    };
    return (
        <div className="login-form-container">
            <div className="login-register-form">
                <form onSubmit={(event: React.SyntheticEvent) => handleOnFindLoginId(event)}>
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
