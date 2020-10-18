import BOOKING_ACTION_TYPES from './booking-types';

export const getBookingStart = (data) => ({
  type: BOOKING_ACTION_TYPES.GET_BOOKING_START,
  payload: data,
});

export const getBookingSuccess = (information) => ({
  type: BOOKING_ACTION_TYPES.GET_BOOKING_SUCCESS,
  payload: information,
});
export const getBookingIsWaybillStart = () => ({
  type: BOOKING_ACTION_TYPES.GET_BOOKING_WAYBILL_START,
});

export const getBookingIsWaybillSuccess = (data) => ({
  type: BOOKING_ACTION_TYPES.GET_BOOKING_WAYBILL_SUCCESS,
  payload: data,
});
export const getBookingFailure = () => ({
  type: BOOKING_ACTION_TYPES.GET_BOOKING_FAILURE,
});

export const updateCompleteFailure = () => ({
  type: BOOKING_ACTION_TYPES.UPDATE_COMPLETE_FAILURE,
});

export const updateCompleteStart = (key) => ({
  type: BOOKING_ACTION_TYPES.UPDATE_COMPLETE_START,
  payload: key,
});

export const updateCompleteSuccess = () => ({
  type: BOOKING_ACTION_TYPES.UPDATE_COMPLETE_SUCCESS,
});

export const updateCompleteMultipleUser = (arrayFiled) => ({
  type: BOOKING_ACTION_TYPES.UPDATE_COMPLETE_MULTIPLE_START,
  payload: arrayFiled,
});

export const getBookingWayBillStart = (waybill) => ({
  type: BOOKING_ACTION_TYPES.GET_BOOKING_WAY_BILL_START,
  payload: waybill,
});

export const getBookingWayBillSuccess = (data) => ({
  type: BOOKING_ACTION_TYPES.GET_BOOKING_WAY_BILL_SUCCESS,
  payload: data,
});

export const getBookingWayBillFailure = () => ({
  type: BOOKING_ACTION_TYPES.GET_BOOKING_WAY_BILL_FAILURE,
});

export const updateContentBookingStart = (data) => ({
  type: BOOKING_ACTION_TYPES.UPDATE_CONTENT_B_START,
  payload: data,
});
export const updateContentBookingSuccess = () => ({
  type: BOOKING_ACTION_TYPES.UPDATE_CONTENT_B_SUCCESS,
});

export const updateContentBookingFailure = () => ({
  type: BOOKING_ACTION_TYPES.UPDATE_CONTENT_B_FAILURE,
});
