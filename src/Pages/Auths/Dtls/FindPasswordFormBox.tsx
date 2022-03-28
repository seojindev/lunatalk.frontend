import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { sendPasswordResetByEmail } from '@API';
import _Alert_ from '@_Alert_';

export default function FindPasswordFormBox() {
    const navigate = useNavigate();
    const [findPasswordData, setFindPasswordData] = useState<{ loginId: string; email: string }>({
        loginId: '',
        email: '',
    });

    const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        setFindPasswordData({ ...findPasswordData, [name]: value });
    };

    const handleOnResetPassword = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (findPasswordData.email !== '' && findPasswordData.loginId !== '') {
            const response = await sendPasswordResetByEmail({
                email: findPasswordData.email,
                login_id: findPasswordData.loginId,
            });
            if (response.status) {
                _Alert_.default({ text: '이메일로 전송 되었습니다.' });
                setFindPasswordData({ email: '', loginId: '' });
                navigate('/auths/login');
            } else {
                _Alert_.default({ text: response.message });
                setFindPasswordData({ email: '', loginId: '' });
            }
        } else {
            _Alert_.default({ text: '이메일과 로그인 아이디를 입력해주세요.' });
        }
    };
    return (
        <div className="login-form-container">
            <div className="login-register-form">
                <form onSubmit={(event: React.SyntheticEvent) => handleOnResetPassword(event)}>
                    <input
                        type="text"
                        name="loginId"
                        placeholder="아이디를 입력해주세요."
                        value={findPasswordData.loginId}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeInputValue(e)}
                    />
                    <input
                        type="text"
                        name="email"
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
