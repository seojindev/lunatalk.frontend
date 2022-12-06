import React, { useEffect, useState } from 'react';
import MyInfoBox from '@Page/MyPage/Dtls/MyInfoBox';
import MyOrderDetail from '@Page/MyPage/Dtls/MyOrderDetail';
import MyOrderList from '@Page/MyPage/Dtls/MyOrderList';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'StoreTypes';
import { getMyOrderInfoAction } from '@Store/MyInformation';
import { MyPageOrderObj } from 'CommonTypes';
import { getAccessToken } from '@Src/Utils/Helper';
import { useNavigate } from 'react-router-dom';

export default function My() {
    const { my } = useSelector((store: RootState) => ({
        my: store.my.my,
    }));
    const [userInfo, setUserInfo] = useState<{ id: number; uuid: string; name: string }>({ id: 0, uuid: '', name: '' });
    const [orderState, setOrderState] = useState<{
        priceBefore: string;
        deliveryBefore: string;
        deliveryIng: string;
        deliveryEnd: string;
    }>({ priceBefore: '0', deliveryBefore: '0', deliveryIng: '0', deliveryEnd: '0' });
    const [orderList, setOrderList] = useState<{ order: MyPageOrderObj[] | []; cancel: MyPageOrderObj[] | [] }>({
        order: [],
        cancel: [],
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const isLogin = getAccessToken();

        if (!isLogin) {
            navigate('/auths/login');
        } else {
            dispatch(getMyOrderInfoAction());
        }
    }, []);

    useEffect(() => {
        if (my && my.user_info && my.user_info.id !== null) {
            setUserInfo({ id: my.user_info.id, uuid: my.user_info.uuid, name: my.user_info.name });
            setOrderState({
                priceBefore: my.order_state.price_before,
                deliveryBefore: my.order_state.delivery_brfore,
                deliveryIng: my.order_state.delivery_ing,
                deliveryEnd: my.order_state.delivery_end,
            });
            setOrderList({ order: my.list.order, cancel: my.list.cancel });
        }
    }, [my]);

    return (
        <div className="suppoer-area pt-50 pb-60">
            <div className="container my-page-wrap">
                <h3>My Page</h3>
                <MyInfoBox name={userInfo.name} />
                <MyOrderDetail state={orderState} />
                <MyOrderList list={orderList} />
            </div>
        </div>
    );
}
