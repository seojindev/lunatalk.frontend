import React, { useEffect, useState } from 'react';
import ProductsRecommend from './ProductsRecommend';
import ProductOrder from '@Page/Products/Dtls/ProductOrder';
import ProductDetailSlider from '@Page/Products/Dtls/ProductDetailSlider';
import ProductOrderInfo from '@Page/Products/Dtls/ProductOrderInfo';
import ProductInformation from '@Page/Products/Dtls/ProductInformation';
import ProductReview from '@Page/Products/Dtls/ProductReview';
import { useDispatch, useSelector } from 'react-redux';
import { productDetailAction, productRecommendAction } from '@Store/Product';
import { useParams } from 'react-router-dom';
import { RootState } from 'StoreTypes';
import { CategoryProduct } from 'CommonTypes';
import { product } from '@Element/Box/MainItemListBox';

interface productDetail {
    uuid: string;
    name: string;
    originalPrice: string;
    numberPrice: number;
    price: string;
    quantity: number;
    reviews: any[];
    option: {
        color: {
            id: number;
            name: string;
        }[];
        wireless: {
            id: number;
            name: string;
        }[];
    };
    image: {
        rep: {
            url: string[];
        };
        detail: {
            url: string[];
        };
    };
}

export default function ProductDetail() {
    const dispatch = useDispatch();
    const { uuid } = useParams<{ uuid: string }>();
    const { detail, recommend } = useSelector((store: RootState) => ({
        detail: store.product.detail,
        recommend: store.product.recommend,
    }));
    const [tabState, setTabState] = useState<string>('상품정보');
    const [productDetail, setProductDetail] = useState<productDetail>({
        uuid: '',
        name: '',
        originalPrice: '',
        numberPrice: 0,
        price: '',
        quantity: 0,
        reviews: [],
        option: {
            color: [
                {
                    id: 0,
                    name: '',
                },
            ],
            wireless: [
                {
                    id: 0,
                    name: '',
                },
            ],
        },
        image: {
            rep: {
                url: [],
            },
            detail: {
                url: [],
            },
        },
    });
    const [recommendState, setRecommendState] = useState<product[]>([]);

    const handleTabChange = (value: string) => {
        setTabState(value);
    };

    useEffect(() => {
        setProductDetail({
            uuid: '',
            name: '',
            originalPrice: '',
            price: '',
            numberPrice: 0,
            quantity: 0,
            reviews: [],
            option: {
                color: [
                    {
                        id: 0,
                        name: '',
                    },
                ],
                wireless: [
                    {
                        id: 0,
                        name: '',
                    },
                ],
            },
            image: {
                rep: {
                    url: [],
                },
                detail: {
                    url: [],
                },
            },
        });
        dispatch(productDetailAction({ productUuid: uuid }));
        dispatch(productRecommendAction({ productUuid: uuid }));
    }, []);

    useEffect(() => {
        if (detail) {
            setProductDetail({
                uuid: detail.uuid,
                name: detail.name,
                originalPrice: detail.original_price.string,
                price: detail.price.string,
                numberPrice: detail.price.number,
                quantity: detail.quantity.number,
                reviews: detail.reviews,
                option: {
                    color: detail.options.color,
                    wireless: detail.options.wireless,
                },
                image: {
                    rep: {
                        url: detail.image.rep.map((item: any) => item.url),
                    },
                    detail: {
                        url: detail.image.detail.map((item: any) => item.url),
                    },
                },
            });
        }
    }, [detail]);
    useEffect(() => {
        if (recommend) {
            const resultProductList = recommend.map((product: CategoryProduct) => ({
                uuid: product.uuid,
                name: product.name,
                originalPrice: product.original_price.string,
                price: product.price.string,
                color: product.color,
                review: product.review_count.string,
                url: product.rep_image.url,
                badge: product.badge,
            }));
            setRecommendState(resultProductList);
        }
    }, [recommend]);
    return (
        <>
            <div className="shop-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="product-details">
                                <div className="product-details-img">
                                    <div className="shop-details-tab nav">
                                        <ProductDetailSlider image={productDetail.image.rep.url[0]} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ProductOrder
                            uuid={productDetail.uuid}
                            name={productDetail.name}
                            originalPrice={productDetail.originalPrice}
                            price={productDetail.price}
                            numberPrice={productDetail.numberPrice}
                            color={productDetail.option.color}
                            wireless={productDetail.option.wireless}
                            quantity={productDetail.quantity}
                            reviewCount={productDetail.reviews.length}
                        />
                    </div>
                </div>
            </div>
            <div className="description-review-area pb-90">
                <div className="container">
                    <div className="description-review-wrapper">
                        <div className="description-review-topbar nav">
                            <p
                                className={tabState === '주문정보' ? 'active' : ''}
                                onClick={() => handleTabChange('주문정보')}
                            >
                                주문정보
                            </p>
                            <p
                                className={tabState === '상품정보' ? 'active' : ''}
                                onClick={() => handleTabChange('상품정보')}
                            >
                                상품정보
                            </p>
                            <p className={tabState === '리뷰' ? 'active' : ''} onClick={() => handleTabChange('리뷰')}>
                                리뷰 ({productDetail.reviews.length})
                            </p>
                        </div>
                        <div className="tab-content description-review-bottom">
                            <ProductOrderInfo active={tabState === '주문정보' ? 'active' : ''} />
                            <ProductInformation
                                active={tabState === '상품정보' ? 'active' : ''}
                                image={productDetail.image.detail}
                            />
                            <ProductReview
                                active={tabState === '리뷰' ? 'active' : ''}
                                reviews={productDetail.reviews}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <ProductsRecommend products={recommendState} />
        </>
    );
}
