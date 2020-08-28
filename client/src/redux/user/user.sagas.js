import {takeLatest, all, call,put } from 'redux-saga/effects';
import axios from 'axios';
import USER_ACTIONS_TYPES from '../user/user.types';
import {setCurrentUser,signOutSuccess,signUpFailure,signInFailure} from '../user/user.action';


export function fetchUserToServer (data,type) {
    return axios(`http://localhost:2222/user/${type}`,{
        method: "post",
        data: data
    })
}

export function fetchUpdateAddressToServer(data) {
    let token = "Bearer " + JSON.parse(localStorage.getItem("login"));
    return axios(`http://localhost:2222/user/address`, {
        method : "POST",
        headers : {
            'Authorization': token
        }, 
        data : data
    })
}

export function fetchUpdatePhoneToServer(data) {
    let token = "Bearer " + JSON.parse(localStorage.getItem("login"));
    return axios(`http://localhost:2222/user/phone`, {
        method : "PATCH",
        headers : {
            'Authorization': token
        }, 
        data : data
    })
}
 

export function * signUp({payload}) {   
    try {
        const {data : {data : {user},token}} = yield call(fetchUserToServer,payload,"register");
        yield put(setCurrentUser(user));
        localStorage.setItem("login",JSON.stringify(token));
    } catch(err) {
        yield put(signUpFailure(err.response.data.message));
    }
}

export function* signIn({payload}) {
    try {
        const {data : {data : {user},token}} = yield call(fetchUserToServer,payload, "signIn");
        yield put(setCurrentUser(user));
        localStorage.setItem("login",JSON.stringify(token))
    }catch(err) {
        yield put(signInFailure(err.response.data.message));
    }
}

export function* signOut() {
    localStorage.removeItem("login")
    yield put(signOutSuccess())
}

export function* updateAddressCheckOut({payload}) {
    const {data : {data : {user}}} = yield call(fetchUpdateAddressToServer, payload);
    yield put(setCurrentUser(user));
}

export function* updatePhoneNumber({payload}) {
    
    const {data : {data : {user}}} = yield call(fetchUpdatePhoneToServer,payload);
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

export function* onUpdatePhone() {
    yield takeLatest(USER_ACTIONS_TYPES.UPDATE_PHONE_START,updatePhoneNumber )
}


export function* userSagas() {
    yield all([
        call(onSignUpStart),
        call(onSignInStart),
        call(onSignOutStart),
        call(onUpdateAddress),
        call(onUpdatePhone)
    ])
}