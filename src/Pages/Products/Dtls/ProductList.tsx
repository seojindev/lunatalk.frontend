import React, { useEffect, useState } from 'react';
import { MainItemListBox } from '@Element/Box';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'StoreTypes';
import { CategoryProduct } from 'CommonTypes';
import { product } from '@Element/Box/MainItemListBox';
import { categoryListAction } from '@Store/Category';
import { useParams } from 'react-router-dom';

export default function ProductList() {
    const dispatch = useDispatch();
    const { uuid } = useParams<{ uuid: string }>();
    const { products } = useSelector((store: RootState) => ({
        products: store.category.products?.products,
    }));
    const [product, setProduct] = useState<product[]>([]);
    const [order, setOrder] = useState<{ category: string | undefined; orderNumber: string }>({
        orderNumber: '6000010',
        category: uuid,
    });
    useEffect(() => {
        setProduct([]);
        if (uuid) {
            setOrder({ orderNumber: '6000010', category: uuid });
        }
    }, [uuid]);

    useEffect(() => {
        if (order.category)
            dispatch(categoryListAction({ categoryUuid: order.category, orderNumber: order.orderNumber }));
    }, [order]);

    const handlerOrderSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setOrder({ ...order, orderNumber: value });
    };
    useEffect(() => {
        if (products) {
            const resultProductList = products.map((product: CategoryProduct) => {
                return {
                    uuid: product.uuid,
                    name: product.name,
                    originalPrice: product.original_price.string,
                    price: product.price.string,
                    color: product.color,
                    review: product.review_count.string,
                    url: product.rep_image.url,
                    badge: product.badge,
                };
            });
            setProduct(resultProductList);
        }
    }, [products]);
    return (
        <div className="shop-area pt-95 pb-100">
            <div className="container">
                <div className="row flex-row-reverse">
                    <div className="col-lg-12">
                        <div className="shop-top-bar mb-35">
                            <div className="select-shoing-wrap">
                                <div className="shop-select">
                                    <select value={order.orderNumber} onChange={e => handlerOrderSelect(e)}>
                                        <option value="6000010">이름순</option>
                                        <option value="6000020">최신순</option>
                                        <option value="6000030">낮은 가격순</option>
                                        <option value="6000040">높은 가격순</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="shop-bottom-area">
                            <div className="row">
                                <MainItemListBox listName="none" product={product} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
