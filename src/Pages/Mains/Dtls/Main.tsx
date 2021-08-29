import React from 'react';
import MainSliderBox from './MainSliderBox';
import menuList from '@Constants/menu-list';
import MainMenuBox from './MainMenuBox';
import MainItemListBox from './MainItemListBox';

const menuMap: any = menuList.map(menu => {
    return {
        name: menu.name,
        link: menu.link,
    };
});

export default function Main() {
    return (
        <>
            {/* 메인슬라이더 영역. */}
            <MainSliderBox />
            {/* 메인 카테고리 영역. */}
            <div className="suppoer-area pt-100 pb-60">
                <div className="container">
                    <div className="row">
                        {menuMap.map((item: any, n: number) => (
                            <MainMenuBox key={n} categoryName={item.name} categoryLink={item.link} />
                        ))}
                    </div>
                </div>
            </div>
            {/*TODO: Product Item 구조 확인후 변경*/}
            <MainItemListBox listName="Best Item" />
            <MainItemListBox listName="New Item" />
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
                    <div className="notice_center">
                        <h3>NOTICE</h3>
                        <div className="notice_column">
                            <p className="title">오픈중입니다.</p>
                            <p className="day">2021-07-23</p>
                        </div>
                        <div className="notice_column">
                            <p className="title">오픈중입니다.</p>
                            <p className="day">2021-07-23</p>
                        </div>
                        <div className="notice_column">
                            <p className="title">오픈중입니다.</p>
                            <p className="day">2021-07-23</p>
                        </div>
                        <div className="notice_column">
                            <p className="title">오픈중입니다.</p>
                            <p className="day">2021-07-23</p>
                        </div>
                        <div className="notice_column">
                            <p className="title">오픈중입니다.</p>
                            <p className="day">2021-07-23</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* // 공지사항 및 고객센터 */}
        </>
    );
}
