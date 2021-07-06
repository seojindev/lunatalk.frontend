import { MainBannerContainer } from '@Src/Styles/MainStyles';
import React from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { RootState } from 'StoreTypes';

export default function MainSlider() {
    const { banner } = useSelector((store: RootState) => ({
        banner: store.main.banner,
    }));
    const settings = {
        dots: false, // 점은 안 보이게
        infinite: true, // 무한으로 즐기게
        slidesToShow: 1, //4장씩 보이게 해주세요
        slidesToScroll: 1, //1장씩 넘어가세요
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,

        responsive: [
            // TODO: 반응형 웹 구현 해야함.
            // {
            //     breakpoint: 1200, // 화면 사이즈 1200px
            //     settings: {
            //         slidesToShow: 3,
            //     },
            // },
        ],
    };
    return (
        <MainBannerContainer>
            <Slider {...settings} className="main_banner">
                {banner.map(data => {
                    return (
                        <div key={data.product_uuid}>
                            <img src={data.product_image} alt={data.product_name} />;
                        </div>
                    );
                })}
            </Slider>
        </MainBannerContainer>
    );
}
