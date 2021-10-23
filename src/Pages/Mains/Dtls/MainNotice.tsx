import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMainNoticeAction } from '@Store/Main';
import { RootState } from 'StoreTypes';
import { MainNotice as MainNoticeTypes } from 'CommonTypes';
import { Link } from 'react-router-dom';

export default function MainNotice() {
    const dispatch = useDispatch();
    const { main_notice } = useSelector((store: RootState) => ({
        main_notice: store.main.main_notice,
    }));
    const [mainNoticeState, setMainNoticeState] = useState<
        { title: string; uuid: string; createdAt: string; category: string }[]
    >([]);
    useEffect(() => {
        dispatch(getMainNoticeAction());
    }, []);

    useEffect(() => {
        if (main_notice.length) {
            const resultMainNotice = main_notice.map((notice: MainNoticeTypes) => {
                return {
                    title: notice.title,
                    uuid: notice.uuid,
                    category: notice.category.code_name,
                    createdAt: notice.created_at,
                };
            });
            setMainNoticeState(resultMainNotice);
        }
    }, [main_notice]);
    return (
        <div className="notice_center">
            <h3>NOTICE</h3>
            {mainNoticeState.length === 0 ? (
                <h3 style={{ textAlign: 'center', paddingBottom: '15px' }}>등록된 공지사항이 없습니다.</h3>
            ) : (
                mainNoticeState.map((notice: { title: string; uuid: string; category: string; createdAt: string }) => {
                    return (
                        <Link to={`notice/${notice.uuid}`}>
                            <div className="notice_column" key={notice.uuid}>
                                <p className="title">
                                    <strong>[{notice.category}]</strong> {notice.title}
                                </p>
                                <p className="day">{notice.createdAt}</p>
                            </div>
                        </Link>
                    );
                })
            )}
        </div>
    );
}
