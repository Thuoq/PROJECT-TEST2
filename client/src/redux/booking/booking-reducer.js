import BOOKING_ACTION_TYPES from './booking-types'
const INITIAL_STATE = {
    historyBook : [],
    isLoading: false
}


const bookingReducer = (state = INITIAL_STATE , action) => {
    switch(action.type) {
        case BOOKING_ACTION_TYPES.GET_BOOKING_START: {
            return {
                ...state,
                isLoading: true
            }
        }
        case BOOKING_ACTION_TYPES.GET_BOOKING_SUCCESS:
            return {
                ...state,
                historyBook : action.payload,
                isLoading: false
            }
        default : 
            return state;
    }
}

export default bookingReducer;