import React from 'react';
import { MainLayout } from '@Src/Components/Layouts/MainLayouts';
import { MainSlider, CategoryList, BestItem } from '@Elements';

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
        <MainLayout>
            {/* 메인 배너 */}
            <MainSlider />
            {/* 카테고리 리스트 */}
            <CategoryList />
            {/* 베스트 아이템 */}
            <BestItem item={item} name="Best Item" />
            {/* 핫 아이템 */}
            <BestItem item={item} name="Hot Item" />
        </MainLayout>
    );
}
