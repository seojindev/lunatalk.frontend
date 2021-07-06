import React from 'react';
import { MainLayout } from '@Src/Components/Layouts/MainLayouts';
import { BoardDetail } from '@Element/Boards';

export default function NoticeDetailPage() {
    return (
        <>
            <MainLayout>
                <BoardDetail />
            </MainLayout>
        </>
    );
}
