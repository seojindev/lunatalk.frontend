import React from 'react';

export default function LoginRegisterPage() {
    return (
        <div className="login-register-area pt-100 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-12 ml-auto mr-auto">
                        <div className="login-register-wrapper">
                            <div className="login-register-tab-list nav">
                                <a className="active" data-toggle="tab" href="#lg1">
                                    <h4> 로그인 </h4>
                                </a>
                                <a data-toggle="tab" href="#lg2">
                                    <h4> 회원가입 </h4>
                                </a>
                            </div>
                            <div className="tab-content">
                                <div id="lg1" className="tab-pane active">
                                    <div className="login-form-container">
                                        <div className="login-register-form">
                                            <form action="#" method="post">
                                                <input type="text" name="user-name" placeholder="아이디" />
                                                <input type="password" name="user-password" placeholder="비밀번호" />
                                                <div className="button-box">
                                                    <div className="login-toggle-btn">
                                                        <input type="checkbox" />
                                                        <label>아이디 저장</label>
                                                        <a href="#">아이디/비밀번호 찾기</a>
                                                    </div>
                                                    <button type="submit">
                                                        <span>로그인</span>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div id="lg2" className="tab-pane active">
                                    <div className="login-form-container">
                                        <div className="login-register-form">
                                            <form action="#" method="post">
                                                <input type="text" name="user-name" placeholder="아이디" />
                                                <input type="password" name="user-password" placeholder="비밀번호" />
                                                <input
                                                    type="password"
                                                    name="user-password"
                                                    placeholder="비밀번호 확인"
                                                />
                                                <input type="text" name="user-email" placeholder="이름" />
                                                <div className="select_email">
                                                    <input
                                                        className="customer_email"
                                                        name="user-email"
                                                        type="email"
                                                        placeholder="이메일"
                                                    />
                                                    <span>@</span>
                                                    <select className="email_select" title="이메일 서비스 선택">
                                                        <option value="selected">선택해주세요</option>
                                                        <option value="@gmail.com">gmail.com</option>
                                                    </select>
                                                </div>
                                                <div className="user-phone">
                                                    <input
                                                        type="text"
                                                        maxLength={3}
                                                        name="user-phone"
                                                        placeholder="휴대폰번호"
                                                    />
                                                    <span className="phone_t">-</span>
                                                    <input type="text" maxLength={4} name="user-phone" />
                                                    <span className="phone_t">-</span>
                                                    <input type="text" maxLength={4} name="user-phone" />
                                                    <button type="submit">
                                                        <span>인증번호 발송</span>
                                                    </button>
                                                </div>
                                                <div className="phone-check">
                                                    <input
                                                        className="phone-check"
                                                        type="text"
                                                        maxLength={6}
                                                        name="user-check"
                                                        placeholder="인증번호6자리입력"
                                                    />
                                                    <button type="submit">
                                                        <span>확인</span>
                                                    </button>
                                                </div>
                                                <div className="allagree">
                                                    <p className="allgreen_blk">
                                                        <span className="ck_box">
                                                            <input type="checkbox" className="f_all" name="f_all" />
                                                        </span>
                                                        <label>아래 내용에 모두 동의합니다.</label>
                                                    </p>
                                                    <ul className="agree_blk">
                                                        <li>
                                                            <span className="ck_box">
                                                                <input
                                                                    type="checkbox"
                                                                    className="f_agree1"
                                                                    name="f_agree1"
                                                                />
                                                                <label>이용약관</label>
                                                            </span>

                                                            <a href="#" className="btn_detail_provision">
                                                                자세히보기
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <span className="ck_box">
                                                                <input
                                                                    type="checkbox"
                                                                    className="f_agree2"
                                                                    name="f_agree2"
                                                                />
                                                            </span>
                                                            <label>개인정보 수집 / 이용동의</label>
                                                            <a href="#" className="btn_detail_provision">
                                                                자세히보기
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <span className="ck_box">
                                                                <input
                                                                    type="checkbox"
                                                                    className="f_agree3"
                                                                    name="f_agree4"
                                                                />
                                                            </span>
                                                            <label>만 14세 이상입니다.</label>
                                                        </li>
                                                        <li>
                                                            <span className="ck_box">
                                                                <input
                                                                    type="checkbox"
                                                                    className="f_agree4"
                                                                    name="f_agree5"
                                                                />
                                                            </span>
                                                            <label>마케팅 알림 메일 수신 동의 (선택)</label>
                                                        </li>
                                                        <li>
                                                            <span className="ck_box">
                                                                <input
                                                                    type="checkbox"
                                                                    className="f_agree5"
                                                                    name="f_agree5"
                                                                />
                                                            </span>
                                                            <label>맞춤 혜택 알림 문자 수신 동의 (선택)</label>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="button-box">
                                                    <button type="submit">
                                                        <span>회원가입</span>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
