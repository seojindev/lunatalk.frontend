import React, { useState, useEffect } from 'react';
import FindTabButtonLinkBox from './FindTabButtonLinkBox';
import { useLocation } from 'react-router-dom';
import FindIdFormBox from '@Page/Auths/Dtls/FindIdFormBox';
import FindPasswordFormBox from '@Page/Auths/Dtls/FindPasswordFormBox';

export default function IdPasswordFind() {
    const { pathname: pathName } = useLocation();

    const [pageMode, setPageMode] = useState<'id' | 'password'>('id');

    // 상단 텝 버튼 처리.
    const handleClickTopButtonLink = (mode: 'id' | 'password') => {
        setPageMode(mode);
    };

    useEffect(() => {
        const funcSetPageModeId = () => {
            setPageMode('id');
        };

        const funcSetPageModePassword = () => {
            setPageMode('password');
        };

        if (pathName === '/auths/find/id') {
            funcSetPageModeId();
        } else if (pathName === '/auths/find/password') {
            funcSetPageModePassword();
        }
    }, [pathName]);

    return (
        <div className="login-register-area pt-100 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-12 ml-auto mr-auto">
                        <div className="login-register-wrapper">
                            <FindTabButtonLinkBox modeChange={handleClickTopButtonLink} modeState={pageMode} />
                            <div className="tab-content">
                                {(function () {
                                    if (pageMode === 'id') {
                                        return (
                                            <div id="lg2" className="tab-pane active">
                                                <FindIdFormBox />
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <div id="lg1" className="tab-pane active">
                                                <FindPasswordFormBox />
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
