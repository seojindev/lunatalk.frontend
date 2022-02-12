import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getNoticeDetail } from '@API';
import { NoticeDetailResponse, ServiceResponse } from 'CommonTypes';

export default function NoticeDetail() {
    const { uuid } = useParams<{ uuid: string }>();
    const navigate = useNavigate();
    const [noticeDetail, setNoticeDetail] = useState<{
        codeName: string;
        title: string;
        content: string;
        image: string[];
        createdAt: string;
    }>({
        codeName: '',
        title: '',
        content: '',
        image: [],
        createdAt: '',
    });
    useEffect(() => {
        getDetail().then().catch();
    }, []);

    const getDetail = async () => {
        if (uuid) {
            const response: ServiceResponse<NoticeDetailResponse> = await getNoticeDetail({ uuid });
            if (response.status) {
                setNoticeDetail({
                    codeName: response.payload.category.code_name,
                    title: response.payload.title,
                    content: response.payload.content,
                    image:
                        response.payload.images.length > 0
                            ? response.payload.images.map(item => {
                                  return item.url;
                              })
                            : [],
                    createdAt: response.payload.created_at.type2,
                });
            }
        }
    };
    return (
        <div className="cart-main-area pt-90 pb-100">
            <div className="container">
                <h3 className="cart-page-title">공지사항</h3>
                <div className="row">
                    <div className="notice_head">
                        <p>
                            <strong>[{noticeDetail.codeName}]</strong>
                            {noticeDetail.title}
                        </p>
                        <p>{noticeDetail.createdAt}</p>
                    </div>
                    <div className="notice_body">
                        <p>{noticeDetail.content}</p>
                        {noticeDetail.image.length > 0
                            ? noticeDetail.image.map((url: string, key: number) => (
                                  <img src={url} key={key} alt="이미지" />
                              ))
                            : null}
                    </div>
                    <div className="btn_wrap">
                        <button type="button" onClick={() => navigate(-1)}>
                            뒤로가기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
