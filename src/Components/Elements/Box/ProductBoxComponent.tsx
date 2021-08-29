import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillHeartFill, BsFillBagFill } from 'react-icons/bs';

export default function ProductBoxComponent() {
    return (
        <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
            <div className="product-wrap mb-25">
                <div className="product-img">
                    <a href="product-details.html">
                        <img
                            className="default-img"
                            src="http://lunatalk.co.kr/web/product/big/sjsanup21_64.jpg"
                            alt=""
                        />
                        <img
                            className="hover-img"
                            src="http://lunatalk.co.kr/web/product/big/sjsanup21_64.jpg"
                            alt=""
                        />
                    </a>
                    {/* <span className="pink">-10%</span> */}
                    <div className="product-action">
                        <div className="pro-same-action pro-cart">
                            <Link to="/cart">
                                <BsFillBagFill /> 장바구니 담기
                            </Link>
                        </div>
                        <div className="pro-same-action pro-wishlist">
                            <Link to="/wishlist">
                                <BsFillHeartFill />
                            </Link>
                        </div>
                        {/* <div className="pro-same-action pro-quickview">
                                                    <a
                                                        title="Quick View"
                                                        href="#"
                                                        data-toggle="modal"
                                                        data-target="#exampleModal"
                                                    >
                                                        <i className="pe-7s-look"></i>
                                                    </a>
                                                </div> */}
                    </div>
                </div>
                <div className="product-content text-center">
                    <h3>
                        <a href="product-details.html">빈티지 썸머 쇼퍼백 세트</a>
                        <p className="review-count">리뷰 : 200</p>
                    </h3>
                    <div className="product-option">
                        <span>오렌지</span>
                        <span>블루</span>
                    </div>
                    <div className="product-price">
                        <p className="old">25,000원</p>
                        <p>15,000원</p>
                    </div>
                    <div className="product-icon">
                        <span>
                            <img
                                src="http://www.jogunshop.com/shopimages/jogunshop/prod_icons/37?1626422274"
                                alt="img"
                            />
                        </span>
                        <span>
                            <img
                                src="http://www.jogunshop.com/shopimages/jogunshop/prod_icons/47?1626422241"
                                alt="img"
                            />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
