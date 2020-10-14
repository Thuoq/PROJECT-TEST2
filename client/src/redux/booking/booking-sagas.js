import { takeLatest, call, put, all } from 'redux-saga/effects';

import BOOKING_ACTION_TYPES from './booking-types';
import {
  getBookingSuccess,
  getBookingFailure,
  updateCompleteFailure,
  getBookingWayBillFailure,
  getBookingWayBillSuccess,
  updateContentBookingSuccess,
  updateContentBookingFailure,
} from './booking-action';
import AxiosInstance from '../../helpers/interceptor';
import { handleData } from './booking-utils';
import {
  URL,
  BOOKING_API,
  ADMIN_API,
  UPLOAD_MANY_COMPLETE_API,
  UPLOAD_A_COMPLETE_API,
} from '../../constants/api';
import { messageError, messageSuccess } from '../../helpers/message';
import { getToken } from '../../helpers/auth';
import patchBookingContentOrProductContent from '../../helpers/BookingProduct';

export function getBookingForWaybill(waybill) {
  let hwb = waybill ? `hwb=${waybill}` : '';
  const token = `Bearer ${getToken()}`;
  return AxiosInstance(`${URL}${ADMIN_API}${BOOKING_API}?${hwb}`, {
    method: 'get',
    headers: {
      Authorization: token,
    },
  });
}
export function fetchBookingImportToServer() {
  const token = `Bearer ${getToken()}`;
  return AxiosInstance(`${URL}${ADMIN_API}${BOOKING_API}`, {
    method: 'get',
    headers: {
      Authorization: token,
    },
  });
}

export function patchBookingMultipleCompleteToServer(data) {
  const token = `Bearer ${getToken()}`;
  return AxiosInstance(`${URL}${ADMIN_API}${UPLOAD_MANY_COMPLETE_API}`, {
    method: 'patch',
    headers: {
      Authorization: token,
    },
    data,
  });
}

export function fetchBookingToServer(data) {
  let query = data ? `?name=${data}` : '';
  const token = `Bearer ${getToken()}`;
  return AxiosInstance(`${URL}${BOOKING_API}${query}`, {
    method: 'get',
    headers: {
      Authorization: token,
    },
  });
}
export function patchBookingToServer(data) {
  const token = `Bearer ${getToken()}`;
  return AxiosInstance(`${URL}${ADMIN_API}${UPLOAD_A_COMPLETE_API}`, {
    method: 'patch',
    headers: {
      Authorization: token,
    },
    data,
  });
}

export function* getBooking({ payload }) {
  try {
    const {
      data: {
        data: { booking },
      },
    } = yield call(fetchBookingToServer, payload);

    const data = yield call(handleData, booking);

    yield put(getBookingSuccess(data));
  } catch (err) {
    messageError(err);
    yield put(getBookingFailure());
  }
}

export function* updateMultipleComplete({ payload }) {
  try {
    const {
      data: {
        data: { booking },
      },
    } = yield call(patchBookingMultipleCompleteToServer, payload);

    const data = yield call(handleData, booking);
    yield put(getBookingSuccess(data));
  } catch (err) {
    messageError(err);
    yield put(updateCompleteFailure());
  }
}

export function* updateComplete({ payload }) {
  try {
    const {
      data: {
        data: { booking },
      },
    } = yield call(patchBookingToServer, payload);

    const data = yield call(handleData, booking);
    yield put(getBookingSuccess(data));
  } catch (err) {
    messageError(err);
    yield put(updateCompleteFailure());
  }
}
export function* getBookingWayBill({ payload }) {
  try {
    const {
      data: { booking },
    } = yield call(getBookingForWaybill, payload);
    const data = yield call(handleData, booking);
    yield put(getBookingWayBillSuccess(data));
  } catch (err) {
    messageError(err);
    yield put(getBookingWayBillFailure());
  }
}
export function* updateContent({ payload }) {
  try {
    yield call(patchBookingContentOrProductContent, payload);
    yield put(updateContentBookingSuccess());
    messageSuccess();
  } catch (err) {
    messageError(err);
    yield put(updateContentBookingFailure());
  }
}

export function* onUpdateContent() {
  yield takeLatest(BOOKING_ACTION_TYPES.UPDATE_CONTENT_B_START, updateContent);
}

export function* onGetBookingWayBill() {
  yield takeLatest(
    BOOKING_ACTION_TYPES.GET_BOOKING_WAY_BILL_START,
    getBookingWayBill
  );
}

export function* onUpdateMultipleComplete() {
  yield takeLatest(
    BOOKING_ACTION_TYPES.UPDATE_COMPLETE_MULTIPLE_START,
    updateMultipleComplete
  );
}
export function* onUpdateComplete() {
  yield takeLatest(BOOKING_ACTION_TYPES.UPDATE_COMPLETE_START, updateComplete);
}

export function* onGetBookingStart() {
  yield takeLatest(BOOKING_ACTION_TYPES.GET_BOOKING_START, getBooking);
}

export function* bookingSagas() {
  yield all([
    call(onGetBookingStart),
    call(onUpdateComplete),
    call(onUpdateMultipleComplete),
    call(onGetBookingWayBill),
    call(onUpdateContent),
  ]);
}
