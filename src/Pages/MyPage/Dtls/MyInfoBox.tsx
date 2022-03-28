import React from 'react';
import { Link } from 'react-router-dom';

export default function MyInfoBox({ name }: { name: string }) {
    return (
        <div className="my-page-info pt-20 pb-20 mb-30">
            {/*<div>*/}
            {/*    <BsFillPersonFill fontSize={50} />*/}
            {/*</div>*/}
            <div style={{ marginBottom: '10px' }}>
                <img
                    src="https://img.echosting.cafe24.com/skin/base_ko_KR/member/img_member_default.gif"
                    alt=""
                    style={{ maxWidth: '50px', marginRight: '20px' }}
                />
            </div>
            <span>
                <strong>{name}</strong>님 안녕하세요.
                <br />
            </span>
            <span>회원님의 마이페이지 입니다.</span>
            <Link to="/myPage/information">회원정보 수정</Link>
        </div>
    );
}
