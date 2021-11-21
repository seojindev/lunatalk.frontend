import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function TableItemBoxComponent({
    productUuid,
    price,
    image,
    name,
}: {
    productUuid: string;
    price: string;
    image: string;
    name: string;
}) {
    const [cartProductCount, setCartProductCount] = useState<number>(1);
    const cartCountOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCartProductCount(Number(e.target.value));
    };
    return (
        <tr>
            <td>
                <input type="checkbox" />
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
