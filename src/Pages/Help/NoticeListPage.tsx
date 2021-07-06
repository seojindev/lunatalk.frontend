import React from 'react';
import { MainLayout } from '@Src/Components/Layouts/MainLayouts';
import { BoardList } from '@Element/Boards';

export default function NoticeListPage() {
    return (
        <>
            <MainLayout>
                <BoardList />
            </MainLayout>
        </>
    );
}
