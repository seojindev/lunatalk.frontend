import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'StoreTypes';

export default function TableItemBoxComponent() {
    const { storeRouterLocation } = useSelector((store: RootState) => ({
        storeRouterLocation: store.router.location,
    }));

    const pathName: string = storeRouterLocation?.pathname;
    return (
        <tr>
            <td>
                <input type="checkbox" />
            </td>
            <td className="product-thumbnail">
                <a href="#">
                    <img src="http://lunatalk.co.kr/web/product/big/sjsanup21_64.jpg" alt="" />
                </a>
            </td>
            <td className="product-name">
                <a href="#">빈티지 썸머 쇼퍼백 세트</a>
            </td>
            <td className="product-quantity">
                <div className="cart-plus-minus">
                    <input className="cart-plus-minus-box" type="text" name="qtybutton" />
                </div>
            </td>
            <td className="product-subtotal">$110.00</td>
            <td className="product-wishlist-cart">
                <a href="#">{pathName === '/wishlist' ? '담기' : '구매'}</a>
            </td>
        </tr>
    );
}
