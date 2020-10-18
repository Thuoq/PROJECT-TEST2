import USER_ACTIONS_TYPES from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  isUpdating: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_ACTIONS_TYPES.SIGN_UP_START:
    case USER_ACTIONS_TYPES.SIGN_IN_START:
      return {
        ...state,
        isLoading: true,
      };

    case USER_ACTIONS_TYPES.CHANGE_PASSWORD_START:
    case USER_ACTIONS_TYPES.RESET_PASSWORD_START:
    case USER_ACTIONS_TYPES.FORGOT_PASSWORD_START:
      return {
        ...state,
        isUpdating: true,
      };
    case USER_ACTIONS_TYPES.SET_CURRENT_USER:
    case USER_ACTIONS_TYPES.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isLoading: false,
        isUpdating: false,
      };
    case USER_ACTIONS_TYPES.SIGN_OUT_SUCCESS:
    case USER_ACTIONS_TYPES.AUTH_EXPIRED_TYPES:
      return {
        ...state,
        currentUser: null,
      };
    case USER_ACTIONS_TYPES.CHANGE_PASSWORD_FAILURE:
    case USER_ACTIONS_TYPES.FORGOT_PASSWORD_SUCCESS:
    case USER_ACTIONS_TYPES.RESET_PASSWORD_FAILURE:
    case USER_ACTIONS_TYPES.FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        isUpdating: false,
      };
    case USER_ACTIONS_TYPES.SIGN_UP_FAILURE:
    case USER_ACTIONS_TYPES.SIGN_IN_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
