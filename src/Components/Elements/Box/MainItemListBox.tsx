import React from 'react';
import { ProductBox } from '@Element/Box';

export interface product {
    uuid: string;
    name: string;
    originalPrice: string;
    price: string;
    color: string;
    review: string;
    url: string;
}

export default function MainItemListBox({ listName, product }: { listName: string; product: product[] }) {
    return (
        <div className="product-area pb-60">
            <div className="container">
                <div className="section-title text-center pb-55">
                    <h2>{listName}</h2>
                </div>
                <div className="tab-content jump">
                    <div className="tab-pane active" id="product-2">
                        <div className="row">
                            {/*TODO: product 구조 확인후 변경*/}
                            {product.map((item: product) => (
                                <ProductBox item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
