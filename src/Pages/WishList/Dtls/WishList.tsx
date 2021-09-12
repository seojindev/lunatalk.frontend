import React from 'react';
import WishListForm from '@Page/WishList/Dtls/WishListForm';

export default function WishList() {
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
