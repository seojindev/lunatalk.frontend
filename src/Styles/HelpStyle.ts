import styled from 'styled-components';

export const BoardWrapper = styled.div`
    width: 1200px;
    height: 570px;
    margin: 0 auto;
`;

export const BoardListBox = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 50px;

    .board-title {
        font-size: 30px;
        font-weight: bold;
        text-align: center;
        padding-top: 1rem;
        padding-bottom: 2rem;
    }

    .board-list-head,
    .board-list-body .board-list-item {
        padding: 10px 0;
        font-size: 0;
    }

    .board-list-head {
        border-top: 2px solid #ccc;
        border-bottom: 1px solid #ccc;
    }

    .board-list-body .board-list-item {
        border-bottom: 1px solid #ccc;
    }

    .board-list-head > div,
    .board-list-body .board-list-item > div {
        display: inline-block;
        text-align: center;
        font-size: 14px;
    }

    .board-list-head > div {
        font-weight: 600;
    }

    .board-list .number {
        width: 10%;
    }

    .board-list .title {
        width: 55%;
    }

    .board-list .title a {
        text-align: center;
        text-decoration: none;
        color: inherit;
    }

    .board-list-body div.title {
        text-align: left;
    }

    .board-list-body div.title a:hover {
        text-decoration: none;
    }

    .board-list .writer {
        width: 10%;
    }

    .board-list .date {
        width: 15%;
    }

    .board-list .view {
        width: 10%;
    }

    .board-paging {
        margin-top: 30px;
        text-align: center;
    }

    .board-paging a {
        display: inline-block;
        text-decoration: none;
        text-align: center;
        text-decoration: none;
        color: inherit;
    }

    .board-paging a.page-number {
        width: 30px;
        height: 30px;
    }

    .board-paging a.page-number:hover {
    }

    .board-paging a.first {
    }

    .board-paging a.prev {
        margin-right: 5px;
    }

    .board-paging a.next {
        margin-left: 5px;
    }

    .board-paging a.last {
    }

    .board-paging a.number {
        margin: 0 5px;
    }

    .board-paging a.number.on {
        color: green;
    }

    .board-paging a.number:hover {
        text-decoration: none;
        color: inherit;
    }
`;

export const BoardDetailBox = styled.div`
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;

    border-top-color: #788598;

    border-top: 2px solid #12b5bb;
    border-bottom: 1px solid #dedede;
    font-size: 13px;
    margin-top: 18px;

    .top-box {
        border-bottom: 1px solid #dedede;
    }

    .title-box {
        width: 100%;
        text-align: center;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }

    .info-box {
        border-bottom: 1px solid #dedede;
    }

    .date-wrapper {
        width: 50%;
        float: left;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }

    .view-wrapper {
        width: 50%;
        float: right;
        text-align: right;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }

    .notice-title-content {
        color: #000000;
        font-size: 22px;
    }

    span.notice-title {
        color: #000000;
        font-size: 22px;
    }

    span.notice-date,
    span.notice-view {
        color: #000000;
        font-size: 14px;
    }

    .content-box {
    }

    .content-wrapper {
        border-top: 1px solid #dedede;
        padding-left: 3rem;
        padding-right: 3rem;
    }

    .notice-content {
        overflow: hidden;
        position: relative;
        padding: 16px 0 16px 10px;
        border-bottom: 1px solid #e5e5e5;
        font-size: 14px;
        line-height: 22px;
    }

    .bottom-button {
        margin-top: 1rem;
        margin-bottom: 1rem;
        text-align: center;
    }
`;

export const FaqWrapper = styled.div`
    width: 1200px;
    min-height: 570px;
    height: 100%;
    margin: 0 auto;
`;

export const FaqListBox = styled.div`
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;

    border-top-color: #788598;

    border-top: 2px solid #12b5bb;
    font-size: 13px;
    margin-top: 18px;

    .faq-title {
        font-size: 30px;
        font-weight: bold;
        text-align: center;
        padding-top: 2rem;
    }

    details {
        font-size: 1rem;
        margin: 2em auto;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        width: 100%;
        background: #ffffff;
        border-radius: 8px;
        position: relative;
        width: 80%;

        .summary-title {
            user-select: none;
        }

        &:hover {
            cursor: pointer;
        }

        .summary-content {
            border-top: 1px solid #e2e8f0;
            cursor: default;
            padding: 1rem;
            font-weight: 300;
            line-height: 1.5;
        }

        summary {
            list-style: none;
            padding: 1rem;

            &:focus {
                outline: none;
            }

            &:hover .summary-chevron-up svg {
                opacity: 1;
            }
        }

        .content-wrapper {
            padding-left: 3rem;
            padding-right: 3rem;
        }

        .notice-content {
            overflow: hidden;
            position: relative;
            padding: 16px 0 16px 10px;
            border-bottom: 1px solid #e5e5e5;
            font-size: 14px;
            line-height: 22px;
        }

        .summary-chevron-up svg {
            opacity: 0.5;
        }

        .summary-chevron-up,
        .summary-chevron-down {
            pointer-events: none;
            position: absolute;
            top: 0.75em;
            right: 1rem;
            background: #ffffff;
        }

        summary::-webkit-details-marker {
            display: none;
        }
    }
`;
