import React from 'react';
import MainSliderBox from './MainSliderBox';
import MainMenuBox from './MainMenuBox';
import MainNotice from '@Page/Mains/Dtls/MainNotice';
import MainBestItem from '@Page/Mains/Dtls/MainBestItem';
import MainNewItem from '@Page/Mains/Dtls/MainNewItem';

export default function Main() {
    return (
        <>
            {/* 메인슬라이더 영역. */}
            <MainSliderBox />
            {/* 메인 카테고리 영역. */}
            <div className="suppoer-area pt-50 pb-50">
                <div className="container">
                    <div className="row">
                        <MainMenuBox />
                    </div>
                </div>
            </div>
            <MainBestItem />
            <MainNewItem />
            {/* 공지사항 및 고객센터 */}
            <div className="notice-area pt-30 pb-50">
                <div className="container">
                    <div className="customer_center">
                        <h3>CUSTOMER CENTER</h3>
                        <p className="df-ft-tel">032-684-1550</p>
                        <strong>운영시간</strong>
                        <p className="df-rep-cstime">
                            평일 오전 09:00 ~ 오후 06:00
                            <br />
                            점심시간 오후 01:00 ~ 오후 02:00
                            <br />토 / 일 / 공휴일 휴무
                        </p>
                    </div>
                    <MainNotice />
                </div>
            </div>
            {/* // 공지사항 및 고객센터 */}
        </>
    );
}
