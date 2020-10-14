import { takeLatest, all, call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import AxiosInstance from '../../helpers/interceptor';
import { messageError } from '../../helpers/message';
// import {message} from 'antd'
import { setToken, getToken, removeToken } from '../../helpers/auth';
import USER_ACTIONS_TYPES from './user.types';
import {
  setCurrentUser,
  signOutSuccess,
  signUpFailure,
  signInFailure,
  updateUserFailure,
  userChangePasswordFailure,
} from './user.action';

import { URL, USER_API, USER_UPDATE_PASSWORD } from '../../constants/api';
import { message } from 'antd';

export function fetchUserToServer(data, type) {
  return AxiosInstance(`${URL}${USER_API}/${type}`, {
    method: 'post',
    data,
  });
}
export function fetchChangePassword(data) {
  const token = `Bearer ${getToken()}`;
  return AxiosInstance(`${URL}${USER_API}${USER_UPDATE_PASSWORD}`, {
    method: 'patch',
    headers: {
      Authorization: token,
    },
    data,
  });
}

export function fetchUpdateInformationUser(data, type) {
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
    const {
      data: {
        data: { user },
        token,
      },
    } = yield call(fetchUserToServer, payload, 'register');
    yield put(setCurrentUser(user));
    setToken(token);
  } catch (err) {
    messageError(err);
    yield put(signUpFailure());
  }
}

export function* signIn({ payload }) {
  try {
    const {
      data: {
        data: { user },
        token,
      },
    } = yield call(fetchUserToServer, payload, 'signIn');
    yield put(setCurrentUser(user));
    setToken(token);
  } catch (err) {
    messageError(err);
    yield put(signInFailure());
  }
}

export function* signOut() {
  removeToken();
  yield put(signOutSuccess());
}

export function* updateAddressCheckOut({ payload }) {
  try {
    const {
      data: {
        data: { user },
      },
    } = yield call(fetchUpdateInformationUser, payload, 'address');
    yield put(setCurrentUser(user));
  } catch (err) {
    messageError(err);
    yield put(updateUserFailure());
  }
}

export function* updatePhoneNumber({ payload }) {
  try {
    const {
      data: {
        data: { user },
      },
    } = yield call(fetchUpdateInformationUser, payload, 'phone');
    yield put(setCurrentUser(user));
  } catch (err) {
    messageError(err);
    yield put(updateUserFailure());
  }
}

function* userExpired() {
  yield put(push('/signInSignUp'));
}
function* userChangePassword({ payload }) {
  try {
    const {
      data: {
        data: { user },
        token,
      },
    } = yield call(fetchChangePassword, payload);
    yield put(setCurrentUser(user));
    setToken(token);
    message.success('Change password Success fully');
  } catch (err) {
    messageError(err);
    yield put(userChangePasswordFailure());
  }
}

export function* onUserChangePassword() {
  yield takeLatest(
    USER_ACTIONS_TYPES.CHANGE_PASSWORD_START,
    userChangePassword
  );
}
export function* onUserExpired() {
  yield takeLatest(USER_ACTIONS_TYPES.AUTH_EXPIRED_TYPES, userExpired);
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
  yield takeLatest(
    USER_ACTIONS_TYPES.UPDATE_ADDRESS_START,
    updateAddressCheckOut
  );
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
    call(onUserExpired),
    call(onUserChangePassword),
  ]);
}
