import styled from 'styled-components';

export const LoginStyle = styled.main`
    width: 100%;
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;

    .login__column h2 {
        padding: 30px 0 20px 0;
        font-size: 20px;
        font-weight: bold;
    }

    .login__column {
        width: 400px;
        margin: auto;
    }

    #customer_login {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #customer_login > input {
        width: 100%;
        height: 50px;
        margin-bottom: 15px;
        box-sizing: border-box;
        border-radius: 2px;
        border: 1px solid #bbb;
        padding: 0 10px;
    }

    #customer_login > button {
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

    .idpassword__help {
        display: flex;
        align-items: center;
        width: 100%;
        font-size: 13px;
        color: #333;
    }

    .idpassword__help label {
        width: 50%;
    }

    .idpassword__help .forget {
        width: 50%;
        text-align: right;
    }

    .hr__login {
        width: 100%;
        border-top: 1px solid #ddd;
        text-align: center;
        margin: 35px 0 12px 0;
    }

    .hr__login span {
        position: relative;
        top: -12px;
        display: inline-block;
        background-color: #fff;
        text-align: center;
        font-size: 14px;
        padding: 0 20px;
        color: #aaa;
    }

    #customer_login .snsLogin {
        /* display: block; */
        width: 100%;
        font-size: 14px;
        font-weight: bold;
        color: #333;
    }

    .snsLogin h4 {
        margin-bottom: 15px;
    }

    .btn_kakao_login {
        width: 100%;
        height: 50px;
        background-color: #ffe500;
        color: #393939;
        box-sizing: border-box;
        margin-bottom: 30px;
        font-weight: bold;
        border: 1px solid #ffde00;
        font-size: 15px;
    }
`;
