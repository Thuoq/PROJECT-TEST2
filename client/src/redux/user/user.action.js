import USER_ACTIONS_TYPES from './user.types';

export const setCurrentUser = (user) => ({
  type: USER_ACTIONS_TYPES.SET_CURRENT_USER,
  payload: user,
});

export const signUpStart = (userCredentials) => ({
  type: USER_ACTIONS_TYPES.SIGN_UP_START,
  payload: userCredentials,
});
export const signUpFailure = (errMessage) => ({
  type: USER_ACTIONS_TYPES.SIGN_UP_FAILURE,
  payload: errMessage,
});

export const signInStart = (emailAndPassword) => ({
  type: USER_ACTIONS_TYPES.SIGN_IN_START,
  payload: emailAndPassword,
});

export const signInFailure = (errMessage) => ({
  type: USER_ACTIONS_TYPES.SIGN_IN_FAILURE,
  payload: errMessage,
});

export const signOutStart = () => ({
  type: USER_ACTIONS_TYPES.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: USER_ACTIONS_TYPES.SIGN_OUT_SUCCESS,
});

export const updateAddressStart = (address) => ({
  type: USER_ACTIONS_TYPES.UPDATE_ADDRESS_START,
  payload: address,
});

export const updatePhoneNumberStart = (phoneNumber) => ({
  type: USER_ACTIONS_TYPES.UPDATE_PHONE_START,
  payload: phoneNumber,
});

export const updateUserFailure = () => ({
  type: USER_ACTIONS_TYPES.UPDATE_USER_FAILURE,
});

export const authExpired = () => {
  localStorage.removeItem('login');
  return {
    type: USER_ACTIONS_TYPES.AUTH_EXPIRED_TYPES,
  };
};
