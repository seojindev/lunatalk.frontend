import React, { useEffect } from 'react';
import MyInfo from '@Page/MyPage/Dtls/MyInfo';
import MyOrderDetail from '@Page/MyPage/Dtls/MyOrderDetail';
import MyOrderList from '@Page/MyPage/Dtls/MyOrderList';
import { useSelector } from 'react-redux';
import { RootState } from 'StoreTypes';
import _Alert_ from '@_Alert_';

export default function My() {
    const { access_token, refresh_token } = useSelector((store: RootState) => ({
        access_token: store.app.loginUser.access_token,
        refresh_token: store.app.loginUser.refresh_token,
    }));

    useEffect(() => {
        if (access_token === null || refresh_token === null) {
            _Alert_.thenGoHome({ text: `로그인이 필요한 페이지 입니다.` });
        }
    }, []);
    return (
        <div className="suppoer-area pt-50 pb-60">
            <div className="container my-page-wrap">
                <h3>My Page</h3>
                <MyInfo />
                <MyOrderDetail />
                <MyOrderList />
            </div>
        </div>
    );
}
