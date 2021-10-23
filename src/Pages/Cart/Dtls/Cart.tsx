import React, { useEffect } from 'react';
import CartForm from '@Page/Cart/Dtls/CartForm';
import { useSelector } from 'react-redux';
import { RootState } from 'StoreTypes';
import _Alert_ from '@_Alert_';

export default function Cart() {
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
        <div className="cart-main-area pt-90 pb-100">
            <div className="container">
                <h3 className="cart-page-title">CART LIST</h3>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <CartForm />
                    </div>
                    <div className="btn_wrap">
                        <div className="left">
                            <button type="button">선택 삭제</button>
                        </div>
                        <div className="right">
                            <button type="button">전체 구매</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
