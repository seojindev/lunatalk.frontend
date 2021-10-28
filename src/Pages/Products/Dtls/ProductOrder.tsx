import React from 'react';
import { BsFillHeartFill } from 'react-icons/bs';

export default function ProductOrder({
    name,
    originalPrice,
    price,
    color,
    wireless,
}: {
    name: string;
    originalPrice: string;
    price: string;
    color: any;
    wireless: any;
}) {
    return (
        <div className="col-lg-6 col-md-6">
            <div className="product-details-content ml-70">
                <h2>{name}</h2>
                <div className="product-details-price">
                    <span>{price}원</span>
                    <span className="old">{originalPrice}원 </span>
                </div>
                <div className="pro-details-rating-wrap">
                    <span>
                        <a href="#">3 리뷰</a>
                    </span>
                </div>
                <div className="pro-details-size-color">
                    {color.length > 0 ? (
                        <select>
                            <option value="">색상을 선택해주세요.</option>
                            {color.map((item: any) => (
                                <option value={item.id} key={item.id}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    ) : null}
                    {wireless.length > 0 ? (
                        <select>
                            <option value="">옵션을 선택해주세요.</option>
                            {wireless.map((item: any) => (
                                <option value={item.id} key={item.id}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    ) : null}
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
