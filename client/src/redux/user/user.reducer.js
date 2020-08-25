import USER_ACTIONS_TYPES from './user.types';
const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_ACTIONS_TYPES.SET_CURRENT_USER:
    
      return {
        ...state,
        currentUser: action.payload
      }      
    case USER_ACTIONS_TYPES.SIGN_OUT_SUCCESS:
        return {
          ...state,
          currentUser: null
        }
    default:
      return state;
  }
};

export default userReducer;
