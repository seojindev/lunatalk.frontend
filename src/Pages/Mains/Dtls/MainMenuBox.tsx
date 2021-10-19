import React from 'react';
import { Link } from 'react-router-dom';

export default function MainMenuBox({ categoryName, categoryLink }: { categoryName: string; categoryLink: string }) {
    return (
        <div className="col-lg-3 col-md-6 col-sm-6">
            <Link to={categoryLink}>
                <div className="support-wrap mb-30 support-1">
                    {/* <div className="support-icon">
                                    <img className="animated" src="http://dev.media.lunatalk.co.kr/storage/assets/img/icon-img/support-1.png" alt="" />
                                </div> */}
                    <div className="support-content">
                        <h5>{categoryName}</h5>
                        <p>이미지 적용 될 구간</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}
