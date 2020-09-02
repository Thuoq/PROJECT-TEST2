import {
  takeLatest, call, put, all,
} from 'redux-saga/effects';
import axios from 'axios';
import { message } from 'antd';
import BOOKING_ACTION_TYPES from './booking-types';
import { getBookingSuccess, getBookingFailure } from './booking-action';
import history from '../../history';
import { handleData } from './booking-utils';
import {URL,BOOKING_API} from '../../constants/api';


export function fetchBookingToServer() {
  const token = `Bearer ${JSON.parse(localStorage.getItem('login'))}`;
  return axios(`${URL}${BOOKING_API}`, {
    method: 'get',
    headers: {
      Authorization: token,
    },
  });
}
export function pathBookingToServer(data) {
  const token = `Bearer ${JSON.parse(localStorage.getItem('login'))}`;
  return axios(`${URL}${BOOKING_API}`, {
    method: 'patch',
    headers: {
      Authorization: token,
    },
    data,
  });
}

export function* getBooking() {
  try {
    const { data: { data: { booking } } } = yield call(fetchBookingToServer);
    const data = yield call(handleData, booking);
    yield put(getBookingSuccess(data));
  } catch (err) {
    message.error(`${err.response.data.message}`);
    localStorage.removeItem('login');
    history.push('/signInSignUp');
    yield put(getBookingFailure());
  }
}

export function* updateComplete({ payload }) {
  const { data: { data: { booking } } } = yield call(pathBookingToServer, payload);
  const data = yield call(handleData, booking);
  yield put(getBookingSuccess(data));
}

export function* onUpdateComplete() {
  yield takeLatest(BOOKING_ACTION_TYPES.UPDATE_COMPLETE_START, updateComplete);
}

export function* onGetBookingStart() {
  yield takeLatest(BOOKING_ACTION_TYPES.GET_BOOKING_START, getBooking);
}

export function* bookingSagas() {
  yield all([call(onGetBookingStart), call(onUpdateComplete)]);
}
