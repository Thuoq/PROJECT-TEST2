import axios from 'axios'; 
import moment from 'moment';
import {takeLatest, all, call,put , select} from 'redux-saga/effects';
import CHECKOUT_ACTIONS_TYPE from './check-out.types';
import {selectCurrentUser} from '../user/user.selector';
import {selectCartItem , selectTotalPrice} from '../cart/cart.selector';
import {checkOutSuccess} from './check-out.action'



export function fetchBookingToServer (data) {
    let token = "Bearer " + JSON.parse(localStorage.getItem("login"));
    return axios(`http://localhost:2222/booking`, {
        method : "POST",
        headers : {
            'Authorization': token
        }, 
        data : data
    })
}



export function *checkOut({payload}) {
    const currentUser = yield select(selectCurrentUser);
    const cartItem = yield select(selectCartItem);
    const totalMoney = yield select(selectTotalPrice);
    const data = Object.assign({} , {
        cart:cartItem,
        totalMoney,
        address: payload,
        idUser : currentUser._id,
        createAt: `${moment(new Date()).format('MMMM Do YYYY, h:mm:ss a')}`
    })
    yield call(fetchBookingToServer,data);
    yield put(checkOutSuccess());
}

export function *onCheckOutStart () {
    yield takeLatest(CHECKOUT_ACTIONS_TYPE.CHECK_OUT_START, checkOut)
}



export function* checkOutSagas () {
    yield all([call (onCheckOutStart)])
} 