import React from 'react';

interface MainMenuBoxProps {
    categoryName: string;
}

export default function MainMenuBox({ categoryName }: MainMenuBoxProps) {
    return (
        <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="support-wrap mb-30 support-1">
                {/* <div className="support-icon">
                                    <img className="animated" src="http://dev.media.lunatalk.co.kr/storage/assets/img/icon-img/support-1.png" alt="" />
                                </div> */}
                <div className="support-content">
                    <h5>{categoryName}</h5>
                    <p>이미지 적용 될 구간</p>
                </div>
            </div>
        </div>
    );
}
