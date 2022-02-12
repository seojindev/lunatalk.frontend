import React, { useState, useEffect } from 'react';
import TabButtonLinkBox from './TabButtonLinkBox';
import LoginFormBox from './LoginFormBox';
import RegisterFormBox from './RegisterFormBox';

export default function LoginRegister() {
    // const { pathName } = useSelector((store: RootState) => ({
    //     pathName: store.router.location.pathname,
    // }));
    const pathName = '/auths/login';

    const [pageMode, setPageMode] = useState<'login' | 'register'>('register');

    // 상단 텝 버튼 처리.
    const handleClickTopButtonLink = (mode: 'login' | 'register') => {
        setPageMode(mode);
    };

    useEffect(() => {
        const funcSetPageModeLogin = () => {
            setPageMode('login');
        };

        const funcSetPageModeRegister = () => {
            setPageMode('register');
        };

        if (pathName === '/auths/login') {
            funcSetPageModeLogin();
        } else if (pathName === '/auths/register') {
            funcSetPageModeRegister();
        }
    }, [pathName]);

    return (
        <div className="login-register-area pt-100 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-12 ml-auto mr-auto">
                        <div className="login-register-wrapper">
                            <TabButtonLinkBox modeChange={handleClickTopButtonLink} modeState={pageMode} />
                            <div className="tab-content">
                                {(function () {
                                    if (pageMode === 'register') {
                                        return (
                                            <div id="lg2" className="tab-pane active">
                                                <RegisterFormBox />
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <div id="lg1" className="tab-pane active">
                                                <LoginFormBox />
                                            </div>
                                        );
                                    }
                                })()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
