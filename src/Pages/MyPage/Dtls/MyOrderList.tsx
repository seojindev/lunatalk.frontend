import React from 'react';

export default function MyOrderList() {
    return (
        <div className="my-page-order">
            <div className="head pt-10">
                <ul className="menu">
                    <li className="on pt-10 pb-10">주문 내역 조회</li>
                    <li className="pt-10 pb-10">취소/교환/반품 내역 조회</li>
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
                <div className="item">
                    <div className="product-info">
                        <img
                            src="http://lunatalk.co.kr/web/product/big/sjsanup21_64.jpg"
                            alt="thumbnail"
                            style={{ maxWidth: 96 }}
                        />
                        <div className="information">
                            <strong>빈티지 썸머 쇼퍼백 세트</strong>
                            <p>옵션 : Yellow</p>
                        </div>
                    </div>
                    <div className="order-date">
                        <p>2021-10-23</p>
                    </div>
                    <div className="order-number">
                        <p>202110011136530001</p>
                    </div>
                    <div className="order-count-price">
                        <p className="price">
                            1000원 <span>(1개)</span>
                        </p>
                    </div>
                    <div className="order-status">
                        <div className="status">
                            <p>배송완료</p>
                            <button type="button">배송조회</button>
                        </div>
                        <div className="review">
                            <button type="button">리뷰작성</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="body pb-15 pt-15 mobile">
                <div className="item">
                    <div className="order-status">
                        <strong>배송완료</strong>
                    </div>
                    <div className="order-date">
                        <p>2021-10-23 00:00:00</p>
                    </div>
                    <div className="product-info">
                        <img
                            src="http://lunatalk.co.kr/web/product/big/sjsanup21_64.jpg"
                            alt="thumbnail"
                            style={{ maxWidth: 96 }}
                        />
                        <span className="information">
                            <strong>빈티지 썸머 쇼퍼백 세트</strong>
                            <p>Yellow | 1개</p>
                            <p className="price">35,000원</p>
                        </span>
                    </div>
                    <div className="order-status">
                        <div className="status">
                            <button type="button">배송조회</button>
                        </div>
                        <div className="review">
                            <button type="button">리뷰작성</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
