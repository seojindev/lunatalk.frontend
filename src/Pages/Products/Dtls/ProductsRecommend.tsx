import React from 'react';

export default function ProductsRecommend() {
    return (
        <div className="related-product-area pb-95">
            <div className="container">
                <div className="section-title text-center mb-50">
                    <h2>추천 상품</h2>
                </div>
                <div className="related-product-active owl-carousel owl-dot-none" style={{ display: 'block' }}>
                    <div className="row">
                        {/*상품 리스트*/}
                        {/*{[...Array(4)].map((x, i) => (*/}
                        {/*    <ProductBox key={i} />*/}
                        {/*))}*/}
                    </div>
                </div>
            </div>
        </div>
    );
}
