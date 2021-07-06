import React from 'react';
import { BoardWrapper, BoardDetailBox } from '@Style/BoardStyle';

export default function NoticeDetail() {
    return (
        <BoardWrapper>
            <BoardDetailBox>
                <div className="top-box">
                    <div className="title-box">
                        <span className="notice-title">공지사항 테스트 입니다.</span>
                    </div>
                    <div className="info-box">
                        <div className="date-wrapper">
                            <span className="notice-date">등록일: 2021-07-06</span>
                        </div>
                        <div className="view-wrapper">
                            <span className="notice-view">조회수: 203</span>
                        </div>
                    </div>
                </div>

                <div className="content-box">
                    <div className="content-wrapper">
                        <div className="notice-content">
                            7일 방송하는 KBS2 예능프로그램 ‘랜선장터’에는 ‘진도의 딸’ 송가인의 지인들이 총출동하며
                            유쾌한 케미스트리를 뽐낼 예정이다.
                            <br />
                            전복을 판매하기 위해 전라남도 진도를 찾은 홍현희는 곳곳에 깔린 송가인 사진과 송가인 명소를
                            보고 감탄을 금치 못한다. <br />
                            이어 전복 채취를 위해 배를 타러 간 송가인은 우연히 중학교 동창을 만나게 되고, 순식간에
                            분위기는 ‘TV는 사랑을 싣고’로 변하게 된다. 진도에서 전복양식업을 하고 있는 송가인의 동창들은
                            바다에서 직접 채취한 최고급 진도 전복의 맛을 선사하며 송가인 뿐만 아니라 홍현희, 신승태를
                            감동케 한다.
                            <br />
                            이어 송가인과 친구들은 20년 전 서로를 또렷이 기억하며 홍현희와 신승태를 놀라게 한다. 특히
                            송가인의 친구는 “송가인은 ‘진도 대통령’이다”라며 고향 진도에서의 그녀의 입지를 확인시켜주며
                            유쾌한 티키타카를 선보인다고.
                            <br />
                            그런가 하면 송가인의 깜짝 만남은 여기에서 끝나지 않는다. 송가인의 중학교 동창에 이어
                            부모님까지 등장한 것. 송가인의 부모님은 딸바보의 면모를 보이는 것은 물론, 진도 전복까지
                            홍보하며 진도에 대한 사랑을 드러내며 시선을 사로잡는다고 해 궁금증을 높이고 있다.
                            <br />
                            이렇듯 홍현희, 송가인, 신승태는 오랜 친구부터 부모님까지 총출동한 복작복작한 전복 판매기로
                            안방극장에 색다른 재미를 선사한다고 해 본방송에 대한 귀추가 주목된다. 이날 밤 9시 30분 방송.
                            <br />
                        </div>
                    </div>
                </div>
                <div className="bottom-button">
                    <button>목록</button>
                </div>
            </BoardDetailBox>
        </BoardWrapper>
    );
}
