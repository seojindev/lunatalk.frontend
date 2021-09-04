import { ProductBox } from '@Src/Components/Elements/Box';
import React from 'react';

export default function ProductList() {
    return (
        <div className="shop-area pt-95 pb-100">
            <div className="container">
                <div className="row flex-row-reverse">
                    <div className="col-lg-12">
                        <div className="shop-top-bar mb-35">
                            <div className="select-shoing-wrap">
                                <div className="shop-select">
                                    <select>
                                        <option>별점순</option>
                                        <option>이름순</option>
                                        <option>최신순</option>
                                        <option>낮은 가격순</option>
                                        <option>높은 가격순</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="shop-bottom-area">
                            <div className="row">
                                {[...Array(10)].map((x, i) => (
                                    <ProductBox key={i} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
