import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMainSlideAction } from '@Store/Main';
import { RootState } from 'StoreTypes';
import { MainSlide } from 'CommonTypes';

export default function MainSliderBox() {
    const dispatch = useDispatch();
    const { main_slide } = useSelector((store: RootState) => ({
        main_slide: store.main.main_slide,
    }));
    const [mainSlide, setMainSlide] = useState<{ url: string; link: string; width: number; height: number }[]>([]);

    useEffect(() => {
        dispatch(getMainSlideAction());
    }, []);

    useEffect(() => {
        if (main_slide.length) {
            const mainSlideResult = main_slide.map((item: MainSlide) => {
                return {
                    url: item.image.url,
                    link: item.url.slide_url === '' ? `/product/${item.url.product_uuid}` : item.url.slide_url,
                    width: item.image.width,
                    height: item.image.height,
                };
            });
            setMainSlide(mainSlideResult);
        }
    }, [main_slide]);
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
        <div className="main-slide-wrap">
            <Slider {...settings}>
                {mainSlide.map((item: any, n: number) => (
                    <div className="slider-height-1" key={n}>
                        <Link to={item.link}>
                            <img src={item.url} alt="img" style={{ width: '100%', margin: '0 auto' }} />
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
