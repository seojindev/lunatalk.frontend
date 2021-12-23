import React from 'react';

export default function Order() {
    return (
        <>
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
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="billing-info mb-20">
                                            <label>주소</label>
                                            <div className="billing-search">
                                                <input type="text" placeholder="우편번호" />
                                                <button type="button">검색</button>
                                            </div>
                                            <input
                                                className="billing-address"
                                                placeholder="기본 주소"
                                                type="text"
                                                disabled
                                            />
                                            <input placeholder="나머지 주소" type="text" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="billing-info mb-20 phone">
                                            <label>휴대폰번호</label>
                                            {/* <input type="text" /> */}
                                            <div className="billing-select">
                                                <select id="phone-first">
                                                    <option value="010">010</option>
                                                    <option value="011">011</option>
                                                    <option value="016">016</option>
                                                    <option value="017">017</option>
                                                    <option value="018">018</option>
                                                    <option value="019">019</option>
                                                </select>
                                            </div>
                                            -
                                            <input type="text" />
                                            -
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="billing-info mb-20 address">
                                            <label>이메일 주소</label>
                                            <input type="text" />
                                            @
                                            <input type="text" />
                                            <div className="billing-select">
                                                <select id="email-address">
                                                    <option value="naver.com">naver.com</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="additional-info-wrap">
                                    <h4>배송메세지</h4>
                                    <div className="additional-info">
                                        <textarea name="message"></textarea>
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
                                                <li>
                                                    <span className="order-middle-left">Product Name X 1</span>
                                                    <span className="order-price">15,000원 </span>
                                                </li>
                                                <li>
                                                    <span className="order-middle-left">Product Name X 1</span>
                                                    <span className="order-price">15,000원 </span>
                                                </li>
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
                                                <li>30,000원</li>
                                            </ul>
                                        </div>
                                        <p>상품의 옵션 및 수량 변경은 상품상세 또는 장바구니에서 가능합니다.</p>
                                    </div>
                                </div>
                                <div className="Place-order mt-25">
                                    <a className="btn-hover" href="#">
                                        결제하기
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
