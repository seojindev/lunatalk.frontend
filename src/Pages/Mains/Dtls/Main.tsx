import React from 'react';
import MainSliderBox from './MainSliderBox';

export default function Main() {
    return (
        <>
            <MainSliderBox />
            <div className="suppoer-area pt-100 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="support-wrap mb-30 support-1">
                                {/* <div className="support-icon">
                                    <img className="animated" src="http://dev.media.lunatalk.co.kr/storage/assets/img/icon-img/support-1.png" alt="" />
                                </div> */}
                                <div className="support-content">
                                    <h5>ACC</h5>
                                    <p>이미지 적용 될 구간</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="support-wrap mb-30 support-2">
                                {/* <div className="support-icon">
                                    <img className="animated" src="http://dev.media.lunatalk.co.kr/storage/assets/img/icon-img/support-2.png" alt="" />
                                </div> */}
                                <div className="support-content">
                                    <h5>BAG</h5>
                                    <p>이미지 적용 될 구간</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="support-wrap mb-30 support-3">
                                {/* <div className="support-icon">
                                    <img className="animated" src="http://dev.media.lunatalk.co.kr/storage/assets/img/icon-img/support-3.png" alt="" />
                                </div> */}
                                <div className="support-content">
                                    <h5>Stationery</h5>
                                    <p>이미지 적용 될 구간</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="support-wrap mb-30 support-4">
                                {/* <div className="support-icon">
                                    <img className="animated" src="http://dev.media.lunatalk.co.kr/storage/assets/img/icon-img/support-4.png" alt="" />
                                </div> */}
                                <div className="support-content">
                                    <h5>Wallet</h5>
                                    <p>이미지 적용 될 구간</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
