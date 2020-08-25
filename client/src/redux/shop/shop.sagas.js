import {takeLatest , call ,put , all } from 'redux-saga/effects';
import axios from 'axios';
import SHOP_ACTION_TYPES from './shop.types';
import {getCollectionSuccess ,changeCurrentPage} from './shop.action';

export function fetchCollectionToServer(limit,page,nameEN) {
    return axios(`http://localhost:2222/product?limit=${limit}&page=${page}&nameEN=${nameEN}`,{
        method: "get",
    })
}



export function* fetchCollectionAsync({payload}) { 
    let page = 1;
    let limit = 13;
    let nameEN = " ";
    if(payload) {
        page = payload.page || 1;
        limit = payload.limit || 13;
        nameEN = payload.nameEN
    }
    yield put(changeCurrentPage(page))
    const {data : {data : {products}}} = yield call(fetchCollectionToServer,limit,page,nameEN);
    yield put(getCollectionSuccess(products))
    
}



export function* fetchCollectionsStart() {
    yield takeLatest(SHOP_ACTION_TYPES.GET_COLLECTIONS_START,fetchCollectionAsync)
}


export function* shopSagas () {
    yield all([call(fetchCollectionsStart)])
}