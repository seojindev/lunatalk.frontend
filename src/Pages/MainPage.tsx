import React from 'react';
import { MainLayout } from '@Src/Components/Layouts/MainLayouts';
import { MainSlider, CategoryList, BestItem } from '@Elements';
import { RootState } from 'StoreTypes';
import { useSelector } from 'react-redux';

export default function MainPage() {
    const { best_item, hot_item, categories } = useSelector((store: RootState) => ({
        best_item: store.main.best_item,
        hot_item: store.main.hot_item,
        categories: store.main.categories,
    }));
    return (
        <MainLayout>
            {/* 메인 배너 */}
            <MainSlider />
            {/* 카테고리 리스트 */}
            <CategoryList list={categories} />
            {/* 베스트 아이템 */}
            <BestItem item={best_item} name="Best Item" />
            {/* 핫 아이템 */}
            <BestItem item={hot_item} name="Hot Item" />
        </MainLayout>
    );
}
