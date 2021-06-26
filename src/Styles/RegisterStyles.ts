import styled from 'styled-components';

export const RegisterStyle = styled.main`
    width: 100%;
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;

    .join__column h2 {
        padding: 30px 0 20px 0;
        font-size: 20px;
        font-weight: bold;
    }

    .join__box {
        width: 400px;
        margin: 0 auto;
    }

    .customer_join {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #customer_join > input {
        width: 100%;
        height: 50px;
        margin-bottom: 15px;
        box-sizing: border-box;
        border: 1px solid #000;
        padding: 0 10px;
        border: 1px solid #bbb;
    }

    .select__email {
        display: flex;
        width: 100%;
        margin-bottom: 15px;
        height: 50px;
        align-items: center;
    }

    .select__email #customer_email {
        width: 50%;
        height: 100%;
        box-sizing: border-box;
        border: 1px solid #bbb;
        padding: 0 10px;
    }

    .select__email .email_t {
        display: block;
        width: 5%;
        text-align: center;
    }

    .select__email .email_select {
        width: 45%;
        box-sizing: border-box;
        height: 100%;
        border: 1px solid #bbb;
        padding: 0 5px;
    }

    .phone {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 15px;
        height: 50px;
        align-items: center;
    }

    .phone > input {
        width: 21.25%;
        height: 100%;
        box-sizing: border-box;
        border: 1px solid #bbb;
        padding: 0 10px;
    }

    .number_send {
        width: 23.25%;
        height: 100%;
        border: 0;
        font-weight: 500;
        color: #fff;
        background-color: #aaa;
    }

    .number__check {
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;
    }

    .number__check input {
        width: 75%;
        height: 50px;
        box-sizing: border-box;
        border: 1px solid #bbb;
        padding: 0 10px;
    }

    .phone_check {
        width: 23%;
        height: 50px;
        border: 0;
        font-weight: 500;
        color: #fff;
        background-color: #aaa;
    }

    .agreement {
        display: flex;
        /* justify-content: space-between; */
        border: 1px solid #bbb;
        padding: 20px;
        margin-bottom: 15px;
        font-size: 13px;
        color: #333;
    }

    .agreement .check_all {
        width: 28%;
        display: flex;
        align-items: center;
    }

    .agreement .check {
        padding: 5px;
    }

    .view_content {
        font-size: 11px;
        margin-left: 5px;
        border: 1px solid #bbb;
        background-color: #fff;
        color: #797979;
        font-weight: 500;
    }

    .group_type1 {
        padding: 7px 0 3px 0;
    }

    .lunatalk_join {
        width: 100%;
        height: 50px;
        background-color: #000;
        color: #fff;

        box-sizing: border-box;
        margin-bottom: 30px;
        font-weight: bold;
        border: 0;
        font-size: 15px;
    }
`;
