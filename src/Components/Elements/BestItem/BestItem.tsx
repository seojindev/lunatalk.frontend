import React from 'react';
import { BestItemContainer } from '@Src/Styles/MainStyles';

export interface BestItemProps {
    name: string;
    item: itemProps[];
}

interface itemProps {
    click_code: string;
    product_name: string;
    product_uuid: string;
    product_price: {
        type1: number;
        type2: string;
    };
    product_image: string;
}

export default function BestItem({ name, item }: BestItemProps) {
    return (
        <BestItemContainer>
            <div className="best_item">
                <h3>{name}</h3>
                <div className="item_container">
                    {item.map(v => (
                        <div className="item" key={v.product_uuid}>
                            <img src={v.product_image} alt="item_logo" />
                            <div className="item_description">
                                <p className="title">{v.product_name}</p>
                                <p className="price">{v.product_price.type2}원</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </BestItemContainer>
    );
}
