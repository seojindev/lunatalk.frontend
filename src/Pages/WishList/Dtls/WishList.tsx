import React, { useEffect } from 'react';
import WishListForm from '@Page/WishList/Dtls/WishListForm';
import { useSelector } from 'react-redux';
import { RootState } from 'StoreTypes';
import _Alert_ from '@_Alert_';

export default function WishList() {
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
                <h3 className="cart-page-title">WISH LIST</h3>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <WishListForm />
                    </div>
                    <div className="btn_wrap">
                        <div className="left">
                            <button type="button">선택삭제</button>
                        </div>
                        <div className="right">
                            <button type="button">선택 담기</button>
                            <button type="button">선택 구매하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
