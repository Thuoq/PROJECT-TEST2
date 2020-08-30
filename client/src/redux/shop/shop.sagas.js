import {takeLatest , call ,put , all ,select} from 'redux-saga/effects';
import axios from 'axios';
import SHOP_ACTION_TYPES from './shop.types';
import {selectCurrentQuery} from '../shop/shop.selector';
import {getCollectionSuccess ,changeCurrentPage, getBestSaleSuccess} from './shop.action';

export function fetchCollectionToServer(limit,page,nameEN) {
    return axios(`http://localhost:2222/product?limit=${limit}&page=${page}&nameEN=${nameEN}`,{
        method: "get",
    })
}
export function fetchBestSaleToServer() {
    return axios(`http://localhost:2222/product/get-Top-4-Sales`,{
        method: 'get'
    })
}
function handleConvertDataBestSale(arr) {
    var mark = {}
    var result = []
    for(let i = 0 ; i < arr.length ; i++) {
        mark._id = arr[i]._id;
        mark.quantity = arr[i].quantity;
        mark = {...arr[i].cart[0]}
        result.push(mark)
    }
    return result;
}
export function* fetchCollectionAsync({payload}) { 
    let page = 1;
    let limit = 12;
    let nameEN = yield select(selectCurrentQuery);
    if(payload) {
        page = payload.page || 1;
        limit = payload.limit || 12;
    }
    if(!nameEN) {
        nameEN= 's'
    }
    yield put(changeCurrentPage(page))
    const {data : {data : {products}}} = yield call(fetchCollectionToServer,limit,page,nameEN);
    yield put(getCollectionSuccess(products))
    
}
export function* getBestSale() {
    const {data: {data: {products}}} = yield call(fetchBestSaleToServer)
    const bestSaleConvert = handleConvertDataBestSale(products)
    yield put(getBestSaleSuccess(bestSaleConvert))
}
export function* fetchCollectionsStart() {
    yield takeLatest(SHOP_ACTION_TYPES.GET_COLLECTIONS_START,fetchCollectionAsync)
}
export function* onGetBestSaleStart() {
    yield takeLatest(SHOP_ACTION_TYPES.GET_BEST_SALE_START,getBestSale)
}
export function* shopSagas () {
    yield all([
        call(fetchCollectionsStart),
        call(onGetBestSaleStart)
    ])
}