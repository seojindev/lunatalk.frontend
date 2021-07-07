import React from 'react';
import { MainLayout } from '@Src/Components/Layouts/MainLayouts';
import { Link } from 'react-router-dom';
import { BoardWrapper, BoardListBox } from '@Src/Styles/HelpStyle';

export default function NoticeListPage() {
    return (
        <>
            <MainLayout>
                <BoardWrapper>
                    <BoardListBox>
                        <div className="board-title">공지 사항</div>
                        <div className="board-list">
                            <div className="board-list-head">
                                <div className="number">번호</div>
                                <div className="title">제목</div>
                                <div className="writer">글쓴이</div>
                                <div className="date">작성일</div>
                                <div className="view">조회</div>
                            </div>
                            <div className="board-list-body">
                                <div className="board-list-item">
                                    <div className="number">5</div>
                                    <div className="title">
                                        <Link to={process.env.PUBLIC_URL + '/help/notice/123123/detail'}>
                                            오늘부터 가방은 10% 할인 입니다.
                                        </Link>
                                    </div>
                                    <div className="writer">관리자</div>
                                    <div className="date">2021-11-20</div>
                                    <div className="view">111</div>
                                </div>
                                <div className="board-list-item">
                                    <div className="number">4</div>
                                    <div className="title">
                                        <Link to={process.env.PUBLIC_URL + '/help/notice/123123/detail'}>
                                            오늘부터 지갑은 30% 할인입니다.
                                        </Link>
                                    </div>
                                    <div className="writer">관리자</div>
                                    <div className="date">2020-11-12</div>
                                    <div className="view">222</div>
                                </div>
                                <div className="board-list-item">
                                    <div className="number">3</div>
                                    <div className="title">
                                        <Link to={process.env.PUBLIC_URL + '/help/notice/123123/detail'}>
                                            오늘부터 환불은 일절 없습니다.
                                        </Link>
                                    </div>
                                    <div className="writer">관리자</div>
                                    <div className="date">2020-11-02</div>
                                    <div className="view">333</div>
                                </div>
                                <div className="board-list-item">
                                    <div className="number">2</div>
                                    <div className="title">
                                        <Link to={process.env.PUBLIC_URL + '/help/notice/123123/detail'}>
                                            오전에 구입하면 10% 할인 입니다.
                                        </Link>
                                    </div>
                                    <div className="writer">관리자</div>
                                    <div className="date">2019-10-28</div>
                                    <div className="view">222</div>
                                </div>
                                <div className="board-list-item">
                                    <div className="number">1</div>
                                    <div className="title">
                                        <Link to={process.env.PUBLIC_URL + '/help/notice/123123/detail'}>
                                            가방 재고 입고 되었습니다.
                                        </Link>
                                    </div>
                                    <div className="writer">관리자</div>
                                    <div className="date">2019-10-24</div>
                                    <div className="view">111</div>
                                </div>
                                {/* 이건 아이콘으로???? */}
                                <div className="board-paging">
                                    <a href="#" className="button prev">
                                        이전 페이지
                                    </a>
                                    <a href="#" className="page-number on">
                                        1
                                    </a>
                                    <a href="#" className="page-number">
                                        2
                                    </a>
                                    <a href="#" className="page-number">
                                        3
                                    </a>
                                    <a href="#" className="button next">
                                        다음 페이지
                                    </a>
                                </div>
                            </div>
                        </div>
                    </BoardListBox>
                </BoardWrapper>
            </MainLayout>
        </>
    );
}
