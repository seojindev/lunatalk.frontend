import React from 'react';
import { ProductBox } from '@Element/Box';

export interface product {
    uuid: string;
    name: string;
    originalPrice: string;
    price: string;
    color: Array<{ id: number; name: string }>;
    review: string;
    url: string;
    badge:
        | Array<{
              id: number;
              name: string;
              image: {
                  id: number;
                  file_name: string;
                  url: string;
              };
          }>
        | [];
}

export default function MainItemListBox({ listName, product }: { listName: string; product: product[] }) {
    return (
        <div className="product-area pb-60">
            <div className="container">
                {listName === 'none' ? null : (
                    <div className="section-title text-center pb-55">
                        <h2>{listName}</h2>
                    </div>
                )}
                <div className="tab-content jump">
                    <div className="tab-pane active" id="product-2">
                        <div className="row">
                            {product.length ? (
                                product.map((item: product) => <ProductBox item={item} key={item.uuid} />)
                            ) : (
                                <h3>상품이 없습니다.</h3>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
