import BOOKING_ACTION_TYPES from './booking-types';

const INITIAL_STATE = {
  historyBook: [],
  isLoading: false,
};

const bookingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BOOKING_ACTION_TYPES.GET_BOOKING_START:
    case BOOKING_ACTION_TYPES.UPDATE_COMPLETE_START:
    case BOOKING_ACTION_TYPES.UPDATE_COMPLETE_MULTIPLE_START:
    case BOOKING_ACTION_TYPES.GET_BOOKING_WAY_BILL_START:
    case BOOKING_ACTION_TYPES.UPDATE_CONTENT_B_START:
      return {
        ...state,
        isLoading: true,
      };
    case BOOKING_ACTION_TYPES.GET_BOOKING_SUCCESS:
    case BOOKING_ACTION_TYPES.GET_BOOKING_WAY_BILL_SUCCESS:
      return {
        ...state,
        historyBook: action.payload,
        isLoading: false,
      };
    case BOOKING_ACTION_TYPES.UPDATE_CONTENT_B_SUCCESS:
    case BOOKING_ACTION_TYPES.UPDATE_COMPLETE_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case BOOKING_ACTION_TYPES.UPDATE_CONTENT_B_FAILURE:
    case BOOKING_ACTION_TYPES.GET_BOOKING_WAY_BILL_FAILURE:
    case BOOKING_ACTION_TYPES.GET_BOOKING_FAILURE:
    case BOOKING_ACTION_TYPES.UPDATE_COMPLETE_FAILURE:
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};

export default bookingReducer;
