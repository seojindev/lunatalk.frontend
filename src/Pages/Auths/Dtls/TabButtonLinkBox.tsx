import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function TabButtonLinkBox({
    modeChange,
    modeState,
}: {
    modeChange: (mode: 'login' | 'register') => void;
    modeState: 'login' | 'register';
}) {
    const [activeClass, setActiveClass] = useState({
        login: 'active',
        register: '',
    });

    useEffect(() => {
        const setModeClass = (mode: 'login' | 'register') => {
            if (mode === 'login') {
                setActiveClass({
                    login: 'active',
                    register: '',
                });
            } else {
                setActiveClass({
                    login: '',
                    register: 'active',
                });
            }
        };
        setModeClass(modeState);
    }, [modeState]);
    return (
        <div className="login-register-tab-list nav">
            <Link className={activeClass.login} to="/auths/login" onClick={() => modeChange('login')}>
                <h4> 로그인 </h4>
            </Link>
            <Link className={activeClass.register} to="/auths/register" onClick={() => modeChange('register')}>
                <h4> 회원가입 </h4>
            </Link>
        </div>
    );
}
