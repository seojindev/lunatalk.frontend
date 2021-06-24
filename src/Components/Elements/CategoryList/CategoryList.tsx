import React from 'react';
import { CategoryContainer } from '@Src/Styles/MainStyles';

export default function CategoryList() {
    return (
        <CategoryContainer>
            <div className="category">
                <ul>
                    <li>
                        <p>ACC</p>
                    </li>
                    <li>
                        <p>CUSTOM GIFT</p>
                    </li>
                    <li>
                        <p>Bag</p>
                    </li>
                    <li>
                        <p>Stationery</p>
                    </li>
                    <li>
                        <p>Walert</p>
                    </li>
                </ul>
            </div>
        </CategoryContainer>
    );
}
