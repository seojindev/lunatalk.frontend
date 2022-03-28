import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function FindTabButtonLinkBox({
    modeChange,
    modeState,
}: {
    modeChange: (mode: 'id' | 'password') => void;
    modeState: 'id' | 'password';
}) {
    const [activeClass, setActiveClass] = useState({
        id: 'active',
        password: '',
    });

    useEffect(() => {
        const setModeClass = (mode: 'id' | 'password') => {
            if (mode === 'id') {
                setActiveClass({
                    id: 'active',
                    password: '',
                });
            } else {
                setActiveClass({
                    id: '',
                    password: 'active',
                });
            }
        };
        setModeClass(modeState);
    }, [modeState]);
    return (
        <div className="login-register-tab-list nav">
            <Link className={activeClass.id} to="/auths/find/id" onClick={() => modeChange('id')}>
                <h4> 아이디 찾기 </h4>
            </Link>
            <Link className={activeClass.password} to="/auths/find/password" onClick={() => modeChange('password')}>
                <h4> 비밀번호 찾기 </h4>
            </Link>
        </div>
    );
}
