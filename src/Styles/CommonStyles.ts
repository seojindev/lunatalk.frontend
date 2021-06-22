import styled from 'styled-components';

export const HeaderContainer = styled.div`
    width: 100%;
    height: 75px;
    .header {
        width: 1200px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;

        h1 img {
            width: 100%;
            display: block;
        }
        .nav_container {
            display: flex;
            align-items: center;
            ul {
                display: flex;
                li {
                    padding: 0 1rem;
                }
            }
        }
        .icon_container {
            display: flex;
            div {
                padding: 0 1rem;
            }
        }
    }
`;

export const FooterContainer = styled.div`
    width: 100%;
    height: 100%;
    border-top: 1px solid #eee;
    padding: 1.5rem 0;
    .footer {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        .logo {
            width: 30%;
            img {
                width: 100%;
                display: block;
            }
        }
        .footer_content {
            width: 70%;
            letter-spacing: -1px;
            h3 {
                width: 100%;
                font-size: 18px;
                margin-bottom: 1rem;
            }
            p {
                width: 100%;
                font-size: 14px;
                margin-bottom: 0.5rem;
            }
            .copylight {
                font-weight: 900;
            }
        }
    }
`;
