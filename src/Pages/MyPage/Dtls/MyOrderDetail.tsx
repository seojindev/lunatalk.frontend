import React from 'react';

export default function MyOrderDetail() {
    return (
        <div className="my-page-order-detail mb-30">
            <div className="head pb-10 pt-10">
                <h3>나의 주문처리 현황</h3>
            </div>
            <div className="body pb-15 pt-15">
                <div className="item">
                    <strong>입금전</strong>
                    <span className="count">
                        <span>1</span>
                    </span>
                </div>
                <div className="item">
                    <strong>배송 준비중</strong>
                    <span className="count">
                        <span>1</span>
                    </span>
                </div>
                <div className="item">
                    <strong>배송중</strong>
                    <span className="count">
                        <span>1</span>
                    </span>
                </div>
                <div className="item">
                    <strong>배송완료</strong>
                    <span className="count">
                        <span>1</span>
                    </span>
                </div>
            </div>
        </div>
    );
}
