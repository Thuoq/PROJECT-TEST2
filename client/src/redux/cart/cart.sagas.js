import {takeLatest , call , all,put} from 'redux-saga/effects';
import USER_ACTIONS_TYPES from '../user/user.types';
import {clearCart} from './cart.action';
import CHECKOUT_ACTIONS_TYPE from '../check-out/check-out.types';



export function * clearCartOnCheckOutSuccess() {
    yield put(clearCart())
}

export function * clearCartOnSignOut () {
    yield put(clearCart())
}


export function * onSignOuSuccess () {
   yield takeLatest(USER_ACTIONS_TYPES.SIGN_OUT_SUCCESS,clearCartOnSignOut);
}

export function * onCheckOutSuccess() {
    yield takeLatest(CHECKOUT_ACTIONS_TYPE.CHECK_OUT_SUCCESS,clearCartOnCheckOutSuccess );
}

export function* cartSagas() {
    yield all([
        call(onSignOuSuccess),
        call(onCheckOutSuccess)
    ])
}