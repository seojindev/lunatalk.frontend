import React, { useState, useEffect } from 'react';
import { BsSearch, BsPeopleCircle, BsHeart, BsBag } from 'react-icons/bs';
import '@Style/Common/HeaderBar.css';
import { getLocalToken } from '@Helper';

// TODO : 백엔드 개발 완료전 더미데이터로 메뉴를 보여줌.
import menuList from '@Constants/menu-list';
import { Link } from 'react-router-dom';

const menuMap: any = menuList.map(menu => {
    return {
        name: menu.name,
        link: menu.link,
    };
});

export default function MenuBarComponent() {
    const [toggleSelected, setToggleSeleted] = useState<boolean>(false);
    const [toggleAccount, setToggleAccount] = useState<boolean>(false);

    const [loginCkResult, SetloginCkResult] = useState<boolean>(false);

    const handleSelected = () => {
        setToggleSeleted(!toggleSelected);
    };

    const handleAccounted = () => {
        setToggleAccount(!toggleAccount);
    };

    useEffect(() => {
        const funcCheckLogin = async () => {
            const localToken = await getLocalToken();

            if (localToken && localToken.login_state === true) {
                SetloginCkResult(true);
            }
        };

        funcCheckLogin();
    });

    return (
        <header className="header-area header-padding-1 sticky-bar header-res-padding clearfix">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-2 col-lg-2 col-md-6 col-4">
                        <div className="logo" style={{ marginBottom: '10px' }}>
                            <Link to="/" style={{ display: 'block', width: '100%' }}>
                                <img
                                    className="shopieal-logo"
                                    alt=""
                                    src="http://www.dadamungu.com/2011/_DATA/brand/1334711623.jpg"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-8 d-none d-lg-block">
                        <div className="main-menu">
                            <nav>
                                <ul>
                                    {menuMap.map((menu: any, key: number) => (
                                        <li key={key}>
                                            <Link to={menu.link}>{menu.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-6 col-8">
                        <div className="header-right-wrap">
                            <div className="same-style header-search">
                                <a className="search-active" href="#" onClick={handleSelected}>
                                    <BsSearch />
                                </a>
                                <div
                                    className="search-content"
                                    style={toggleSelected ? { display: 'block' } : { display: 'none' }}
                                >
                                    <input type="text" placeholder="Search" onChange={e => console.debug(e)} />
                                    <button className="button-search">
                                        <BsSearch />
                                    </button>
                                </div>
                            </div>
                            <div className="same-style account-satting">
                                <a className="account-satting-active" href="#" onClick={handleAccounted}>
                                    <BsPeopleCircle />
                                </a>
                                <div
                                    className="account-dropdown"
                                    style={toggleAccount ? { display: 'block' } : { display: 'none' }}
                                >
                                    <ul>
                                        {loginCkResult === false && (
                                            <>
                                                <li>
                                                    <Link to="/auths/login">로그인</Link>
                                                </li>
                                                <li>
                                                    <Link to="/auths/register">회원가입</Link>
                                                </li>
                                            </>
                                        )}
                                        <li>
                                            <Link to="/wishlist">장바구니</Link>
                                        </li>
                                        <li>
                                            <Link to="/my_account">나의정보</Link>
                                        </li>
                                        {loginCkResult === true && (
                                            <>
                                                <li>
                                                    <Link to="/auths/logout">로그아웃</Link>
                                                </li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <div className="same-style header-wishlist">
                                <Link to="/wishlist">
                                    <BsHeart />
                                </Link>
                            </div>
                            <div className="same-style cart-wrap">
                                <Link to="/cart">
                                    <BsBag />
                                </Link>
                            </div>
                            {/* TODO: 장바구니 버튼 눌렀을시 나오는 컴포넌트 따로 분리해야함.*/}
                            {/*    <div className="same-style cart-wrap">*/}
                            {/*        <button className="icon-cart">*/}
                            {/*            <i className="pe-7s-shopbag"></i>*/}
                            {/*            <span className="count-style">02</span>*/}
                            {/*        </button>*/}
                            {/*        <div className="shopping-cart-content">*/}
                            {/*            <ul>*/}
                            {/*                <li className="single-shopping-cart">*/}
                            {/*                    <div className="shopping-cart-img">*/}
                            {/*                        <a href="#">*/}
                            {/*                            <img alt="" src="http://dev.media.lunatalk.co.kr/storage/assets/img/cart/cart-1.png" />*/}
                            {/*                        </a>*/}
                            {/*                    </div>*/}
                            {/*                    <div className="shopping-cart-title">*/}
                            {/*                        <h4>*/}
                            {/*                            <a href="#">T- Shart & Jeans </a>*/}
                            {/*                        </h4>*/}
                            {/*                        <h6>Qty: 02</h6>*/}
                            {/*                        <span>$260.00</span>*/}
                            {/*                    </div>*/}
                            {/*                    <div className="shopping-cart-delete">*/}
                            {/*                        <a href="#">*/}
                            {/*                            <i className="fa fa-times-circle"></i>*/}
                            {/*                        </a>*/}
                            {/*                    </div>*/}
                            {/*                </li>*/}
                            {/*                <li className="single-shopping-cart">*/}
                            {/*                    <div className="shopping-cart-img">*/}
                            {/*                        <a href="#">*/}
                            {/*                            <img alt="" src="http://dev.media.lunatalk.co.kr/storage/assets/img/cart/cart-2.png" />*/}
                            {/*                        </a>*/}
                            {/*                    </div>*/}
                            {/*                    <div className="shopping-cart-title">*/}
                            {/*                        <h4>*/}
                            {/*                            <a href="#">T- Shart & Jeans </a>*/}
                            {/*                        </h4>*/}
                            {/*                        <h6>Qty: 02</h6>*/}
                            {/*                        <span>$260.00</span>*/}
                            {/*                    </div>*/}
                            {/*                    <div className="shopping-cart-delete">*/}
                            {/*                        <a href="#">*/}
                            {/*                            <i className="fa fa-times-circle"></i>*/}
                            {/*                        </a>*/}
                            {/*                    </div>*/}
                            {/*                </li>*/}
                            {/*            </ul>*/}
                            {/*            <div className="shopping-cart-total">*/}
                            {/*                <h4>*/}
                            {/*                    Shipping : <span>$20.00</span>*/}
                            {/*                </h4>*/}
                            {/*                <h4>*/}
                            {/*                    Total : <span className="shop-total">$260.00</span>*/}
                            {/*                </h4>*/}
                            {/*            </div>*/}
                            {/*            <div className="shopping-cart-btn btn-hover text-center">*/}
                            {/*                <a className="default-btn" href="cart-page.html">*/}
                            {/*                    view cart*/}
                            {/*                </a>*/}
                            {/*                <a className="default-btn" href="checkout.html">*/}
                            {/*                    checkout*/}
                            {/*                </a>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <div className="mobile_menu_wrap">
                        <ul>
                            {menuMap.map((menu: any, key: number) => (
                                <li key={key}>
                                    <Link to={menu.link}>{menu.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}
