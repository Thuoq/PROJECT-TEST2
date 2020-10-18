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

export const userChangePassWordStart = (objPassword) => ({
  type: USER_ACTIONS_TYPES.CHANGE_PASSWORD_START,
  payload: objPassword,
});
export const userChangePassWordSuccess = (user) => ({
  type: USER_ACTIONS_TYPES.CHANGE_PASSWORD_SUCCESS,
  payload: user,
});

export const forgotPasswordStart = (email) => ({
  type: USER_ACTIONS_TYPES.FORGOT_PASSWORD_START,
  payload: email,
});

export const forgotPasswordSuccess = () => ({
  type: USER_ACTIONS_TYPES.FORGOT_PASSWORD_SUCCESS,
});
export const forgotPasswordFailure = () => ({
  type: USER_ACTIONS_TYPES.FORGOT_PASSWORD_FAILURE,
});

export const resetPasswordStart = (passwordObj) => ({
  type: USER_ACTIONS_TYPES.RESET_PASSWORD_START,
  payload: passwordObj,
});

export const resetPasswordFailure = () => ({
  type: USER_ACTIONS_TYPES.RESET_PASSWORD_FAILURE,
});

export const resetPasswordSuccess = (user) => ({
  type: USER_ACTIONS_TYPES.RESET_PASSWORD_SUCCESS,
  payload: user,
});
export const userChangePasswordFailure = () => ({
  type: USER_ACTIONS_TYPES.CHANGE_PASSWORD_FAILURE,
});
export const authExpired = () => {
  localStorage.removeItem('login');
  return {
    type: USER_ACTIONS_TYPES.AUTH_EXPIRED_TYPES,
  };
};
