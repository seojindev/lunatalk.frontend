import React, { useEffect, useState } from 'react';
import { MainItemListBox } from '@Element/Box';
import { useDispatch, useSelector } from 'react-redux';
import { getMainNewItemAction } from '@Store/Main';
import { product } from '@Element/Box/MainItemListBox';
import { RootState } from 'StoreTypes';
import { ListItem } from 'CommonTypes';

export default function MainNewItem() {
    const dispatch = useDispatch();
    const [newItem, setNewItem] = useState<product[]>([]);
    const { main_new_item } = useSelector((store: RootState) => ({
        main_new_item: store.main.main_new_item,
    }));
    useEffect(() => {
        dispatch(getMainNewItemAction());
    }, []);

    useEffect(() => {
        if (main_new_item.length > 0) {
            const resultBestItem = main_new_item.map((product: ListItem) => {
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
            setNewItem(resultBestItem);
        }
    }, [main_new_item]);

    return <MainItemListBox listName="NEW ITEM" product={newItem} />;
}
