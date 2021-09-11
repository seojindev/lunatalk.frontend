import React from 'react';
import { BsFillHeartFill } from 'react-icons/bs';

export default function ProductOrder() {
    return (
        <div className="col-lg-6 col-md-6">
            <div className="product-details-content ml-70">
                <h2>빈티지 썸머 쇼퍼백 세트</h2>
                <div className="product-details-price">
                    <span>15,000원</span>
                    <span className="old">20,000원 </span>
                </div>
                <div className="pro-details-rating-wrap">
                    <span>
                        <a href="#">3 리뷰</a>
                    </span>
                </div>
                <div className="pro-details-size-color">
                    <select>
                        <option value="">색상을 선택해주세요.</option>
                        <option value="">오렌지</option>
                        <option value="">블루</option>
                    </select>
                    <select>
                        <option value="">옵션을 선택해주세요.</option>
                        <option value="">오렌지</option>
                        <option value="">블루</option>
                    </select>
                </div>
                <div className="btn_wrap">
                    <button type="button" className="large btn-hover">
                        구매하기
                    </button>
                    <button type="button" className="large btn-hover">
                        장바구니
                    </button>
                    <button type="button" className="btn-favor">
                        <BsFillHeartFill />
                    </button>
                </div>
            </div>
        </div>
    );
}
