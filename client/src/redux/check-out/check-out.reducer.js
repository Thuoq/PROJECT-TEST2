import CHECKOUT_ACTIONS_TYPE from './check-out.types';
const INITIAL_STATE = {
    success : false,
    openModelAddress : false
}


const checkOutReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CHECKOUT_ACTIONS_TYPE.CHECK_OUT_SUCCESS:
            return {
                ...state,
                success : !state.success
            }
        case CHECKOUT_ACTIONS_TYPE.SET_STATE_TO_FALSE:
            return {
                ...state,
                success : false
            }
        case CHECKOUT_ACTIONS_TYPE.OPEN_MODEL_CHECK_OUT:
            return {
                ...state, 
                openModelAddress : !state.openModelAddress
            }
        default: 
            return state;
    }
}

export default checkOutReducer;