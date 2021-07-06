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

export const BoardDetailBox = styled.table`
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;

    border-top-color: #788598;

    border-top: 2px solid #12b5bb;
    border-bottom: 1px solid #dedede;
    font-size: 13px;
    margin-top: 18px;

    .blind {
        width: 0px;
        height: 0px;
        overflow: hidden;
    }

    .caption {
        display: table-caption;
        text-align: -webkit-center;
    }

    .colgroup {
        display: table-column-group;
    }

    .tbody {
        display: table-row-group;
        vertical-align: middle;
        border-color: inherit;
    }

    tr {
        display: table-row;
        vertical-align: inherit;
        border-color: inherit;
    }

    table.horizon > tbody > tr > th {
        text-align: left;
    }

    table > tbody > tr > td {
        padding: 4px 30px;
        height: 46px;
        padding: 0 30px;
    }

    table > tbody > tr {
        display: table-row;
        vertical-align: inherit;
        border-color: inherit;
    }

    .tbody-title-tr {
        border-bottom: 1px solid #dedede;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .tbody-contents-tr {
    }

    .tbody-title {
        width: 100%;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    span.view-bbs-title {
        color: #000000;
        font-size: 22px;
    }

    table.table td.view-bbs-contents {
        border-top: 1px solid #dedede;
        padding: 30px;
    }

    table.table > tbody + tbody > tr > th,
    table.table > tbody + tbody > tr > td,
    table.table > tbody > tr + tr > th,
    table.table > tbody > tr + tr > td {
        border-top: 1px solid #ebebea;
    }

    .mrs2 {
        overflow: hidden;
        position: relative;
        // margin: -40px 0 50px;
        padding: 16px 0 16px 10px;
        border-bottom: 1px solid #e5e5e5;
        font-size: 14px;
        line-height: 22px;
    }

    .detail-list-button {
        margin-top: 10px;
        margin-bottom: 10px;
        text-align: center;
    }
`;
