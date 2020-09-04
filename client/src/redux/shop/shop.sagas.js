import {takeLatest , call ,put , all ,select} from 'redux-saga/effects';
import axios from 'axios';
import SHOP_ACTION_TYPES from './shop.types';
import {handleConvertDataBestSale} from './shop.utils';
import {selectCurrentQuery} from '../shop/shop.selector';
import {getCollectionSuccess ,changeCurrentPage, getBestSaleSuccess} from './shop.action';
import {URL,SHOP_API,SHOP_API_TOP_4_SALES} from '../../constants/api';


export function fetchCollectionToServer(limit,page,nameEN) {
    return axios(`${URL}${SHOP_API}?limit=${limit}&page=${page}&nameEN=${nameEN}`,{
        method: "get",
    })
}
export function fetchBestSaleToServer() {
    return axios(`${URL}${SHOP_API}${SHOP_API_TOP_4_SALES}`,{
        method: 'get'
    })
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