import styled from 'styled-components';

export const MainBannerContainer = styled.div`
    width: 100%;
    height: 100%;
    margin-bottom: 1rem;
    .main_banner {
        width: 1200px;
        height: 570px;
        // background: #eee;
        margin: 0 auto;
    }
    .slick-next {
        width: 50px;
        height: 50px;
        right: 20px;
        z-index: 1;
        &:before {
            font-size: 50px;
            color: #333;
        }
    }
    .slick-prev {
        width: 50px;
        height: 50px;
        left: 20px;
        z-index: 1;
        &:before {
            font-size: 50px;
            color: #333;
        }
    }
`;

export const CategoryContainer = styled.div`
    width: 100%;
    margin-bottom: 100px;
    .category {
        width: 1200px;
        margin: 0 auto;
        ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            li {
                width: 19%;
                height: 250px;
                background: #eee;
                position: relative;
                p {
                    position: absolute;
                    width: 100%;
                    height: 70px;
                    line-height: 70px;
                    background: rgba(255, 255, 255, 0.5);
                    bottom: 20%;
                    left: 0;
                    text-align: center;
                    font-size: 20px;
                    font-weight: 600;
                    letter-spacing: -1px;
                }
            }
        }
    }
`;

export const BestItemContainer = styled.div`
    width: 100%;
    margin-bottom: 100px;
    .best_item {
        width: 1200px;
        margin: 0 auto;
        h3 {
            text-align: center;
            font-size: 32px;
            letter-spacing: -1px;
            margin-bottom: 50px;
        }
        .item_container {
            display: flex;
            justify-content: space-between;
            .item {
                width: 19%;
                border: 1px solid #eee;
                img {
                    width: 100%;
                }
                .item_description {
                    padding: 1rem;
                    font-size: 15px;
                    letter-spacing: -1px;
                    .title {
                        margin-bottom: 10px;
                    }
                    .price {
                        font-weight: 600;
                    }
                }
            }
        }
    }
`;
