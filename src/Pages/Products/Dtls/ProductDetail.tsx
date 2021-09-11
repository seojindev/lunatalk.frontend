import React, { useState } from 'react';
import ProductsRecommend from './ProductsRecommend';
import ProductOrder from '@Page/Products/Dtls/ProductOrder';
import ProductDetailSlider from '@Page/Products/Dtls/ProductDetailSlider';
import ProductOrderInfo from '@Page/Products/Dtls/ProductOrderInfo';
import ProductInformation from '@Page/Products/Dtls/ProductInformation';
import ProductReview from '@Page/Products/Dtls/ProductReview';

export default function ProductDetail() {
    const [tabState, setTabState] = useState<string>('상품정보');

    const handleTabChange = (value: string) => {
        setTabState(value);
    };
    return (
        <>
            <div className="shop-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="product-details">
                                <div className="product-details-img">
                                    <div className="shop-details-tab nav">
                                        <ProductDetailSlider />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ProductOrder />
                    </div>
                </div>
            </div>
            <div className="description-review-area pb-90">
                <div className="container">
                    <div className="description-review-wrapper">
                        <div className="description-review-topbar nav">
                            <p
                                className={tabState === '주문정보' ? 'active' : ''}
                                onClick={() => handleTabChange('주문정보')}
                            >
                                주문정보
                            </p>
                            <p
                                className={tabState === '상품정보' ? 'active' : ''}
                                onClick={() => handleTabChange('상품정보')}
                            >
                                상품정보
                            </p>
                            <p className={tabState === '리뷰' ? 'active' : ''} onClick={() => handleTabChange('리뷰')}>
                                리뷰 (2)
                            </p>
                        </div>
                        <div className="tab-content description-review-bottom">
                            <ProductOrderInfo active={tabState === '주문정보' ? 'active' : ''} />
                            <ProductInformation active={tabState === '상품정보' ? 'active' : ''} />
                            <ProductReview active={tabState === '리뷰' ? 'active' : ''} />
                        </div>
                    </div>
                </div>
            </div>
            <ProductsRecommend />
        </>
    );
}
