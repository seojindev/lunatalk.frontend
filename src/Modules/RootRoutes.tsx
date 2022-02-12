import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '@Layouts';
import MainPage from '@Page/Mains/MainPage';
import LoginRegisterPage from '@Page/Auths/LoginRegisterPage';
import LoginOutPage from '@Page/Auths/LogoutPage';
import ProductListPage from '@Page/Products/ProductListPage';
import ProductDetailPage from '@Page/Products/ProductDetailPage';
import WishListPage from '@Page/WishList/WishListPage';
import CartPage from '@Page/Cart/CartPage';
import MyPage from '@Page/MyPage/MyPage';
import MyInformationPage from '@Page/MyPage/MyInformationPage';
import SearchListPage from '@Page/Search/SearchListPage';
import NoticePage from '@Page/Notice/NoticePage';
import OrderPage from '@Page/Order/OrderPage';

const RootRoutes = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/auths/login" element={<LoginRegisterPage />} />
                    <Route path="/auths/register" element={<LoginRegisterPage />} />
                    <Route path="/auths/logout" element={<LoginOutPage />} />
                    <Route path="/category/:uuid" element={<ProductListPage />} />
                    <Route path="/product/:uuid" element={<ProductDetailPage />} />
                    <Route path="/wishlist" element={<WishListPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/myPage" element={<MyPage />} />
                    <Route path="/myPage/information" element={<MyInformationPage />} />
                    <Route path="/search/:name" element={<SearchListPage />} />
                    <Route path="/notice/:uuid" element={<NoticePage />} />
                    <Route path="/order" element={<OrderPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RootRoutes;
