import { takeLatest, fork, put, call } from 'redux-saga/effects';
import _Alert_ from '@_Alert_';
import {} from '@API';

import { COLORLOG, getLocalToken, isEmpty, removeLoginToken } from '@Helper';
import { axiosDefaultHeader } from '@Util/_Axios_';
import axios from 'axios';

import {} from './actions';

// 서버 통신 체크만 따로 뺴서..
const checkServerStatus = async () => {
    return axios.get('/api/system/check-status', axiosDefaultHeader);
};

function* onBaseSagaWatcher() {}

export default [fork(onBaseSagaWatcher)];
