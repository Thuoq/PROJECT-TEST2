import CHECKOUT_ACTIONS_TYPE from './check-out.types';

export const checkOutStart = (address) => ({
  type: CHECKOUT_ACTIONS_TYPE.CHECK_OUT_START,
  payload: address,
});

export const checkOutSuccess = () => ({
  type: CHECKOUT_ACTIONS_TYPE.CHECK_OUT_SUCCESS,
});

export const checkOutFailure = () => ({
  type: CHECKOUT_ACTIONS_TYPE.CHECK_OUT_FAILURE,
});

export const setCheckOuToFalse = () => ({
  type: CHECKOUT_ACTIONS_TYPE.SET_STATE_TO_FALSE,
});
