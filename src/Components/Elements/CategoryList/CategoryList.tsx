import React from 'react';
import { CategoryContainer } from '@Src/Styles/MainStyles';
import { Categories } from 'MainTypes';

interface CategoryProps {
    list: Categories;
}

export default function CategoryList({ list }: CategoryProps) {
    if (!list) return null;
    return (
        <CategoryContainer>
            <div className="category">
                <ul>
                    <li
                        style={{
                            background: `url(${list.acc.product_thumb_image}) no-repeat`,
                            backgroundSize: 'cover',
                        }}>
                        <p>ACC</p>
                    </li>
                    <li>
                        <p>CUSTOM GIFT</p>
                    </li>
                    <li
                        style={{
                            background: `url(${list.bag.product_thumb_image}) no-repeat`,
                            backgroundSize: 'cover',
                        }}>
                        <p>Bag</p>
                    </li>
                    <li
                        style={{
                            background: `url(${list.stationery.product_thumb_image}) no-repeat`,
                            backgroundSize: 'cover',
                        }}>
                        <p>Stationery</p>
                    </li>
                    <li
                        style={{
                            background: `url(${list.wallet.product_thumb_image}) no-repeat`,
                            backgroundSize: 'cover',
                        }}>
                        <p>Walert</p>
                    </li>
                </ul>
            </div>
        </CategoryContainer>
    );
}
