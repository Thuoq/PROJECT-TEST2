import BOOKING_ACTION_TYPES from './booking-types';

export const getBookingStart = () => ({
  type: BOOKING_ACTION_TYPES.GET_BOOKING_START,
});

export const getBookingSuccess = (information) => ({
  type: BOOKING_ACTION_TYPES.GET_BOOKING_SUCCESS,
  payload: information,
});

export const getBookingFailure = () => ({
  type: BOOKING_ACTION_TYPES.GET_BOOKING_FAILURE,
});

export const updateCompleteStart = (key) => ({
  type: BOOKING_ACTION_TYPES.UPDATE_COMPLETE_START,
  payload: key,
});

export const updateCompleteMultipleUser = (arrayFiled) => ({
  type: BOOKING_ACTION_TYPES.UPDATE_COMPLETE_MULTIPLE_START,
  payload: arrayFiled,
});
