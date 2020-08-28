import USER_ACTIONS_TYPES from './user.types';
const INITIAL_STATE = {
  currentUser: null,
  errorMessage : null,
  isLoading: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_ACTIONS_TYPES.SIGN_UP_START:
    case USER_ACTIONS_TYPES.SIGN_IN_START:
      return {
        ...state,
        isLoading: true,
        errorMessage:null
      }
    case USER_ACTIONS_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        errorMessage: null,
        isLoading: false
      }      
    case USER_ACTIONS_TYPES.SIGN_OUT_SUCCESS:
        return {
          ...state,
          currentUser: null,
          errorMessage: null
        }
    case USER_ACTIONS_TYPES.SIGN_UP_FAILURE:
    case USER_ACTIONS_TYPES.SIGN_IN_FAILURE:
        return {
          ...state,
          errorMessage: action.payload,
          isLoading: false
        }

    case "SET_TO_FALSE" : 
        return {
          ...state,
          errorMessage: null
        }
    default:
      return state;
  }
};

export default userReducer;
