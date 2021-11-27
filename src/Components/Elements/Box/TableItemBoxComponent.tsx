import React, { ChangeEvent, useState } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';

export default function TableItemBoxComponent({
    cartId,
    productUuid,
    price,
    image,
    name,
    onChange,
    checkBox,
}: {
    cartId: number;
    productUuid: string;
    price: string;
    image: string;
    name: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    checkBox: number[];
}) {
    const [cartProductCount, setCartProductCount] = useState<number>(1);
    const cartCountOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCartProductCount(Number(e.target.value));
    };
    return (
        <tr>
            <td>
                <input
                    type="checkbox"
                    name={cartId.toString()}
                    onChange={e => onChange(e)}
                    checked={_.includes(checkBox, cartId)}
                />
            </td>
            <td className="product-thumbnail">
                <Link to={`/product/${productUuid}`}>
                    <img src={image} alt={name} />
                </Link>
            </td>
            <td className="product-name">
                <Link to={`/product/${productUuid}`}>{name}</Link>
            </td>
            <td className="product-quantity">
                <div className="cart-plus-minus">
                    <input
                        className="cart-plus-minus-box"
                        type="text"
                        value={cartProductCount}
                        onChange={e => cartCountOnChange(e)}
                    />
                </div>
            </td>
            <td className="product-subtotal">{price}원</td>
            <td className="product-wishlist-cart">
                <a href="#">구매</a>
            </td>
        </tr>
    );
}
