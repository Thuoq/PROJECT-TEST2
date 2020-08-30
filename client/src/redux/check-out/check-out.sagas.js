import axios from 'axios'; 
import moment from 'moment';
import {takeLatest, all, call,put , select} from 'redux-saga/effects';
import CHECKOUT_ACTIONS_TYPE from './check-out.types';
import {selectCartItem , selectTotalPrice} from '../cart/cart.selector';
import {checkOutSuccess} from './check-out.action'
import { message } from 'antd';



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
    try {
        const cartItem = yield select(selectCartItem);
        const totalMoney = yield select(selectTotalPrice);
        const data = Object.assign({} , {
            cart:cartItem,
            totalMoney,
            address: payload,
            createAt: `${moment(new Date()).format('MMMM Do YYYY, h:mm:ss a')}`
        })
        yield call(fetchBookingToServer,data);
        yield put(checkOutSuccess());
    }catch(err) {
        message.error(`${err.response.data.message}`);
    }
}

export function *onCheckOutStart () {
    yield takeLatest(CHECKOUT_ACTIONS_TYPE.CHECK_OUT_START, checkOut)
}



export function* checkOutSagas () {
    yield all([call (onCheckOutStart)])
} 