import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DaumPostcode from 'react-daum-postcode';
import { RootState } from 'StoreTypes';
import { CallPaymentOrderPayload, CodeItem, OrderProduct } from 'CommonTypes';
import _ from 'lodash';
import _Alert_ from '@_Alert_';
import { getMyInformationAction } from '@Store/MyInformation';
import { BsXLg } from 'react-icons/bs';
import { callPaymentOrder } from '@API';

export default function Order() {
    const dispatch = useDispatch();
    const { orderProducts, loginStatus, storeCommonCodes, information } = useSelector((store: RootState) => ({
        information: store.my.information,
        orderProducts: store.order.product,
        loginStatus: store.app.loginState,
        storeCommonCodes: store.app.common.codes,
    }));
    const [products, setProducts] = useState<OrderProduct[]>([]);
    const [message, setMessage] = useState<string>();
    const [allSumPrice, setAllSumPrice] = useState<number>(0);
    const [emailCodes, setEmailCodes] = useState<CodeItem[]>([]);
    const [myInformation, setMyInformation] = useState<{
        name: string;
        address: {
            postCode: string;
            step1: string;
            step2: string;
        };
        email: {
            gubun1: string;
            gubun2: string;
        };
        phoneNumber: {
            step1: string;
            step2: string;
            step3: string;
        };
    }>({
        name: '',
        address: {
            postCode: '',
            step1: '',
            step2: '',
        },
        email: {
            gubun1: '',
            gubun2: '',
        },
        phoneNumber: {
            step1: '',
            step2: '',
            step3: '',
        },
    });

    const [isOpenPost, setIsOpenPost] = useState<boolean>(false);

    const onCompletePost = (data: any) => {
        let fullAddr = data.address;
        let extraAddr = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddr += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddr += extraAddr !== '' ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddr += extraAddr !== '' ? ` (${extraAddr})` : '';
        }

        setMyInformation({
            ...myInformation,
            address: { ...myInformation.address, postCode: data.zonecode, step1: fullAddr },
        });
        setIsOpenPost(false);
    };

    // 공통 코드에서 이메일 리스트 가지고 오기.
    useEffect(() => {
        const funcSetEmailCodes = (codes: CodeItem[]) => {
            setEmailCodes(codes);
        };

        if (storeCommonCodes) {
            funcSetEmailCodes(storeCommonCodes.code_group['400']);
        }
    }, [storeCommonCodes]);

    useEffect(() => {
        if (!loginStatus) {
            _Alert_.thenGoHome({ text: '로그인이 필요한 서비스입니다.' });
        } else if (orderProducts.length === 0) {
            _Alert_.default({ text: '상품이 선택 되지 않았습니다. 선택후 다시 이용해주세요.' });
            history.back();
        } else if (loginStatus) {
            dispatch(getMyInformationAction());
        }

        if (orderProducts) {
            setProducts(
                _.map(orderProducts, product => {
                    return {
                        uuid: product.uuid,
                        name: product.name,
                        count: product.count,
                        price: product.price,
                        numberPrice: product.numberPrice,
                        options: product.options,
                    };
                })
            );
            _.each(orderProducts, product => {
                setAllSumPrice(allSumPrice + product.numberPrice * Number(product.count));
            });
        }
    }, []);

    useEffect(() => {
        if (information) {
            setMyInformation({
                name: information.name,
                address: {
                    postCode: information.address.zipcode,
                    step1: information.address.step1,
                    step2: information.address.step2,
                },
                email: {
                    gubun1: information.email.gubun1.step1,
                    gubun2: information.email.gubun1.step2,
                },
                phoneNumber: {
                    step1: information.phone_number.step1,
                    step2: information.phone_number.step2,
                    step3: information.phone_number.step3,
                },
            });
        }
    }, [information]);

    const myInfoHandleOnChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (name === 'address') {
            setMyInformation({ ...myInformation, address: { ...myInformation.address, step2: value } });
        } else if (name === 'emailGubun1') {
            setMyInformation({ ...myInformation, email: { ...myInformation.email, gubun1: value } });
        } else if (name === 'emailGubun2') {
            setMyInformation({ ...myInformation, email: { ...myInformation.email, gubun2: value } });
        } else if (name === 'phoneStep1') {
            setMyInformation({ ...myInformation, phoneNumber: { ...myInformation.phoneNumber, step1: value } });
        } else if (name === 'phoneStep2') {
            setMyInformation({ ...myInformation, phoneNumber: { ...myInformation.phoneNumber, step2: value } });
        } else if (name === 'phoneStep3') {
            setMyInformation({ ...myInformation, phoneNumber: { ...myInformation.phoneNumber, step3: value } });
        } else if (name === 'name') {
            setMyInformation({ ...myInformation, name: value });
        }
    };

    const messageHandleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = e.target;
        setMessage(value);
    };

    const callPaymentHandleOnClick = async () => {
        const productsUUID: string[] = [];
        _.each(products, product => {
            for (let i = 0; i < product.count; i++) {
                productsUUID.push(product.uuid);
            }
        });
        const requestData: CallPaymentOrderPayload = {
            name: myInformation.name,
            zipcode: myInformation.address.postCode,
            address1: myInformation.address.step1,
            address2: myInformation.address.step2,
            phone: myInformation.phoneNumber.step1 + myInformation.phoneNumber.step2 + myInformation.phoneNumber.step3,
            email: myInformation.email.gubun1 + '@' + myInformation.email.gubun2,
            message: message || '부재시 연락주세요.',
            product: productsUUID,
        };
        const response = await callPaymentOrder({ paymentOrderData: requestData });
        if (response.status) {
            window.location.href = response.payload.pay_url;
        } else {
            _Alert_.default({ text: response.message });
        }
    };

    return (
        <>
            {isOpenPost ? (
                <div className="postCodeWrap">
                    <BsXLg className="close" onClick={() => setIsOpenPost(!isOpenPost)} />
                    <DaumPostcode
                        style={{
                            width: '100%',
                            height: '400px',
                            zIndex: 1,
                        }}
                        autoClose
                        onComplete={data => onCompletePost(data)}
                    />
                </div>
            ) : null}
            <div className="checkout-area pt-95 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="billing-info-wrap">
                                <h3>배송정보</h3>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="billing-info mb-20">
                                            <label>이름</label>
                                            <input
                                                type="text"
                                                onChange={e => myInfoHandleOnChange(e)}
                                                value={information.name}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="billing-info mb-20">
                                            <label>주소</label>
                                            <div className="billing-search">
                                                <input
                                                    type="text"
                                                    className="address-number"
                                                    placeholder="우편번호"
                                                    disabled={true}
                                                    defaultValue={myInformation.address.postCode}
                                                />
                                                <button type="button" onClick={() => setIsOpenPost(!isOpenPost)}>
                                                    검색
                                                </button>
                                            </div>
                                            <input
                                                className="billing-address"
                                                placeholder="기본 주소"
                                                type="text"
                                                disabled={true}
                                                defaultValue={myInformation.address.step1}
                                            />
                                            <input
                                                placeholder="나머지 주소"
                                                type="text"
                                                name="address"
                                                value={myInformation.address.step2}
                                                onChange={e => myInfoHandleOnChange(e)}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="billing-info mb-20 phone">
                                            <label>휴대폰번호</label>
                                            {/* <input type="text" /> */}
                                            <input
                                                type="text"
                                                className="phone"
                                                name="phoneStep1"
                                                value={myInformation.phoneNumber.step1}
                                                onChange={e => myInfoHandleOnChange(e)}
                                            />
                                            -
                                            <input
                                                type="text"
                                                className="phone"
                                                name="phoneStep2"
                                                value={myInformation.phoneNumber.step2}
                                                onChange={e => myInfoHandleOnChange(e)}
                                            />
                                            -
                                            <input
                                                type="text"
                                                className="phone"
                                                name="phoneStep3"
                                                value={myInformation.phoneNumber.step3}
                                                onChange={e => myInfoHandleOnChange(e)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="billing-info mb-20 address">
                                            <label>이메일 주소</label>
                                            <input
                                                type="text"
                                                style={{ width: '45%' }}
                                                className="email"
                                                name="emailGubun1"
                                                onChange={e => myInfoHandleOnChange(e)}
                                                value={myInformation.email.gubun1}
                                            />
                                            @{/*<input type="text" />*/}
                                            <div className="billing-select" style={{ width: '45%' }}>
                                                <select
                                                    id="email-address"
                                                    name="emailGubun2"
                                                    value={myInformation.email.gubun2}
                                                    onChange={e => myInfoHandleOnChange(e)}
                                                >
                                                    {emailCodes.map((e: CodeItem) => {
                                                        return (
                                                            <option key={e.code_id} value={e.code_name}>
                                                                {e.code_name}
                                                            </option>
                                                        );
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="additional-info-wrap">
                                    <h4>배송메세지</h4>
                                    <div className="additional-info">
                                        <textarea
                                            name="message"
                                            value={message}
                                            onChange={e => messageHandleOnChange(e)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="your-order-area">
                                <h3>주문정보</h3>
                                <div className="your-order-wrap gray-bg-4">
                                    <div className="your-order-product-info">
                                        <div className="your-order-top">
                                            <ul>
                                                <li>상품</li>
                                                <li>금액</li>
                                            </ul>
                                        </div>
                                        <div className="your-order-middle">
                                            <ul>
                                                {products.map((product: OrderProduct) => (
                                                    <li key={product.uuid}>
                                                        <span className="order-middle-left">
                                                            {product.name}({product.options}) X {product.count}
                                                        </span>
                                                        <span className="order-price">
                                                            {(product.numberPrice * product.count).toLocaleString()}원
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="your-order-bottom">
                                            <ul>
                                                <li className="your-order-shipping">배송구분</li>
                                                <li>무료배송</li>
                                            </ul>
                                        </div>
                                        <div className="your-order-total">
                                            <ul>
                                                <li className="order-total">합계</li>
                                                <li>{allSumPrice.toLocaleString()}원</li>
                                            </ul>
                                        </div>
                                        <p>상품의 옵션 및 수량 변경은 상품상세 또는 장바구니에서 가능합니다.</p>
                                    </div>
                                </div>
                                <div className="Place-order mt-25">
                                    <button
                                        type="button"
                                        className="btn-hover"
                                        onClick={() => callPaymentHandleOnClick()}
                                        style={{
                                            padding: '10px 20px',
                                            backgroundColor: '#a749ff',
                                            border: 'medium none',
                                            color: '#fff',
                                            cursor: 'pointer',
                                            outline: 'none',
                                            borderRadius: '15px',
                                        }}
                                    >
                                        결제하기
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
