import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from 'StoreTypes';
import { ButtonSpinner } from '@Element/Spinners';
import { loginAction, authResetAction } from '@Store/Auths';
import _Alert_ from '@_Alert_';
import { isEmpty, cookieManager, getLocalToken } from '@Helper';

export default function LoginFormBox() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { storeLogin } = useSelector((store: RootState) => ({
        storeLogin: store.auths.login.tryLogin,
    }));

    const [loginCkResult, SetloginCkResult] = useState<boolean>(false);
    const [loginSuccess, SetLoginSuccess] = useState<boolean>(false);

    const inputRef_login_id = useRef<HTMLInputElement | null>(null);
    const inputRef_login_password = useRef<HTMLInputElement | null>(null);

    const [inputValue, setInputValue] = useState<{ login_id: string; login_password: string }>({
        login_id: '',
        login_password: '',
    });

    const [optionRemember, setOptionRemember] = useState<boolean>(false);

    // 엔터 키 이벤트.
    const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== 'Enter') return;

        switch ((e.target as HTMLElement).getAttribute('name')) {
            case 'user_id':
                inputRef_login_password.current?.focus();
                break;
            case 'user_password':
                handleClickLoginButton();
                break;
            default:
                break;
        }
    };

    // 기억하기? 체크박스 처리.
    const handleChangeCheckBoxOptionRemember = () => {
        setOptionRemember(optionRemember ? false : true);
    };

    // submit 처리.
    const handleOnSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        handleClickLoginButton();
    };

    // iunput change 이벤트.
    const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value,
        });
    };

    // 로그인 버튼 처리.
    const handleClickLoginButton = () => {
        dispatch(
            loginAction({
                login_id: inputValue.login_id,
                login_password: inputValue.login_password,
                option_remember: optionRemember,
            })
        );
    };

    // 로그인 시도 결과.
    useEffect(() => {
        if (storeLogin.status === 'success') {
            SetLoginSuccess(true);
        }
    }, [storeLogin]);

    // 홈으로 이동
    useEffect(() => {
        if (loginCkResult === true || loginSuccess === true) {
            navigate('/');
        }

        return () => {
            if (loginCkResult === true) {
                _Alert_.default({ text: `이미 로그인 되어 있습니다.` });
                dispatch(authResetAction());
            } else if (loginSuccess === true) {
                _Alert_.default({ text: `로그인이 완료 되었습니다.` });
                dispatch(authResetAction());
            }
        };
    });

    // 시작시 체크 할것들.
    useEffect(() => {
        // 로그인 체크.
        const funcCheckLogin = async () => {
            const localToken = await getLocalToken();

            if (localToken && localToken.login_state === true) {
                SetloginCkResult(true);
            }
        };

        // 리멤버 아이디 체크.
        const funcCheckRemember = async () => {
            const login_id = await cookieManager.get('login_id');
            if (!isEmpty(login_id)) {
                setInputValue({
                    ...inputValue,
                    login_id: login_id,
                });
                setOptionRemember(true);
            }
        };

        dispatch(authResetAction());
        funcCheckLogin();
        funcCheckRemember();
    }, []);

    return (
        <div className="login-form-container">
            <div className="login-register-form">
                <form onSubmit={(event: React.SyntheticEvent) => handleOnSubmit(event)}>
                    <input
                        type="text"
                        name="login_id"
                        placeholder="아이디"
                        onKeyPress={e => onEnter(e)}
                        ref={inputRef_login_id}
                        value={inputValue.login_id}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeInputValue(e)}
                    />
                    <input
                        type="password"
                        name="login_password"
                        placeholder="비밀번호"
                        onKeyPress={e => onEnter(e)}
                        ref={inputRef_login_password}
                        value={inputValue.login_password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeInputValue(e)}
                    />
                    <div className="button-box">
                        <div className="login-toggle-btn">
                            <input
                                type="checkbox"
                                checked={optionRemember === true}
                                onChange={() => handleChangeCheckBoxOptionRemember()}
                            />
                            <label>아이디 저장</label>
                            <a href="#">아이디/비밀번호 찾기</a>
                        </div>
                        {storeLogin.status === 'loading' ? (
                            <button>
                                <ButtonSpinner />
                            </button>
                        ) : (
                            <button onClick={() => handleClickLoginButton()}>
                                <span>로그인</span>
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}
