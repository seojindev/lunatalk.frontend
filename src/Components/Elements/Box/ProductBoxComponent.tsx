import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillBagFill } from 'react-icons/bs';
import { product } from '@Element/Box/MainItemListBox';
import { addProductToCart } from '@API';
import _Alert_ from '@_Alert_';

export default function ProductBoxComponent({ item }: { item: product }) {
    const productToCart = async (uuid: string) => {
        const response = await addProductToCart({ productUuid: uuid });
        if (response.status) {
            _Alert_.default({ text: response.payload.message });
        } else {
            _Alert_.default({ text: response.message });
        }
    };
    console.log(item.price);
    return (
        <div className="col-xl-3 col-xs-6 col-md-4 col-lg-3 col-sm-6 col-6">
            <div className="product-wrap mb-25">
                <div className="product-img">
                    <Link to={`/product/${item.uuid}`}>
                        <img className="default-img" src={item.url} alt={item.name} />
                        <img className="hover-img" src={item.url} alt={item.name} />
                    </Link>
                    {/* <span className="pink">-10%</span> */}
                    <div className="product-action">
                        <div className="pro-same-action pro-cart" onClick={() => productToCart(item.uuid)}>
                            <Link to="#">
                                <BsFillBagFill /> 장바구니 담기
                            </Link>
                        </div>
                        {/*<div className="pro-same-action pro-wishlist">*/}
                        {/*    <Link to="/wishlist">*/}
                        {/*        <BsFillHeartFill />*/}
                        {/*    </Link>*/}
                        {/*</div>*/}
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
                        <Link to={`/product/${item.uuid}`}>{item.name}</Link>
                        <p className="review-count">리뷰 : {item.review}</p>
                    </h3>
                    {item.color && typeof item.color === 'object' && item.color.length > 0 ? (
                        <div className="product-option">
                            {item.color.map(item => (
                                <span key={item.id}>{item.name}</span>
                            ))}
                        </div>
                    ) : null}
                    <div className="product-price">
                        <p className="old">{item.originalPrice}원</p>
                        <p>{item.price}원</p>
                    </div>
                    <div className="product-icon">
                        {item.badge && item.badge.length > 0
                            ? item.badge.map(item => (
                                  <span key={item.id}>
                                      <img src={item.image.url} alt={item.name} />
                                  </span>
                              ))
                            : null}
                    </div>
                </div>
            </div>
        </div>
    );
}
