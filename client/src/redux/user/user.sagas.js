import {
  takeLatest, all, call, put,
} from 'redux-saga/effects';
import AxiosInstance from '../../helpers/interceptor';
import {messageError} from '../../helpers/error.message';
import { push } from 'react-router-redux'
import {setToken,getToken,removeToken} from '../../helpers/auth';
import USER_ACTIONS_TYPES from './user.types';
import {
  setCurrentUser,
  signOutSuccess, 
  signUpFailure, 
  signInFailure, 
  updateUserFailure,
} from './user.action';

import {URL,USER_API} from '../../constants/api';


export function fetchUserToServer(data, type) {
  return AxiosInstance(`${URL}${USER_API}/${type}`, {
    method: 'post',
    data,
  });
}

export function fetchUpdateInformationUser(data,type) {
  const token = `Bearer ${getToken()}`;
  return AxiosInstance(`${URL}${USER_API}/${type}`, {
    method: 'PATCH',
    headers: {
      Authorization: token,
    },
    data,
  });
}

export function* signUp({ payload }) {
  try {
    const { data: { data: { user }, token } } = yield call(fetchUserToServer, payload, 'register');
    yield put(setCurrentUser(user));
    setToken(token)
  } catch (err) {
    messageError(err);
    yield put(signUpFailure());
  }
}

export function* signIn({ payload }) {
  try {
    const { data: { data: { user }, token } } = yield call(fetchUserToServer, payload, 'signIn');
    yield put(setCurrentUser(user));
    setToken(token);
  } catch (err) {
    messageError(err);
    yield put(signInFailure());
  }
}

export function* signOut() {
  removeToken()
  yield put(signOutSuccess());
}

export function* updateAddressCheckOut({ payload }) {
  try {
    const { data: { data: { user } } } = yield call(fetchUpdateInformationUser, payload,"address");
    yield put(setCurrentUser(user));
  } catch(err) {
    messageError(err);
    yield put(updateUserFailure())
  }
}

export function* updatePhoneNumber({ payload }) {
  try {
    const { data: { data: { user } } } = yield call(fetchUpdateInformationUser, payload,"phone");
    yield put(setCurrentUser(user));
  } catch (err) {
    messageError(err);
    yield put(updateUserFailure())
  }
}

function* userExpired () {
  yield put(push("/signInSignUp"))
}


export function* onUserExpired () {
  yield takeLatest(USER_ACTIONS_TYPES.AUTH_EXPIRED_TYPES, userExpired)
}

export function* onSignOutStart() {
  yield takeLatest(USER_ACTIONS_TYPES.SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
  yield takeLatest(USER_ACTIONS_TYPES.SIGN_UP_START, signUp);
}
export function* onSignInStart() {
  yield takeLatest(USER_ACTIONS_TYPES.SIGN_IN_START, signIn);
}

export function* onUpdateAddress() {
  yield takeLatest(USER_ACTIONS_TYPES.UPDATE_ADDRESS_START, updateAddressCheckOut);
}

export function* onUpdatePhone() {
  yield takeLatest(USER_ACTIONS_TYPES.UPDATE_PHONE_START, updatePhoneNumber);
}

export function* userSagas() {
  yield all([
    call(onSignUpStart),
    call(onSignInStart),
    call(onSignOutStart),
    call(onUpdateAddress),
    call(onUpdatePhone),
    call(onUserExpired)
  ]);
}
