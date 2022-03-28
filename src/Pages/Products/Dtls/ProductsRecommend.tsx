import React from 'react';
import { product } from '@Element/Box/MainItemListBox';
import { ProductBox } from '@Element/Box';

export default function ProductsRecommend({ products }: { products: product[] }) {
    return (
        <div className="related-product-area pb-95">
            <div className="container">
                <div className="section-title text-center mb-50">
                    <h2>추천 상품</h2>
                </div>
                <div className="related-product-active owl-carousel owl-dot-none" style={{ display: 'block' }}>
                    <div className="row">
                        {products.map((item: product) => (
                            <ProductBox item={item} key={item.uuid} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
