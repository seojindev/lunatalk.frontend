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
                            backgroundImage: `url(${list.acc.product_thumb_image})`,
                        }}>
                        <p>ACC</p>
                    </li>
                    <li>
                        <p>CUSTOM GIFT</p>
                    </li>
                    <li
                        style={{
                            backgroundImage: `url(${list.bag.product_thumb_image})`,
                        }}>
                        <p>Bag</p>
                    </li>
                    <li
                        style={{
                            backgroundImage: `url(${list.stationery.product_thumb_image})`,
                        }}>
                        <p>Stationery</p>
                    </li>
                    <li
                        style={{
                            backgroundImage: `url(${list.wallet.product_thumb_image})`,
                        }}>
                        <p>Walert</p>
                    </li>
                </ul>
            </div>
        </CategoryContainer>
    );
}
