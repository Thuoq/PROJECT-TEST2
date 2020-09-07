import moment from 'moment';
import AxiosInstance from '../../helpers/interceptor';
import {takeLatest, all, call,put , select} from 'redux-saga/effects';
import CHECKOUT_ACTIONS_TYPE from './check-out.types';
import {selectCartItem , selectTotalPrice} from '../cart/cart.selector';
import {checkOutSuccess,checkOutFailure} from './check-out.action'
import { messageError } from '../../helpers/error.message';
import {URL,BOOKING_API} from '../../constants/api';
import {getToken } from '../../helpers/auth'


export function fetchBookingToServer (data) {
    let token = "Bearer " + getToken();
    return AxiosInstance(`${URL}${BOOKING_API}`, {
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
        messageError(`${err}`);
        yield put(checkOutFailure());
       
    }
}

export function *onCheckOutStart () {
    yield takeLatest(CHECKOUT_ACTIONS_TYPE.CHECK_OUT_START, checkOut)
}



export function* checkOutSagas () {
    yield all([call (onCheckOutStart)])
} 