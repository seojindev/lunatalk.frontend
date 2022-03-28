import React, { useEffect, useState } from 'react';
import CartForm from '@Page/Cart/Dtls/CartForm';
import { useDispatch, useSelector } from 'react-redux';
import { getCartListAction } from '@Store/Cart';
import { RootState } from 'StoreTypes';
import { Cart as CartData } from 'CommonTypes';
import { deleteCart } from '@API';
import _Alert_ from '@_Alert_';
import _ from 'lodash';
import { createOrderProductAction } from '@Store/Order';
import history from '@Module/History';

export default function Cart() {
    const dispatch = useDispatch();
    const { cartList } = useSelector((store: RootState) => ({
        cartList: store.cart.list,
    }));
    const [cartData, setCartData] = useState<
        {
            cartId: number;
            productUuid: string;
            price: string;
            name: string;
            image: string;
            count: number;
            numberPrice: number;
            color: string[];
        }[]
    >([]);

    const [checkBox, setCheckBox] = useState<number[]>([]);

    useEffect(() => {
        dispatch(getCartListAction());
    }, []);

    const checkBoxOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { checked, name } = e.target;
        if (checked && name !== 'All') {
            setCheckBox([...checkBox, Number(name)]);
        } else if (!checked && name !== 'All') {
            setCheckBox(checkBox.filter(item => item !== Number(name)));
        } else if (name === 'All' && checked) {
            const allCartId: number[] = [];
            cartData.map(item => {
                allCartId.push(item.cartId);
            });
            setCheckBox(allCartId);
        } else if (name === 'All' && !checked) {
            setCheckBox([]);
        }
    };

    const handleAllOnPayment = () => {
        const createOrderProduct = _.map(cartData, row => {
            return {
                uuid: row.productUuid,
                name: row.name,
                price: row.price,
                numberPrice: row.numberPrice,
                count: row.count,
                options: row.color[0],
            };
        });
        if (createOrderProduct.length > 0) {
            dispatch(createOrderProductAction({ orderProduct: createOrderProduct }));
            history.push('/order');
        } else {
            _Alert_.default({ text: '선택된 상품이 없습니다.' });
        }
    };
    useEffect(() => {
        if (cartList.length) {
            const cartResult = cartList.map((item: CartData) => {
                return {
                    cartId: item.cart_id,
                    productUuid: item.product_uuid,
                    name: item.name,
                    price: item.price.string,
                    numberPrice: item.price.number,
                    image: item.rep_image.url,
                    count: 1,
                    color: _.map(item.color, color => color.name),
                };
            });
            setCartData(cartResult);
        } else {
            setCartData([]);
        }
    }, [cartList]);

    const cartDelete = async () => {
        if (checkBox.length > 0) {
            const response = await deleteCart({ cartList: checkBox });
            if (response.status) {
                _Alert_.default({ text: response.payload.message });
                dispatch(getCartListAction());
                setCheckBox([]);
            } else {
                _Alert_.default({ text: response.message });
            }
        } else {
            _Alert_.default({ text: '장바구니가 비어있습니다.' });
        }
    };

    return (
        <div className="cart-main-area pt-90 pb-100">
            <div className="container">
                <h3 className="cart-page-title">CART LIST</h3>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <CartForm list={cartData} checkBoxOnChange={checkBoxOnChange} checkBox={checkBox} />
                    </div>
                    <div className="btn_wrap">
                        <div className="left">
                            <button type="button" onClick={() => cartDelete()} disabled={!cartData.length}>
                                선택 삭제
                            </button>
                        </div>
                        <div className="right">
                            <button type="button" onClick={() => handleAllOnPayment()}>
                                전체 구매
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
