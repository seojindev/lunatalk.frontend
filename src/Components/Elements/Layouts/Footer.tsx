import React from 'react';
import { FooterContainer } from '@Src/Styles/CommonStyles';

export default function Footer() {
    return (
        <FooterContainer>
            <div className="footer">
                <div className="footer_content">
                    <h3>(주)서진산업</h3>
                    <p>대표이사 : 강대용 / 경기도 부천시 고강동 459-6 3층 서진산업</p>
                    <p>사업자등록번호 : 130-86-59053 / 통신판매업 신고 : 2011-경기부천-1500</p>
                    <p>개인정보보호책임자 : 강대용 / lunatalk.helpper@gmail.com</p>
                    <p className="copylight">COPYRIGHT © LUNATALK ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </FooterContainer>
    );
}
