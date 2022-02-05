import React, { useState } from 'react';
import Modal from 'react-modal';
import { product } from 'CommonTypes';
import ReviewModal from '@Page/MyPage/Dtls/ReviewModal';

export default function MyOrderDetailPopUp({
    open,
    onChange,
    detailInfo,
}: {
    open: boolean;
    onChange: () => void;
    detailInfo: {
        orderAddress: { zipcode: string; step1: string; step2: string };
        orderInfo: {
            delivery: string;
            name: string;
            email: string;
            message: string;
            orderName: string;
            uuid: string;
            totalPrice: string;
            phone: string;
        };
        products: product[];
    };
}) {
    const [reviewUuid, setReviewUuid] = useState<string>('');
    const [reviewModal, setReviewModal] = useState<boolean>(false);

    const reviewModalOnChange = (bool: boolean, uuid: string) => {
        setReviewModal(bool);
        setReviewUuid(uuid);
    };
    return (
        <>
            <Modal
                isOpen={open}
                ariaHideApp={false}
                onRequestClose={() => onChange()}
                style={{
                    content: {
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%,-50%)',
                        border: '1px solid #ccc',
                        background: '#ccc',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '4px',
                        outline: 'none',
                        padding: '0',
                        width: '80%',
                        height: '500px',
                        minWidth: '300px',
                    },
                }}
            >
                <h2
                    style={{
                        textAlign: 'center',
                        fontSize: '22px',
                        letterSpacing: '-1px',
                        background: '#fff',
                        padding: '10px',
                        marginBottom: '5px',
                    }}
                >
                    주문 상세내역
                </h2>
                <div style={{ background: '#fff', padding: '10px', marginBottom: '5px' }}>
                    <div className="h3_wrap">
                        <h3 style={{ fontSize: '18px', letterSpacing: '-1px' }}>주문번호</h3>
                        <div className="item" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p style={{ marginRight: '5px', color: '#6e6e6e', whiteSpace: 'nowrap' }}>주문 번호</p>
                            <p>{detailInfo.orderInfo.uuid}</p>
                        </div>
                    </div>
                </div>
                <div style={{ background: '#fff', padding: '10px', marginBottom: '5px' }}>
                    <div className="h3_wrap">
                        <h3 style={{ fontSize: '18px', letterSpacing: '-1px' }}>주문이름</h3>
                        <div className="item" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p style={{ marginRight: '5px', color: '#6e6e6e', whiteSpace: 'nowrap' }}>주문 이름</p>
                            <p>{detailInfo.orderInfo.orderName}</p>
                        </div>
                    </div>
                </div>
                <div style={{ padding: '25px 10px', background: '#fff', marginBottom: '5px' }}>
                    <div className="h3_wrap">
                        <h3 style={{ fontSize: '18px', letterSpacing: '-1px' }}>배송지 정보</h3>
                        <div className="item" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p style={{ marginRight: '5px', color: '#6e6e6e', whiteSpace: 'nowrap' }}>받으시는 분</p>
                            <p>{detailInfo.orderInfo.name}</p>
                        </div>
                        <div className="item" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p style={{ marginRight: '5px', color: '#6e6e6e', whiteSpace: 'nowrap' }}>배송지</p>
                            <p>
                                ({detailInfo.orderAddress.zipcode}) {detailInfo.orderAddress.step1}{' '}
                                {detailInfo.orderAddress.step2}
                            </p>
                        </div>
                        <div className="item" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p style={{ marginRight: '5px', color: '#6e6e6e', whiteSpace: 'nowrap' }}>연락처</p>
                            <p>{detailInfo.orderInfo.phone}</p>
                        </div>
                        <div className="item" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p style={{ marginRight: '5px', color: '#6e6e6e', whiteSpace: 'nowrap' }}>배송 메세지</p>
                            <p>{detailInfo.orderInfo.message}</p>
                        </div>
                    </div>
                </div>
                <div style={{ padding: '25px 10px', background: '#fff', marginBottom: '5px' }}>
                    <div className="h3_wrap">
                        <h3 style={{ fontSize: '18px', letterSpacing: '-1px' }}>상품 정보</h3>
                    </div>
                    {detailInfo.products.map(product => (
                        <div
                            className="product-info"
                            key={product.id}
                            style={{
                                display: 'flex',
                                width: '100%',
                                marginBottom: '10px',
                                borderBottom: '1px solid #ccc',
                                padding: '10px 0',
                            }}
                        >
                            <img src={product.rep_images[0].url} alt="thumbnail" style={{ maxWidth: 96 }} />
                            <span
                                className="information"
                                style={{
                                    marginLeft: '10px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    width: '100%',
                                }}
                            >
                                <strong>{product.name}</strong>
                                {/*<p>Yellow | 1개</p>*/}
                                <p style={{ marginBottom: 0 }}>{product.price.string}원</p>
                                <p style={{ marginBottom: 0 }}>{product.quantity.string}개</p>
                                <p style={{ marginBottom: 0 }}>{product.color[0].name}</p>
                                {detailInfo.orderInfo.delivery !== '배송완료' ? (
                                    <div className="review">
                                        <button
                                            type="button"
                                            onClick={() => reviewModalOnChange(true, product.uuid)}
                                            style={{
                                                background: 'rgb(167, 73, 255)',
                                                color: ' rgb(255, 255, 255)',
                                                border: 'none',
                                                height: '40px',
                                            }}
                                        >
                                            리뷰작성
                                        </button>
                                    </div>
                                ) : null}
                            </span>
                        </div>
                    ))}
                </div>
            </Modal>
            <ReviewModal open={reviewModal} onChange={reviewModalOnChange} uuid={reviewUuid} />
        </>
    );
}
