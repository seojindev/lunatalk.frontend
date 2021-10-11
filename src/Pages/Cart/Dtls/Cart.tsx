import React from 'react';
import CartForm from '@Page/Cart/Dtls/CartForm';

export default function Cart() {
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
