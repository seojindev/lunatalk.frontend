/* eslint-disable no-unused-vars */
import { RegisterStyle } from '@Src/Styles/RegisterStyles';
import { CodeItem } from 'CommonTypes';
import React from 'react';
import { CheckboxData, RegisterData } from 'RegisterTypes';

interface RegisterFormProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onPhoneAuth: () => void;
    onPhoneAuthConfirm: () => void;
    checkboxOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    registerCheckbox: CheckboxData;
    data: RegisterData;
    emailAddress: CodeItem[];
}

export default function RegisterForm({
    onChange,
    onSubmit,
    data,
    registerCheckbox,
    checkboxOnChange,
    emailAddress,
    onPhoneAuth,
    onPhoneAuthConfirm,
}: RegisterFormProps) {
    return (
        <RegisterStyle>
            <div className="join__column">
                <h2>회원가입</h2>
                <div className="join__box">
                    <form id="customer_join" onSubmit={onSubmit}>
                        <input
                            type="id"
                            id="customer_id"
                            placeholder="아이디"
                            onChange={e => onChange(e)}
                            value={data.user_id}
                            name="user_id"
                        />
                        <input
                            type="password"
                            id="customer_pw"
                            placeholder="비밀번호"
                            onChange={e => onChange(e)}
                            value={data.user_password}
                            name="user_password"
                        />
                        <input
                            type="password"
                            id="customer_pw_ck"
                            placeholder="비밀번호 확인"
                            onChange={e => onChange(e)}
                            value={data.user_password_confirm}
                            name="user_password_confirm"
                        />
                        <input
                            type="name"
                            id="customer_name"
                            placeholder="이름"
                            onChange={e => onChange(e)}
                            value={data.user_nickname}
                            name="user_nickname"
                        />
                        {/* <!-- 이메일입력 --> */}
                        <div className="select__email">
                            <input
                                type="text"
                                id="customer_email"
                                placeholder="이메일"
                                onChange={e => onChange(e)}
                                value={data.user_email}
                                name="user_email"
                            />
                            <span className="email_t">@</span>
                            <select
                                className="email_select select"
                                title="이메일 서비스 선택"
                                name="user_email_select"
                                // eslint-disable-next-line prettier/prettier
                                onChange={e => onChange(e)}
                                value={data.user_email_select}
                            >
                                <option value="">선택해 주세요</option>
                                {/* <option value="@gmail.com">gmail.com</option> */}
                                {emailAddress.map(address => (
                                    <option value={address.code_name} key={address.code_id}>
                                        {address.code_name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {data.auth_confirm ? (
                            <p className="authConfirmText">인증이 완료되었습니다.</p>
                        ) : (
                            <>
                                {/* <!-- 휴대폰인증 --> */}
                                <div className="phone">
                                    <input
                                        type="text"
                                        placeholder="휴대폰"
                                        name="first"
                                        onChange={e => onChange(e)}
                                        value={data.first}
                                    />
                                    <span className="phone_t">-</span>
                                    <input type="text" name="second" onChange={e => onChange(e)} value={data.second} />
                                    <span className="phone_t">-</span>
                                    <input type="text" name="third" onChange={e => onChange(e)} value={data.third} />
                                    <button className="number_send" type="button" onClick={onPhoneAuth}>
                                        {data.index !== null ? '재전송' : '인증번호 발송'}
                                    </button>
                                </div>
                                {/* <!-- 인증번호 입력 --> */}
                                <div className="number__check">
                                    <input
                                        type="text"
                                        placeholder="SMS로 발송된 인증번호 입력하세요"
                                        onChange={e => onChange(e)}
                                        value={data.auth_code}
                                        name="auth_code"
                                    />
                                    <button className="phone_check" type="button" onClick={onPhoneAuthConfirm}>
                                        확인
                                    </button>
                                </div>
                            </>
                        )}

                        {/* <!-- 약관전체동의 --> */}
                        <div className="agreement">
                            <div className="check_all">
                                <input
                                    type="checkbox"
                                    name="All"
                                    id="All"
                                    onChange={e => checkboxOnChange(e)}
                                    checked={
                                        registerCheckbox.checkbox1 &&
                                        registerCheckbox.checkbox2 &&
                                        registerCheckbox.checkbox3
                                            ? true
                                            : false
                                    }
                                />
                                <label htmlFor="All">약관 전체동의</label>
                            </div>
                            <div className="check">
                                <input
                                    type="checkbox"
                                    name="checkbox1"
                                    id="checkbox1"
                                    onChange={e => checkboxOnChange(e)}
                                    checked={registerCheckbox.checkbox1}
                                />
                                <label htmlFor="checkbox1">본인은 만 14세 이상입니다.</label>
                                <div className="group_type1">
                                    <input
                                        type="checkbox"
                                        onChange={e => checkboxOnChange(e)}
                                        checked={registerCheckbox.checkbox2}
                                        name="checkbox2"
                                        id="checkbox2"
                                    />
                                    <label htmlFor="checkbox2">이용약관에 동의합니다.</label>
                                    <button className="view_content">내용보기</button>
                                </div>
                                <div className="group_type2">
                                    <input
                                        type="checkbox"
                                        onChange={e => checkboxOnChange(e)}
                                        checked={registerCheckbox.checkbox3}
                                        name="checkbox3"
                                        id="checkbox3"
                                    />
                                    <label htmlFor="checkbox3">개인정보 처리방침에 동의합니다.</label>
                                    <button className="view_content">내용보기</button>
                                </div>
                            </div>
                        </div>
                        <button className="lunatalk_join" type="submit">
                            가입하기
                        </button>
                    </form>
                </div>
            </div>
        </RegisterStyle>
    );
}
