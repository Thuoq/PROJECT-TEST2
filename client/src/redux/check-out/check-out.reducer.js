import CHECKOUT_ACTIONS_TYPE from './check-out.types';
const INITIAL_STATE = {
    success : false,
    isFetching: false
}


const checkOutReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CHECKOUT_ACTIONS_TYPE.CHECK_OUT_START:
            return {
                ...state,
                isFetching: true,
            }
        case CHECKOUT_ACTIONS_TYPE.CHECK_OUT_SUCCESS:
            return {
                ...state,
                success : !state.success,
                isFetching: false,
            }
        case CHECKOUT_ACTIONS_TYPE.CHECK_OUT_FAILURE:
            return {
                ...state,
                isFetching : false, 
                success: false
            }
        
        case CHECKOUT_ACTIONS_TYPE.SET_STATE_TO_FALSE:
            return {
                ...state,
                success : false
            }
        
        default: 
            return state;
    }
}

export default checkOutReducer;