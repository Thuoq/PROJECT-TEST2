import { takeLatest, call, put, all } from 'redux-saga/effects';
import axios from 'axios';
import BOOKING_ACTION_TYPES from './booking-types';
import { getBookingSuccess, getBookingFailure } from './booking-action';

import { handleData } from './booking-utils';
import { URL, BOOKING_API } from '../../constants/api';
import { messageError } from '../../helpers/error.message';
import { getToken } from '../../helpers/auth';

export function fetchBookingToServer() {
  const token = `Bearer ${getToken()}`;
  return axios(`${URL}${BOOKING_API}`, {
    method: 'get',
    headers: {
      Authorization: token,
    },
  });
}
export function patchBookingToServer(data) {
  const token = `Bearer ${getToken()}`;
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
    const {
      data: {
        data: { booking },
      },
    } = yield call(fetchBookingToServer);
    const data = yield call(handleData, booking);
    yield put(getBookingSuccess(data));
  } catch (err) {
    messageError(err);
    yield put(getBookingFailure());
  }
}

export function* updateComplete({ payload }) {
  const {
    data: {
      data: { booking },
    },
  } = yield call(patchBookingToServer, payload);
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
