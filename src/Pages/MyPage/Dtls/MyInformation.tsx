import React, { useEffect, useState } from 'react';
import { CodeItem } from 'CommonTypes';
import { useSelector } from 'react-redux';
import { RootState } from 'StoreTypes';
import { useHistory } from 'react-router-dom';

export default function MyInformation() {
    const history = useHistory();
    const [emailCodes, setEmailCodes] = useState<CodeItem[]>([]);
    const { storeCommonCodes } = useSelector((store: RootState) => ({
        storeCommonCodes: store.app.common.codes,
    }));

    // 공통 코드에서 이메일 리스트 가지고 오기.
    useEffect(() => {
        const funcSetEmailCodes = (codes: CodeItem[]) => {
            setEmailCodes(codes);
        };

        if (storeCommonCodes) {
            funcSetEmailCodes(storeCommonCodes.code_group['400']);
        }
    }, [storeCommonCodes]);

    return (
        <div className="suppoer-area pt-50 pb-60">
            <div className="container my-page-wrap my-page-information-wrap">
                <div className="header">
                    <h3 className="center">
                        <strong>회원정보</strong>
                    </h3>
                </div>
                <div className="body">
                    <div className="column">
                        <div className="left">
                            <p>
                                <span className="empha">*</span>
                                <strong>이름</strong>
                            </p>
                        </div>
                        <div className="right">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="column">
                        <div className="left">
                            <p>
                                <span className="empha">*</span>
                                <strong>아이디</strong>
                            </p>
                        </div>
                        <div className="right">
                            <p>kkw3192</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="left">
                            <p>
                                <span className="empha">*</span>
                                <strong>비밀번호</strong>
                            </p>
                        </div>
                        <div className="right">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="column">
                        <div className="left">
                            <p>
                                <span className="empha">*</span>
                                <strong>비밀번호 확인</strong>
                            </p>
                        </div>
                        <div className="right">
                            <input type="text" />
                        </div>
                    </div>
                    <div className="column">
                        <div className="left">
                            <p>
                                <span className="empha">*</span>
                                <strong>우편번호</strong>
                            </p>
                        </div>
                        <div className="right">
                            <input type="text" className="address-number" />
                            <button type="button" className="information-button">
                                검색
                            </button>
                        </div>
                    </div>
                    <div className="column">
                        <div className="left">
                            <p>
                                <span className="empha">*</span>
                                <strong>주소</strong>
                            </p>
                        </div>
                        <div className="right">
                            <input type="text" className="address" />
                        </div>
                    </div>
                    <div className="column">
                        <div className="left">
                            <p>
                                <span className="empha">*</span>
                                <strong>상세주소</strong>
                            </p>
                        </div>
                        <div className="right">
                            <input type="text" className="address" />
                        </div>
                    </div>
                    <div className="column">
                        <div className="left">
                            <p>
                                <span className="empha">*</span>
                                <strong>이메일</strong>
                            </p>
                        </div>
                        <div className="right">
                            <input type="text" className="email" />
                            <p style={{ margin: '0 10px' }}>@</p>
                            <select className="email_select" title="이메일 서비스 선택" name="emailStep2">
                                <option value="">선택해주세요</option>
                                {emailCodes.map((e: CodeItem) => {
                                    return (
                                        <option key={e.code_id} value={e.code_name}>
                                            {e.code_name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="column">
                        <div className="left">
                            <p>
                                <span className="empha">*</span>
                                <strong>휴대폰</strong>
                            </p>
                        </div>
                        <div className="right">
                            <input type="text" className="phone" />
                            <p style={{ margin: '0 10px' }}>-</p>
                            <input type="text" className="phone" />
                            <p style={{ margin: '0 10px' }}>-</p>
                            <input type="text" className="phone" />
                            <button type="button" className="information-button">
                                인증
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <button type="button">수정하기</button>
                    <button type="button" onClick={() => history.goBack()}>
                        취소
                    </button>
                </div>
            </div>
        </div>
    );
}
