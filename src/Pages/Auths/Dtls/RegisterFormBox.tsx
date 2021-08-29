import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { RootState } from 'StoreTypes';
import { CodeItem } from 'CommonTypes';
import { ButtonSpinner } from '@Element/Spinners';
import { getPhoneAuthRequestAction, phoneAuthConfirmAction, tryRegisterAction } from '@Store/Auths';
import { initialRegisterInputValue, initialPhoneAuthValue } from '@Constants/Const';
import _Alert_ from '@_Alert_';
import { isEmpty } from '@Helper';

type checkBoxLeyType = 'agreeStep1' | 'agreeStep2' | 'agreeStep3' | 'agreeStep4' | 'agreeStep5';

export default function RegisterFormBox() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { storeCommonCodes, storeGetAuthCodeRequest, storeAuthCodeConfirm, storetryRegister } = useSelector(
        (store: RootState) => ({
            storeCommonCodes: store.app.common.codes,
            storeGetAuthCodeRequest: store.auths.register.getAuthCodeRequest,
            storeAuthCodeConfirm: store.auths.register.authCodeConfirm,
            storetryRegister: store.auths.register.tryRegister,
        })
    );

    // ref..
    const inputRef_user_id = useRef<HTMLInputElement | null>(null);
    const inputRef_user_password = useRef<HTMLInputElement | null>(null);
    const inputRef_user_password_confirm = useRef<HTMLInputElement | null>(null);
    const inputRef_user_name = useRef<HTMLInputElement | null>(null);
    const inputRef_emailStep1 = useRef<HTMLInputElement | null>(null);
    const inputRef_phoneNumberStep1 = useRef<HTMLInputElement | null>(null);
    const inputRef_phoneNumberStep2 = useRef<HTMLInputElement | null>(null);
    const inputRef_phoneNumberStep3 = useRef<HTMLInputElement | null>(null);

    // 이메일 리스트.
    const [emailCodes, setEmailCodes] = useState<CodeItem[]>([]);
    const [agreeAllCheckBox, setAgreeAllCheckBox] = useState(false);
    const [agreeCheckBox, setAgreeCheckBox] = useState<{
        agreeStep1: boolean;
        agreeStep2: boolean;
        agreeStep3: boolean;
        agreeStep4: boolean;
        agreeStep5: boolean;
    }>({
        agreeStep1: false,
        agreeStep2: false,
        agreeStep3: false,
        agreeStep4: false,
        agreeStep5: false,
    });

    // 입력 필드.
    const [registerInputValue, setRegisterInputValue] = useState<{
        user_id: string;
        user_password: string;
        user_password_confirm: string;
        user_name: string;
        user_email: string;
        user_select_email: string;
        user_select_message: string;
    }>(initialRegisterInputValue);

    // 이메일 입력 및 선택
    const [registerEmail, setRegisterEmail] = useState<{
        emailStep1: string;
        emailStep2: string;
    }>({
        emailStep1: '',
        emailStep2: '',
    });

    // 휴대폰 인증 필드.
    const [phoneAuthValue, setPhoneAuthValue] = useState<{
        phoneNumberStep1: string;
        phoneNumberStep2: string;
        phoneNumberStep3: string;
        inputAuthCode: string;
        authCode: string;
        auth_index: number;
        phone_number: string;
    }>(initialPhoneAuthValue);

    // 엔터 키 이벤트.
    const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== 'Enter') return;

        switch ((e.target as HTMLElement).getAttribute('name')) {
            case 'user_id':
                inputRef_user_password.current?.focus();
                break;

            case 'user_password':
                inputRef_user_password_confirm.current?.focus();
                break;

            case 'user_password_confirm':
                inputRef_user_name.current?.focus();
                break;

            case 'user_name':
                inputRef_emailStep1.current?.focus();
                break;

            case 'emailStep1':
                inputRef_phoneNumberStep1.current?.focus();
                break;

            case 'phoneNumberStep1':
                inputRef_phoneNumberStep2.current?.focus();
                break;

            case 'phoneNumberStep2':
                inputRef_phoneNumberStep3.current?.focus();
                break;

            case 'phoneNumberStep3':
                handleClickRegisterButton();
                break;

            default:
                break;
        }
    };

    // 서브밋 이벤트
    const handleOnSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
    };

    // 휴대폰 인증 input 값 처리.
    const handleChangePhoneAuthInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneAuthValue({
            ...phoneAuthValue,
            [e.target.name]: e.target.value,
        });
    };

    // 인증번호 발송 버튼 클릭 처리.
    const handleClickSendButton = () => {
        const { phoneNumberStep1, phoneNumberStep2, phoneNumberStep3 } = phoneAuthValue;
        if (isEmpty(phoneNumberStep1) || isEmpty(phoneNumberStep2) || isEmpty(phoneNumberStep3)) {
            _Alert_.defaultInfo({ text: `정확한 휴대폰 번호를 입력해 주세요.` });
            return;
        }
        dispatch(
            getPhoneAuthRequestAction({
                phone_number: `${phoneNumberStep1}${phoneNumberStep2}${phoneNumberStep3}`,
            })
        );
    };

    // 회원 가입 버튼 클릭 처리.
    const handleClickRegisterButton = () => {
        if (
            agreeCheckBox.agreeStep1 === false ||
            agreeCheckBox.agreeStep2 === false ||
            agreeCheckBox.agreeStep3 === false
        ) {
            _Alert_.defaultInfo({ text: `필수 동의를 체크해 주세요.` });
            return;
        }
        const registerPayload = {
            auth_index: phoneAuthValue.auth_index,
            user_id: registerInputValue.user_id,
            user_password: registerInputValue.user_password,
            user_password_confirm: registerInputValue.user_password_confirm,
            user_name: registerInputValue.user_name,
            user_email: `${phoneAuthValue.phoneNumberStep1}@${phoneAuthValue.phoneNumberStep2}`,
            user_select_email: agreeCheckBox.agreeStep4 === true ? 'Y' : 'N',
            user_select_message: agreeCheckBox.agreeStep5 === true ? 'Y' : 'N',
        };

        dispatch(tryRegisterAction(registerPayload));
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
                auth_index: storeGetAuthCodeRequest.result.auth_index,
            });
        } else {
            _Alert_.default({ text: `다시 인증해 주세요.` });
        }
    };

    // 가입 input 값 처리.
    const handleChangeRegisterInput = ({ name, value }: { name: string; value: string }) => {
        if (name === 'emailStep1' || name === 'emailStep2') {
            setRegisterEmail({
                ...registerEmail,
                [name]: value,
            });
        } else {
            setRegisterInputValue({
                ...registerInputValue,
                [name]: value,
            });
        }
    };

    // 약관 동의 전체 체크 처리.
    const handleCheckAgreeAllCheckBox = () => {
        const check = agreeAllCheckBox ? false : true;

        setAgreeAllCheckBox(check);

        if (check) {
            Object.keys(agreeCheckBox).map(function (key) {
                const keyName: checkBoxLeyType = key as checkBoxLeyType;
                agreeCheckBox[keyName] = true;
            });
        } else {
            Object.keys(agreeCheckBox).map(function (key) {
                const keyName: checkBoxLeyType = key as checkBoxLeyType;
                agreeCheckBox[keyName] = false;
            });
        }
    };

    // 약관 동의 처리.
    const handleCheckAgreeCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
        const eTargetName = e.target.name;
        const nameType: checkBoxLeyType = eTargetName as checkBoxLeyType;
        setAgreeCheckBox({
            ...agreeCheckBox,
            [nameType]: agreeCheckBox[nameType] ? false : true,
        });
    };

    // 체크 카운트후 5개면 전체  체크도 체크인.
    useEffect(() => {
        const funcCheckAllCheck = () => {
            let count = 0;
            Object.keys(agreeCheckBox).forEach(function (key) {
                const keyName: checkBoxLeyType = key as checkBoxLeyType;
                if (agreeCheckBox[keyName] === true) {
                    count++;
                }
            });

            if (count === 5 && agreeAllCheckBox === false) {
                setAgreeAllCheckBox(true);
            } else {
                setAgreeAllCheckBox(false);
            }
        };
        funcCheckAllCheck();
    }, [agreeCheckBox]);

    // 공통 코드에서 이메일 리스트 가지고 오기.
    useEffect(() => {
        const funcSetEmailCodes = (codes: CodeItem[]) => {
            setEmailCodes(codes);
        };

        if (storeCommonCodes) {
            funcSetEmailCodes(storeCommonCodes.code_group['400']);
        }
    }, [storeCommonCodes]);

    // 휴대폰 인증 코드 요청 처리.
    useEffect(() => {
        if (storeGetAuthCodeRequest.status === 'success') {
            _Alert_.defaultInfo({ text: `인증코드는 ${storeGetAuthCodeRequest.result.auth_code}` });
        } else if (storeGetAuthCodeRequest.status === 'failure') {
            _Alert_.defaultInfo({ text: storeGetAuthCodeRequest.result.message });
        }
    }, [storeGetAuthCodeRequest]);

    // 휴대폰 인증 완료 처리.
    useEffect(() => {
        if (storeAuthCodeConfirm.status === 'success') {
            _Alert_.defaultInfo({ text: `인증이 완료 되었습니다. \n회원가입을 진행해 주세요.` });
        } else if (storeAuthCodeConfirm.status === 'failure') {
            _Alert_.defaultInfo({ text: storeAuthCodeConfirm.result.message });
        }
    }, [storeAuthCodeConfirm]);

    // 회원가입 결과 처리.
    useEffect(() => {
        const funcRegisterSuccess = () => {
            _Alert_.defaultInfo({ text: `회원 가입이 완료 되었습니다. 로그인 해 주세요.` });
            history.push({
                pathname: process.env.PUBLIC_URL + `/login`,
            });
        };

        if (storetryRegister.status === 'success') {
            funcRegisterSuccess();
        }
    }, [storetryRegister]);

    return (
        <div className="login-form-container">
            <div className="login-register-form">
                <form onSubmit={(event: React.SyntheticEvent) => handleOnSubmit(event)}>
                    <input
                        type="text"
                        name="user_id"
                        placeholder="아이디"
                        value={registerInputValue.user_id}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleChangeRegisterInput({ name: e.target.name, value: e.target.value })
                        }
                        onKeyPress={e => onEnter(e)}
                        ref={inputRef_user_id}
                    />
                    <input
                        type="password"
                        name="user_password"
                        placeholder="비밀번호"
                        value={registerInputValue.user_password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleChangeRegisterInput({ name: e.target.name, value: e.target.value })
                        }
                        onKeyPress={e => onEnter(e)}
                        ref={inputRef_user_password}
                    />
                    <input
                        type="password"
                        name="user_password_confirm"
                        placeholder="비밀번호 확인"
                        value={registerInputValue.user_password_confirm}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleChangeRegisterInput({ name: e.target.name, value: e.target.value })
                        }
                        onKeyPress={e => onEnter(e)}
                        ref={inputRef_user_password_confirm}
                    />
                    <input
                        type="text"
                        name="user_name"
                        placeholder="이름"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleChangeRegisterInput({ name: e.target.name, value: e.target.value })
                        }
                        onKeyPress={e => onEnter(e)}
                        ref={inputRef_user_name}
                    />
                    <div className="select_email">
                        <input
                            className="customer_email"
                            name="emailStep1"
                            type="text"
                            placeholder="이메일"
                            value={registerEmail.emailStep1}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                handleChangeRegisterInput({ name: 'emailStep1', value: e.target.value })
                            }
                            onKeyPress={e => onEnter(e)}
                            ref={inputRef_emailStep1}
                        />
                        <span>@</span>
                        <select
                            className="email_select"
                            title="이메일 서비스 선택"
                            name="emailStep2"
                            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                                handleChangeRegisterInput({ name: 'emailStep2', value: e.target.value })
                            }
                            value={registerEmail.emailStep2}
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
                    <div className="user-phone">
                        <input
                            type="text"
                            maxLength={3}
                            name="phoneNumberStep1"
                            placeholder="휴대폰번호"
                            value={phoneAuthValue.phoneNumberStep1}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangePhoneAuthInput(e)}
                            onKeyPress={e => onEnter(e)}
                            ref={inputRef_phoneNumberStep1}
                            disabled={storeGetAuthCodeRequest.status === 'success'}
                        />
                        <span className="phone_t">-</span>
                        <input
                            type="text"
                            maxLength={4}
                            name="phoneNumberStep2"
                            value={phoneAuthValue.phoneNumberStep2}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangePhoneAuthInput(e)}
                            onKeyPress={e => onEnter(e)}
                            ref={inputRef_phoneNumberStep2}
                            disabled={storeGetAuthCodeRequest.status === 'success'}
                        />
                        <span className="phone_t">-</span>
                        <input
                            type="text"
                            maxLength={4}
                            name="phoneNumberStep3"
                            value={phoneAuthValue.phoneNumberStep3}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangePhoneAuthInput(e)}
                            onKeyPress={e => onEnter(e)}
                            ref={inputRef_phoneNumberStep3}
                            disabled={storeGetAuthCodeRequest.status === 'success'}
                        />
                        {(function () {
                            if (storeGetAuthCodeRequest.status === 'loading') {
                                return (
                                    <span>
                                        <ButtonSpinner />
                                    </span>
                                );
                            } else if (storeGetAuthCodeRequest.status === 'success') {
                                return (
                                    <span>
                                        <span>인증번호 발송</span>
                                    </span>
                                );
                            } else {
                                return (
                                    <span onClick={() => handleClickSendButton()}>
                                        <span>인증번호 발송</span>
                                    </span>
                                );
                            }
                        })()}
                    </div>
                    {storeGetAuthCodeRequest.status === 'success' && (
                        <div className="phone-check">
                            <input
                                className="phone-check"
                                type="text"
                                maxLength={6}
                                name="inputAuthCode"
                                placeholder="인증번호6자리입력"
                                value={phoneAuthValue.inputAuthCode}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangePhoneAuthInput(e)}
                                disabled={storeAuthCodeConfirm.status === 'success'}
                            />
                            {storeAuthCodeConfirm.status === 'success' ? (
                                <span>
                                    <span>확인</span>
                                </span>
                            ) : (
                                <>
                                    <span onClick={() => handleChangePhoneAuthConfirm()}>
                                        <span>확인</span>
                                    </span>
                                </>
                            )}
                        </div>
                    )}
                    <div className="allagree">
                        <p className="allgreen_blk">
                            <span className="ck_box">
                                <input
                                    type="checkbox"
                                    className="f_all"
                                    name="agreeStepAll"
                                    checked={agreeAllCheckBox === true}
                                    onChange={() => handleCheckAgreeAllCheckBox()}
                                />
                            </span>
                            <label>아래 내용에 모두 동의합니다.</label>
                        </p>
                        <ul className="agree_blk">
                            <li>
                                <span className="ck_box">
                                    <input
                                        type="checkbox"
                                        className="f_agree1"
                                        name="agreeStep1"
                                        checked={agreeCheckBox.agreeStep1 === true}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                            handleCheckAgreeCheckBox(e)
                                        }
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
                                        name="agreeStep2"
                                        checked={agreeCheckBox.agreeStep2 === true}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                            handleCheckAgreeCheckBox(e)
                                        }
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
                                        name="agreeStep3"
                                        checked={agreeCheckBox.agreeStep3 === true}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                            handleCheckAgreeCheckBox(e)
                                        }
                                    />
                                </span>
                                <label>만 14세 이상입니다.</label>
                            </li>
                            <li>
                                <span className="ck_box">
                                    <input
                                        type="checkbox"
                                        className="f_agree4"
                                        name="agreeStep4"
                                        checked={agreeCheckBox.agreeStep4 === true}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                            handleCheckAgreeCheckBox(e)
                                        }
                                    />
                                </span>
                                <label>마케팅 알림 메일 수신 동의 (선택)</label>
                            </li>
                            <li>
                                <span className="ck_box">
                                    <input
                                        type="checkbox"
                                        className="f_agree5"
                                        name="agreeStep5"
                                        checked={agreeCheckBox.agreeStep5 === true}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                            handleCheckAgreeCheckBox(e)
                                        }
                                    />
                                </span>
                                <label>맞춤 혜택 알림 문자 수신 동의 (선택)</label>
                            </li>
                        </ul>
                    </div>
                    <div className="button-box">
                        <span onClick={() => handleClickRegisterButton()}>
                            <span>회원가입</span>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
}
