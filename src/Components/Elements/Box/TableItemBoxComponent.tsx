import React from 'react';

export default function TableItemBoxComponent() {
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
                    <input className="cart-plus-minus-box" type="text" name="qtybutton" value="1" />
                </div>
            </td>
            <td className="product-subtotal">$110.00</td>
            <td className="product-wishlist-cart">
                <a href="#">담기</a>
            </td>
        </tr>
    );
}
