import React, { useEffect, useState } from 'react';
import { MyPageOrderObj, product } from 'CommonTypes';
import { getMyPageOrderDetail } from '@API';
import MyOrderDetailPopUp from '@Page/MyPage/Dtls/MyOrderDetailPopUp';

export default function MyOrderList({
    list,
}: {
    list: { order: MyPageOrderObj[] | []; cancel: MyPageOrderObj[] | [] };
}) {
    const [tabState, setTabState] = useState<string>('주문');
    const [tabOrderList, setTabOrderList] = useState<MyPageOrderObj[]>([]);
    const [orderDetailPopUp, setOrderDetailPopUp] = useState<boolean>(false);
    const [orderDetailInfo, setOrderDetailInfo] = useState<{
        orderAddress: { zipcode: string; step1: string; step2: string };
        orderInfo: {
            delivery: string;
            name: string;
            email: string;
            message: string;
            orderName: string;
            totalPrice: string;
            uuid: string;
            phone: string;
        };
        products: product[];
    }>({
        orderAddress: {
            zipcode: '',
            step1: '',
            step2: '',
        },
        orderInfo: {
            delivery: '',
            name: '',
            email: '',
            message: '',
            orderName: '',
            totalPrice: '',
            phone: '',
            uuid: '',
        },
        products: [],
    });

    useEffect(() => {
        setTabOrderList(list.order);
    }, [list]);

    useEffect(() => {
        if (tabState === '주문') setTabOrderList(list.order);
        else if (tabState === '취소') setTabOrderList(list.cancel);
    }, [tabState]);

    const handleTabOnChange = (value: string) => {
        setTabState(value);
    };

    const handleOrderDetailInfoOnClick = (orderUuid: string) => {
        getMyPageOrderDetail({ orderUuid })
            .then(r => {
                const { payload } = r;
                setOrderDetailInfo({
                    orderAddress: {
                        zipcode: payload.order_address.zipcode,
                        step1: payload.order_address.step1,
                        step2: payload.order_address.step2,
                    },
                    orderInfo: {
                        delivery: payload.order_info.delivery.code_name,
                        name: payload.order_info.name,
                        email: payload.order_info.email,
                        message: payload.order_info.message,
                        orderName: payload.order_info.order_name,
                        totalPrice: payload.order_info.order_price.string,
                        phone: payload.order_info.phone.type2,
                        uuid: payload.uuid,
                    },
                    products: payload.products,
                });
                setOrderDetailPopUp(true);
            })
            .catch(err => console.error(err));
    };
    return (
        <>
            <div className="my-page-order">
                <div className="head pt-10">
                    <ul className="menu">
                        <li
                            className={tabState === '주문' ? 'on pt-10 pb-10' : 'pt-10 pb-10'}
                            onClick={() => handleTabOnChange('주문')}
                        >
                            주문 내역 조회
                        </li>
                        <li
                            className={tabState === '취소' ? 'on pt-10 pb-10' : 'pt-10 pb-10'}
                            onClick={() => handleTabOnChange('취소')}
                        >
                            취소/교환/반품 내역 조회
                        </li>
                    </ul>
                </div>
                <div className="sub-head">
                    <ul className="sub-menu">
                        <li className="pt-10 pb-10">상품정보</li>
                        <li className="pt-10 pb-10">주문일자</li>
                        <li className="pt-10 pb-10">주문번호</li>
                        <li className="pt-10 pb-10">주문금액(주문수량)</li>
                        <li className="pt-10 pb-10">주문상태</li>
                    </ul>
                </div>
                <div className="body pb-15 pt-15 desktop">
                    {tabOrderList.map((item: MyPageOrderObj) => (
                        <div className="item" key={item.uuid}>
                            <div className="product-info">
                                <img src={item.rep_image.url} alt="thumbnail" style={{ maxWidth: 96 }} />
                                <div
                                    className="information"
                                    onClick={() => handleOrderDetailInfoOnClick(item.uuid)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <strong>{item.order_name}</strong>
                                    {/*<p>옵션 : Yellow</p>*/}
                                </div>
                            </div>
                            <div className="order-date">
                                <p>{item.created_at.type1}</p>
                            </div>
                            <div className="order-number">
                                <p>{item.uuid}</p>
                            </div>
                            <div className="order-count-price">
                                <p className="price">
                                    {item.order_price.string}원{/*<span>(1개)</span>*/}
                                </p>
                            </div>
                            <div className="order-status">
                                <div className="status">
                                    <p>{item.state.code_name}</p>
                                    <button type="button">배송조회</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="body pb-15 pt-15 mobile">
                    {tabOrderList.map((item: MyPageOrderObj) => (
                        <div className="item" key={item.uuid}>
                            <div className="order-status">
                                <strong>{item.state.code_name}</strong>
                            </div>
                            <div className="order-date">
                                <p>{item.created_at.type1}</p>
                            </div>
                            <div className="product-info">
                                <img src={item.rep_image.url} alt="thumbnail" style={{ maxWidth: 96 }} />
                                <span
                                    className="information"
                                    onClick={() => handleOrderDetailInfoOnClick(item.uuid)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <strong>{item.order_name}</strong>
                                    {/*<p>Yellow | 1개</p>*/}
                                    <p className="price">{item.order_price.string}원</p>
                                </span>
                            </div>
                            <div className="order-status">
                                <div className="status">
                                    <button type="button">배송조회</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <MyOrderDetailPopUp
                open={orderDetailPopUp}
                onChange={() => setOrderDetailPopUp(false)}
                detailInfo={orderDetailInfo}
            />
        </>
    );
}
