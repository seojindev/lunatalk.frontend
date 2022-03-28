import React, { useEffect, useState } from 'react';
import { CodeItem } from 'CommonTypes';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'StoreTypes';
import { useNavigate } from 'react-router-dom';
import DaumPostcode from 'react-daum-postcode';
import { BsXLg } from 'react-icons/bs';
import { getMyInformationAction } from '@Store/MyInformation';
import { isEmpty } from '@Helper';
import _Alert_ from '@_Alert_';
import { getPhoneAuthRequestAction, phoneAuthConfirmAction } from '@Store/Auths';
import { updateMyInformation } from '@API';

const isProduction = process.env.REACT_APP_ENV === 'production';

export default function MyInformation() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { information, storeGetAuthCodeRequest, storeAuthCodeConfirm } = useSelector((store: RootState) => ({
        information: store.my.information,
        storeGetAuthCodeRequest: store.auths.register.getAuthCodeRequest,
        storeAuthCodeConfirm: store.auths.register.authCodeConfirm,
    }));
    const [emailCodes, setEmailCodes] = useState<CodeItem[]>([]);
    const [myInformation, setMyInformation] = useState<{
        loginId: string;
        name: string;
        address: {
            postCode: string;
            step1: string;
            step2: string;
        };
        email: {
            gubun1: string;
            gubun2: string;
        };
        phoneNumber: {
            step1: string;
            step2: string;
            step3: string;
        };
    }>({
        loginId: '',
        name: '',
        address: {
            postCode: '',
            step1: '',
            step2: '',
        },
        email: {
            gubun1: '',
            gubun2: '',
        },
        phoneNumber: {
            step1: '',
            step2: '',
            step3: '',
        },
    });
    // 휴대폰 인증 필드.
    const [phoneAuthValue, setPhoneAuthValue] = useState<{
        inputAuthCode: string;
        authCode: string;
        authIndex?: string;
    }>({
        inputAuthCode: '',
        authCode: '',
    });
    const [password, setPassword] = useState<{ password: string; passwordConfirm: string }>({
        password: '',
        passwordConfirm: '',
    });
    const onChangeUserInformation = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        if (name === 'address') {
            setMyInformation({ ...myInformation, address: { ...myInformation.address, step2: value } });
        } else if (name === 'emailGubun1') {
            setMyInformation({ ...myInformation, email: { ...myInformation.email, gubun1: value } });
        } else if (name === 'emailGubun2') {
            setMyInformation({ ...myInformation, email: { ...myInformation.email, gubun2: value } });
        } else if (name === 'phoneStep1') {
            setMyInformation({ ...myInformation, phoneNumber: { ...myInformation.phoneNumber, step1: value } });
        } else if (name === 'phoneStep2') {
            setMyInformation({ ...myInformation, phoneNumber: { ...myInformation.phoneNumber, step2: value } });
        } else if (name === 'phoneStep3') {
            setMyInformation({ ...myInformation, phoneNumber: { ...myInformation.phoneNumber, step3: value } });
        }
    };
    const [isOpenPost, setIsOpenPost] = useState<boolean>(false);

    const { storeCommonCodes } = useSelector((store: RootState) => ({
        storeCommonCodes: store.app.common.codes,
    }));

    const onChangeOpenPost = () => {
        setIsOpenPost(!isOpenPost);
    };

    const onCompletePost = (data: any) => {
        let fullAddr = data.address;
        let extraAddr = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddr += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddr += extraAddr !== '' ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddr += extraAddr !== '' ? ` (${extraAddr})` : '';
        }

        setMyInformation({
            ...myInformation,
            address: { ...myInformation.address, postCode: data.zonecode, step1: fullAddr },
        });
        setIsOpenPost(false);
    };

    // 인증번호 발송 버튼 클릭 처리.
    const handleClickSendButton = () => {
        const { step1, step2, step3 } = myInformation.phoneNumber;
        if (isEmpty(step1) || isEmpty(step2) || isEmpty(step3)) {
            _Alert_.defaultInfo({ text: `정확한 휴대폰 번호를 입력해 주세요.` });
            return;
        }
        dispatch(
            getPhoneAuthRequestAction({
                phone_number: `${step1}${step2}${step3}`,
            })
        );
    };

    // 인증번호 확인 버튼 클릭 처리.
    const handleChangePhoneAuthConfirm = () => {
        const { inputAuthCode } = phoneAuthValue;
        if (isEmpty(inputAuthCode)) {
            _Alert_.default({ text: `인증코드를 입력해 주세요.` });
            return;
        }

        if (storeGetAuthCodeRequest.status === 'success' && storeGetAuthCodeRequest.result.auth_index !== null) {
            dispatch(
                phoneAuthConfirmAction({
                    auth_code: inputAuthCode,
                    auth_index: storeGetAuthCodeRequest.result.auth_index,
                })
            );

            setPhoneAuthValue({
                ...phoneAuthValue,
                authIndex: String(storeGetAuthCodeRequest.result.auth_index),
            });
        } else {
            _Alert_.default({ text: `다시 인증해 주세요.` });
        }
    };

    // 수정하기 확인 버튼
    const handleOnClickMyInfoConfirm = async () => {
        if (password.password !== '' && password.password.length < 6) {
            _Alert_.default({ text: '비밀번호를 6자리 이상 입력해주세요.' });
            return;
        } else if (password.password !== password.passwordConfirm) {
            _Alert_.default({ text: '비밀번호와 비밀번호 확인를 확인해주세요.' });
            return;
        } else {
            const response = await updateMyInformation({
                authIndex: phoneAuthValue.authIndex === undefined ? null : phoneAuthValue.authIndex,
                password: password.password,
                email: `${myInformation.email.gubun1}@${myInformation.email.gubun2}`,
                zipcode: myInformation.address.postCode === '' ? null : myInformation.address.postCode,
                step1: myInformation.address.step1 === '' ? null : myInformation.address.step1,
                step2: myInformation.address.step2 === '' ? null : myInformation.address.step2,
            });
            if (response.status) {
                _Alert_.default({ text: response.payload.message });
            } else {
                _Alert_.default({ text: '일시적인 오류가 발생했습니다. 잠시후 이용해 주세요.' });
            }
        }
    };

    useEffect(() => {
        dispatch(getMyInformationAction());
    }, []);

    // information 정보 있을경우 useState에 업데이트.
    useEffect(() => {
        if (information) {
            setMyInformation({
                name: information.name,
                loginId: information.login_id,
                address: {
                    postCode: information.address.zipcode,
                    step1: information.address.step1,
                    step2: information.address.step2,
                },
                email: {
                    gubun1: information.email.gubun1.step1,
                    gubun2: information.email.gubun1.step2,
                },
                phoneNumber: {
                    step1: information.phone_number.step1,
                    step2: information.phone_number.step2,
                    step3: information.phone_number.step3,
                },
            });
        }
    }, [information]);

    // 휴대폰 인증 코드 요청 처리.
    useEffect(() => {
        if (storeGetAuthCodeRequest.status === 'success') {
            // 개발일떄 인증코드 표시.
            if (isProduction) {
                _Alert_.defaultInfo({ text: `인증 코드를 입력해 주세요.` });
            } else {
                _Alert_.defaultInfo({ text: `인증코드는 ${storeGetAuthCodeRequest.result.auth_code}` });
            }
        } else if (storeGetAuthCodeRequest.status === 'failure') {
            _Alert_.defaultInfo({ text: storeGetAuthCodeRequest.result.message });
        }
    }, [storeGetAuthCodeRequest]);

    // 휴대폰 인증 완료 처리.
    useEffect(() => {
        if (storeAuthCodeConfirm.status === 'success') {
            _Alert_.defaultInfo({ text: `인증이 완료 되었습니다. \n 휴대폰 번호가 수정되었습니다.` });
        } else if (storeAuthCodeConfirm.status === 'failure') {
            _Alert_.defaultInfo({ text: storeAuthCodeConfirm.result.message });
        }
    }, [storeAuthCodeConfirm]);

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
        <>
            {isOpenPost ? (
                <div className="postCodeWrap">
                    <BsXLg className="close" onClick={() => onChangeOpenPost()} />
                    <DaumPostcode
                        style={{
                            width: '100%',
                            height: '400px',
                        }}
                        autoClose
                        onComplete={data => onCompletePost(data)}
                    />
                </div>
            ) : null}
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
                                <p>{myInformation.name}</p>
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
                                <p>{myInformation.loginId}</p>
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
                                <input
                                    type="password"
                                    name="password"
                                    value={password.password}
                                    onChange={e => setPassword({ ...password, password: e.target.value })}
                                />
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
                                <input
                                    type="password"
                                    name="passwordConfirm"
                                    value={password.passwordConfirm}
                                    onChange={e => setPassword({ ...password, passwordConfirm: e.target.value })}
                                />
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
                                <input
                                    type="text"
                                    className="address-number"
                                    disabled={true}
                                    defaultValue={myInformation.address.postCode}
                                />
                                <button type="button" className="information-button" onClick={() => onChangeOpenPost()}>
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
                                <input
                                    type="text"
                                    className="address"
                                    disabled={true}
                                    defaultValue={myInformation.address.step1}
                                />
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
                                <input
                                    type="text"
                                    className="address"
                                    name="address"
                                    value={myInformation.address.step2}
                                    onChange={e => onChangeUserInformation(e)}
                                />
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
                                <input
                                    type="text"
                                    className="email"
                                    name="emailGubun1"
                                    onChange={e => onChangeUserInformation(e)}
                                    value={myInformation.email.gubun1}
                                />
                                <p style={{ margin: '0 10px' }}>@</p>
                                <select
                                    className="email_select"
                                    title="이메일 서비스 선택"
                                    name="emailGubun2"
                                    value={myInformation.email.gubun2}
                                    onChange={e => onChangeUserInformation(e)}
                                >
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
                                <input
                                    type="text"
                                    className="phone"
                                    name="phoneStep1"
                                    value={myInformation.phoneNumber.step1}
                                    onChange={e => onChangeUserInformation(e)}
                                />
                                <p style={{ margin: '0 10px' }}>-</p>
                                <input
                                    type="text"
                                    className="phone"
                                    name="phoneStep2"
                                    value={myInformation.phoneNumber.step2}
                                    onChange={e => onChangeUserInformation(e)}
                                />
                                <p style={{ margin: '0 10px' }}>-</p>
                                <input
                                    type="text"
                                    className="phone"
                                    name="phoneStep3"
                                    value={myInformation.phoneNumber.step3}
                                    onChange={e => onChangeUserInformation(e)}
                                />
                                {(function () {
                                    if (storeGetAuthCodeRequest.status === 'success') {
                                        return (
                                            <button type="button" className="information-button">
                                                인증
                                            </button>
                                        );
                                    } else {
                                        return (
                                            <button
                                                type="button"
                                                className="information-button"
                                                onClick={() => handleClickSendButton()}
                                            >
                                                인증
                                            </button>
                                        );
                                    }
                                })()}
                            </div>
                        </div>
                        {storeGetAuthCodeRequest.status === 'success' ? (
                            <div className="column">
                                <div className="left">
                                    <p>
                                        <span className="empha">*</span>
                                        <strong>인증번호</strong>
                                    </p>
                                </div>
                                <div className="right">
                                    <input
                                        type="text"
                                        className="phoneCheck"
                                        name="phoneCheck"
                                        onChange={e =>
                                            setPhoneAuthValue({ ...phoneAuthValue, inputAuthCode: e.target.value })
                                        }
                                        value={phoneAuthValue.inputAuthCode}
                                        disabled={storeAuthCodeConfirm.status === 'success'}
                                    />
                                    {storeAuthCodeConfirm.status === 'success' ? (
                                        <button type="button" className="information-button">
                                            인증확인
                                        </button>
                                    ) : (
                                        <button
                                            type="button"
                                            className="information-button"
                                            onClick={() => handleChangePhoneAuthConfirm()}
                                        >
                                            인증확인
                                        </button>
                                    )}
                                </div>
                            </div>
                        ) : null}
                    </div>

                    <div className="bottom">
                        <button type="button" onClick={() => handleOnClickMyInfoConfirm()}>
                            수정하기
                        </button>
                        <button type="button" onClick={() => navigate(-1)}>
                            취소
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
