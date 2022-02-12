import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BodySpinner } from '@Element/Spinners';
import { RootState } from 'StoreTypes';
import { getLocalToken } from '@Helper';
import _Alert_ from '@_Alert_';
import { logoutAction } from '@Store/Auths';

export default function Logout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { storeLogout } = useSelector((store: RootState) => ({
        storeLogout: store.auths.logout.tryLogout,
    }));

    const [loginCkResult, SetloginCkResult] = useState<boolean>(true);
    const [logoutSuccess, SetLogoutSuccess] = useState<boolean>(false);

    // 로그아웃 시도 결과.
    useEffect(() => {
        if (storeLogout.status === 'success') {
            SetLogoutSuccess(true);
        }
    }, [storeLogout]);

    // 홈으로 이동
    useEffect(() => {
        if (loginCkResult === false || logoutSuccess === true) {
            navigate('/');
        }

        return () => {
            if (loginCkResult === false) {
                _Alert_.default({ text: `로그인 정보가 존재 하지 않습니다.` });
            } else if (logoutSuccess === true) {
                _Alert_.thenLocationReload({ text: `로그아웃이 완료 되었습니다.` });
            }
        };
    });

    // 시작시 체크 할것들.
    useEffect(() => {
        // 로그인 체크.
        const funcCheckLogout = async () => {
            const localToken = await getLocalToken();
            if (localToken && localToken.login_state === true) {
                dispatch(logoutAction());
            } else {
                SetloginCkResult(false);
            }
        };

        funcCheckLogout();
    }, []);
    return (
        <div className="login-register-area pt-100 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-12 ml-auto mr-auto">
                        <div className="login-register-wrapper">
                            <BodySpinner />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
