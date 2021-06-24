import React from 'react';
import { BestItemContainer } from '@Src/Styles/MainStyles';

export interface BestItemProps {
    name: string;
    item: itemProps[];
}

interface itemProps {
    img: string;
    title: string;
    price: number;
}

export default function BestItem({ name, item }: BestItemProps) {
    return (
        <BestItemContainer>
            <div className="best_item">
                <h3>{name}</h3>
                <div className="item_container">
                    {item.map((v, i) => (
                        <div className="item" key={i}>
                            <img src={v.img} alt="item_logo" />
                            <div className="item_description">
                                <p className="title">{v.title}</p>
                                <p className="price">{v.price}원</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </BestItemContainer>
    );
}
