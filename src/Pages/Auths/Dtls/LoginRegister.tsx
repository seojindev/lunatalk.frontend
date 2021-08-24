import React, { useState } from 'react';
import TabButtonLinkBox from './TabButtonLinkBox';
import LoginFormBox from './LoginFormBox';
import RegisterFormBox from './RegisterFormBox';

export default function LoginRegister() {
    const [pageMode, setPageMode] = useState<'login' | 'register'>('login');

    const handleClickTopButtonLink = (mode: 'login' | 'register') => {
        setPageMode(mode);
    };

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
