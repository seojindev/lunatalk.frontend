import React from 'react';
import { HeaderContainer, FooterContainer } from '@Src/Styles/CommonStyles';
import { MainBannerContainer, CategoryContainer, BestItemContainer } from '@Src/Styles/MainStyles';

interface itemProps {
    img: string;
    title: string;
    price: number;
}

const item: itemProps[] = [
    {
        img: 'https://kblog-storage-s3.s3.ap-northeast-2.amazonaws.com/uploads/1622559197044%20-%20200302-title.jpeg',
        title: '가방',
        price: 3000,
    },
    {
        img: 'https://kblog-storage-s3.s3.ap-northeast-2.amazonaws.com/uploads/1622559197044%20-%20200302-title.jpeg',
        title: '가방',
        price: 3000,
    },
    {
        img: 'https://kblog-storage-s3.s3.ap-northeast-2.amazonaws.com/uploads/1622559197044%20-%20200302-title.jpeg',
        title: '가방',
        price: 3000,
    },
    {
        img: 'https://kblog-storage-s3.s3.ap-northeast-2.amazonaws.com/uploads/1622559197044%20-%20200302-title.jpeg',
        title: '가방',
        price: 3000,
    },
    {
        img: 'https://kblog-storage-s3.s3.ap-northeast-2.amazonaws.com/uploads/1622559197044%20-%20200302-title.jpeg',
        title: '가방',
        price: 3000,
    },
];

export default function MainPage() {
    return (
        <>
            {/* Header */}
            <HeaderContainer>
                <div className="header">
                    <h1>lunatalk</h1>
                    <div className="nav_container">
                        <div className="nav">
                            <ul>
                                <li>HOME</li>
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
                            <p>my</p>
                        </div>
                        <div className="cart">
                            <p>Cart(0)</p>
                        </div>
                    </div>
                </div>
            </HeaderContainer>
            {/* //Header */}
            {/* Main Banner */}
            <MainBannerContainer>
                <div className="main_banner">banner1</div>
            </MainBannerContainer>
            {/* // Main Banner */}
            {/* Category */}
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
            {/* // Category */}
            {/* Best Item */}
            <BestItemContainer>
                <div className="best_item">
                    <h3>Best Item</h3>
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
            {/* // Best Item */}
            {/* Hot Item */}
            <BestItemContainer>
                <div className="best_item">
                    <h3>Hot Item</h3>
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
            {/* // Best Item */}
            {/* Footer */}
            <FooterContainer>
                <div className="footer">
                    <div className="footer_content">
                        <h3>(주)서진산업</h3>
                        <p>대표이사 : 강대용 / 경기도 부천시 고강동 459-6 3층 서진산업</p>
                        <p>사업자등록번호 : 130-86-59053 / 통신판매업 신고 : 2011-경기부천-1500</p>
                        <p>개인정보보호책임자 : 강대용 / lunatalk.helpper@gmail.com</p>
                        <p className="copylight">COPYRIGHT © LUNATALK ALL RIGHTS RESERVED.</p>
                    </div>
                </div>
            </FooterContainer>
            {/* // Footer */}
        </>
    );
}
