import { RegisterStyle } from '@Src/Styles/RegisterStyles';
import React from 'react';

export default function RegisterForm() {
    return (
        <RegisterStyle>
            <div className="join__column">
                <h2>회원가입</h2>
                <div className="join__box">
                    <form id="customer_join">
                        <input type="id" id="customer_id" placeholder="아이디" />
                        <input type="password" id="customer_pw" placeholder="비밀번호" />
                        <input type="password" id="customer_pw_ck" placeholder="비밀번호 확인" />
                        <input type="name" id="customer_name" placeholder="이름" />
                        {/* <!-- 이메일입력 --> */}
                        <div className="select__email">
                            <input type="email" id="customer_email" placeholder="이메일" />
                            <span className="email_t">@</span>
                            <select className="email_select select" title="이메일 서비스 선택">
                                <option value="" selected>
                                    선택해 주세요
                                </option>
                                <option value="@gmail.com">gmail.com</option>
                            </select>
                        </div>
                        {/* <!-- 휴대폰인증 --> */}
                        <div className="phone">
                            <input type="text" placeholder="휴대폰" />
                            <span className="phone_t">-</span>
                            <input type="text" />
                            <span className="phone_t">-</span>
                            <input type="text" />
                            <button className="number_send">인증번호 발송</button>
                        </div>
                        {/* <!-- 인증번호 입력 --> */}
                        <div className="number__check">
                            <input type="text" placeholder="SMS로 발송된 인증번호 입력하세요" />
                            <button className="phone_check">확인</button>
                        </div>

                        {/* <!-- 약관전체동의 --> */}
                        <div className="agreement">
                            <div className="check_all">
                                <input type="checkbox" />
                                약관 전체동의
                            </div>
                            <div className="check">
                                <input type="checkbox" />
                                본인은 만 14세 이상입니다.
                                <div className="group_type1">
                                    <input type="checkbox" />
                                    이용약관에 동의합니다.
                                    <button className="view_content">내용보기</button>
                                </div>
                                <div className="group_type2">
                                    <input type="checkbox" />
                                    개인정보 처리방침에 동의합니다.
                                    <button className="view_content">내용보기</button>
                                </div>
                            </div>
                        </div>
                        <button className="lunatalk_join">가입하기</button>
                    </form>
                </div>
            </div>
        </RegisterStyle>
    );
}
