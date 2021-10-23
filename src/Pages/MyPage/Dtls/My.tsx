import React from 'react';
import MyInfo from '@Page/MyPage/Dtls/MyInfo';
import MyOrderDetail from '@Page/MyPage/Dtls/MyOrderDetail';
import MyOrderList from '@Page/MyPage/Dtls/MyOrderList';

export default function My() {
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
