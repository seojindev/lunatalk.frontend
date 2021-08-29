import React from 'react';
import Slider from 'react-slick';
// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sliderList from '@Constants/Slider-list';
import { Link } from 'react-router-dom';

// 슬라이더
const SliderMap: any = sliderList.map(slide => {
    return {
        img: slide.img,
        link: slide.link,
    };
});

export default function MainSliderBox() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Slider {...settings}>
            {SliderMap.map((item: any, n: number) => (
                <div className="slider-height-1" key={n}>
                    <Link to={item.link}>
                        <img src={item.img} alt="img" style={{ width: '100%' }} />
                    </Link>
                </div>
            ))}
        </Slider>
    );
}
