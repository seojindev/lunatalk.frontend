import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer } from '@Src/Styles/CommonStyles';

export default function Header() {
    return (
        <HeaderContainer>
            <div className="header">
                <h1>
                    <Link to={process.env.PUBLIC_URL + '/'}>lunatalk</Link>
                </h1>
                <div className="nav_container">
                    <div className="nav">
                        <ul>
                            <li>
                                <Link to={process.env.PUBLIC_URL + '/'}>HOME</Link>
                            </li>
                            <li>SHOP</li>
                            <li>PRODUCTS</li>
                            <li>PAGES</li>
                            <li>BLOG</li>
                        </ul>
                    </div>
                </div>
                <div className="icon_container">
                    <div className="search">
                        <p>검색</p>
                    </div>
                    <div className="my_page">
                        <p>
                            <Link to={process.env.PUBLIC_URL + '/help/notice/notice-list'}>공지사항</Link>
                        </p>
                    </div>
                    <div className="my_page">
                        <p>my</p>
                    </div>
                    <div className="cart">
                        <p>Cart(0)</p>
                    </div>
                </div>
            </div>
        </HeaderContainer>
    );
}
