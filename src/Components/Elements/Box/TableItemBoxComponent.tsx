import React, { ChangeEvent, useState } from 'react';
import _ from 'lodash';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createOrderProductAction } from '@Store/Order';
import _Alert_ from '@_Alert_';

export default function TableItemBoxComponent({
    cartId,
    productUuid,
    price,
    numberPrice,
    image,
    name,
    color,
    onChange,
    checkBox,
}: {
    cartId: number;
    productUuid: string;
    price: string;
    numberPrice: number;
    image: string;
    name: string;
    color: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    checkBox: number[];
}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [cartProductCount, setCartProductCount] = useState<number>(1);
    const cartCountOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCartProductCount(Number(e.target.value));
    };

    const handleOnSingleCreateOrder = () => {
        // 오더 리덕스 전달할때 배열 형태로 보내기.
        const createOrderProduct: {
            uuid: string;
            name: string;
            count: number;
            price: string;
            numberPrice: number;
            options: string;
        }[] = [{ uuid: productUuid, name, count: cartProductCount, price, numberPrice, options: color }];

        if (createOrderProduct[0].uuid !== undefined) {
            dispatch(createOrderProductAction({ orderProduct: createOrderProduct }));
            navigate('/order');
        } else {
            _Alert_.default({ text: '서버에 오류가 발생하였습니다. 잠시후 시도해주세요.' });
        }
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
                <button type="button" onClick={() => handleOnSingleCreateOrder()}>
                    구매
                </button>
            </td>
        </tr>
    );
}
