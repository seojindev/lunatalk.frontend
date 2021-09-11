import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ProductDetailSlider() {
    // const settings = {
    //     dots: true, // 점은 안 보이게
    //     infinite: true, // 무한으로 즐기게
    //     speed: 500,
    //     slidesToShow: 1, //4장씩 보이게 해주세요
    //     slidesToScroll: 1, //1장씩 넘어가세요
    // };
    return (
        // <Slider {...settings}>
        //     <div style={{ width: '100%' }}>
        //         <img
        //             src="http://lunatalk.co.kr/web/product/big/sjsanup21_64.jpg"
        //             alt="img"
        //             style={{ display: 'block', width: '100%' }}
        //         />
        //     </div>
        //     <div style={{ width: '100%' }}>
        //         <img
        //             src="http://lunatalk.co.kr/web/product/big/sjsanup21_95.jpg"
        //             alt="img"
        //             style={{ display: 'block', width: '100%' }}
        //         />
        //     </div>
        //     <div style={{ width: '100%' }}>
        //         <img
        //             src="http://lunatalk.co.kr/web/product/big/sjsanup21_104.jpg"
        //             alt="img"
        //             style={{ display: 'block', width: '100%' }}
        //         />
        //     </div>
        // </Slider>
        // TODO: slider로 적용시 사이즈가 지멋대로 됨... 원인파악중
        <div style={{ width: '100%' }}>
            <img
                src="http://lunatalk.co.kr/web/product/big/sjsanup21_64.jpg"
                alt="img"
                style={{ display: 'block', width: '100%' }}
            />
        </div>
    );
}
