import React, { useEffect, useState } from 'react';
import CartForm from '@Page/Cart/Dtls/CartForm';
import { useDispatch, useSelector } from 'react-redux';
import { getCartListAction } from '@Store/Cart';
import { RootState } from 'StoreTypes';
import { Cart as CartData } from 'CommonTypes';

export default function Cart() {
    const dispatch = useDispatch();
    const { cartList } = useSelector((store: RootState) => ({
        cartList: store.cart.list,
    }));
    const [cartData, setCartData] = useState<
        { cartId: number; productUuid: string; price: string; name: string; image: string; count: number }[]
    >([]);

    useEffect(() => {
        dispatch(getCartListAction());
    }, []);

    useEffect(() => {
        if (cartList.length) {
            const cartResult = cartList.map((item: CartData) => {
                return {
                    cartId: item.cart_id,
                    productUuid: item.product_uuid,
                    name: item.name,
                    price: item.price.string,
                    image: item.rep_image.url,
                    count: 1,
                };
            });
            setCartData(cartResult);
        }
    }, [cartList]);
    return (
        <div className="cart-main-area pt-90 pb-100">
            <div className="container">
                <h3 className="cart-page-title">CART LIST</h3>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <CartForm list={cartData} />
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
