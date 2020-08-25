import {takeLatest, all, call,put ,select} from 'redux-saga/effects';
import axios from 'axios';
import USER_ACTIONS_TYPES from '../user/user.types';
import {setCurrentUser,signOutSuccess} from '../user/user.action';
import { selectCurrentUser } from './user.selector';


export function fetchUserToServer (data,type) {
    return axios(`http://localhost:2222/user/${type}`,{
        method: "post",
        data: data
    })
}

export function fetchUpdateAddressToServer(idUser,data) {
    let token = "Bearer " + JSON.parse(localStorage.getItem("login"));
    return axios(`http://localhost:2222/user/address`, {
        method : "POST",
        headers : {
            'Authorization': token
        }, 
        data : data
    })
}




export function * signUp({payload}) {
   const {data : {data : {user},token}} = yield call(fetchUserToServer,payload,"register");
   yield put(setCurrentUser(user));
   localStorage.setItem("login",JSON.stringify(token))
}

export function* signIn({payload}) {
    const {data : {data : {user},token}} = yield call(fetchUserToServer,payload, "signIn");
    yield put(setCurrentUser(user));
    localStorage.setItem("login",JSON.stringify(token))
}

export function* signOut() {
    localStorage.removeItem("login")
    yield put(signOutSuccess())
}

export function* updateAddressCheckOut({payload}) {
    const currentUser =  yield select(selectCurrentUser);
   
    const {data : {data : {user}}} = yield call(fetchUpdateAddressToServer,currentUser._id, payload);
    yield put(setCurrentUser(user));
}

export function* onSignOutStart() {
    yield takeLatest(USER_ACTIONS_TYPES.SIGN_OUT_START, signOut)
}


export function* onSignUpStart() {
    yield takeLatest(USER_ACTIONS_TYPES.SIGN_UP_START,signUp);
}
export function* onSignInStart() {
    yield takeLatest(USER_ACTIONS_TYPES.SIGN_IN_START,signIn)
}

export function* onUpdateAddress() {
    yield takeLatest(USER_ACTIONS_TYPES.UPDATE_ADDRESS_START, updateAddressCheckOut)
}


export function* userSagas() {
    yield all([
        call(onSignUpStart),
        call(onSignInStart),
        call(onSignOutStart),
        call(onUpdateAddress)
    ])
}