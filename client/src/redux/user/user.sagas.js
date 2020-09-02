import {
  takeLatest, all, call, put,
} from 'redux-saga/effects';
import axios from 'axios';
import { message } from 'antd';
import USER_ACTIONS_TYPES from './user.types';
import {
  setCurrentUser, signOutSuccess, signUpFailure, signInFailure,
} from './user.action';
//import { selectCurrentUser } from './user.selector';
import {URL,USER_API} from '../../constants/api';

// export function fetchSessionToServer() {
//   const token = `Bearer ${JSON.parse(localStorage.getItem('login'))}`;
//   return axios('http://localhost:2222/user/session', {
//     method: 'get',
//     headers: {
//       Authorization: token,
//     },
//   });
// }

export function fetchUserToServer(data, type) {
  return axios(`${URL}${USER_API}/${type}`, {
    method: 'post',
    data,
  });
}

export function fetchUpdateAddressToServer(data) {
  const token = `Bearer ${JSON.parse(localStorage.getItem('login'))}`;
  return axios(`${URL}${USER_API}/address`, {
    method: 'POST',
    headers: {
      Authorization: token,
    },
    data,
  });
}

export function fetchUpdatePhoneToServer(data) {
  const token = `Bearer ${JSON.parse(localStorage.getItem('login'))}`;
  return axios(`${URL}${USER_API}/phone`, {
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
    localStorage.setItem('login', JSON.stringify(token));
  } catch (err) {
    message.error(`${err.response.data.message}`);
    yield put(signUpFailure());
  }
}

export function* signIn({ payload }) {
  try {
    const { data: { data: { user }, token } } = yield call(fetchUserToServer, payload, 'signIn');
    yield put(setCurrentUser(user));
    localStorage.setItem('login', JSON.stringify(token));
  } catch (err) {
    message.error(`${err.response.data.message}`);
    yield put(signInFailure());
  }
}

export function* signOut() {
  localStorage.removeItem('login');
  yield put(signOutSuccess());
}

export function* updateAddressCheckOut({ payload }) {
  const { data: { data: { user } } } = yield call(fetchUpdateAddressToServer, payload);
  yield put(setCurrentUser(user));
}

export function* updatePhoneNumber({ payload }) {
  const { data: { data: { user } } } = yield call(fetchUpdatePhoneToServer, payload);
  yield put(setCurrentUser(user));
}
// export function* sessionUser() {
//   try {
//     const { data: { data: { user } } } = yield call(fetchSessionToServer());
//     if (!user) return;
//     put(selectCurrentUser(user));
//   } catch (err) {
//     message.error(`${err.response.data.message}`);
//   }
// }

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

// CHECK USER SESSION

// export function* onCheckUserSession() {
//   yield takeLatest(USER_ACTIONS_TYPES.CHECK_SESSION_USER_START, sessionUser);
// }

export function* userSagas() {
  yield all([
    call(onSignUpStart),
    call(onSignInStart),
    call(onSignOutStart),
    call(onUpdateAddress),
    call(onUpdatePhone),
  ]);
}
