import React, { useEffect, useState } from 'react';
import { MainItemListBox } from '@Element/Box';
import { useDispatch, useSelector } from 'react-redux';
import { getMainBestItemAction } from '@Store/Main';
import { RootState } from 'StoreTypes';
import { product } from '@Element/Box/MainItemListBox';
import { ListItem } from 'CommonTypes';

export default function MainBestItem() {
    const dispatch = useDispatch();
    const [bestItem, setBestItem] = useState<product[]>([]);
    const { main_best_item } = useSelector((store: RootState) => ({
        main_best_item: store.main.main_best_item,
    }));
    useEffect(() => {
        dispatch(getMainBestItemAction());
    }, []);

    useEffect(() => {
        if (main_best_item.length > 0) {
            const resultBestItem = main_best_item.map((product: ListItem) => {
                return {
                    uuid: product.product.uuid,
                    name: product.product.name,
                    originalPrice: product.product.original_price.string,
                    price: product.product.price.string,
                    color: product.product.color,
                    review: product.product.review_count.string,
                    url: product.product.rep_image.url,
                    badge: product.product.badge,
                };
            });
            setBestItem(resultBestItem);
        }
    }, [main_best_item]);

    return <MainItemListBox listName="BEST ITEM" product={bestItem} />;
}
