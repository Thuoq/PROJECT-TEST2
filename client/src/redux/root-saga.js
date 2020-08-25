import { all , call } from 'redux-saga/effects';
import {userSagas} from './user/user.sagas';
import {cartSagas} from './cart/cart.sagas';
import {checkOutSagas} from './check-out/check-out.sagas';
import {shopSagas} from './shop/shop.sagas';
import {bookingSagas} from './booking/booking-sagas';

export default function * rootSaga() {
    yield all([
        call(userSagas),
        call(cartSagas),
        call(checkOutSagas),
        call(shopSagas),
        call(bookingSagas)])
}


