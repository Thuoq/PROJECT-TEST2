import { takeLatest, call, put, all } from 'redux-saga/effects';
import SHOP_ACTION_TYPES from './shop.types';
import { handleConvertDataBestSale } from './shop.utils';
import {
  getCollectionSuccess,
  getCollectionFailure,
  updateContentProductFailure,
  updateContentProductSuccess,
} from './shop.action';
import { URL, SHOP_API, SHOP_API_TOP_8_SALES } from '../../constants/api';
import AxiosInstance from '../../helpers/interceptor';
import { messageError, messageSuccess } from '../../helpers/message';
import patchBookingContentOrProductContent from '../../helpers/BookingProduct';

export function fetchCollectionToServer({ limit, page, nameEN, sort }) {
  return AxiosInstance(
    `${URL}${SHOP_API}?limit=${limit}&page=${page}&nameEN=${nameEN}&sort=${sort}`,
    {
      method: 'get',
    }
  );
}
export function fetchBestSaleToServer() {
  return AxiosInstance(`${URL}${SHOP_API}${SHOP_API_TOP_8_SALES}`, {
    method: 'get',
  });
}

export function* fetchCollectionAsync({ payload }) {
  try {
    const obj = {
      page: 1,
      limit: 24,
      nameEN: 'T',
      sort: '',
    };
    if (payload) {
      obj.page = payload.page || 1;
      obj.limit = payload.limit || 24;
      obj.sort = payload.sort;
      obj.nameEN = payload.nameEN || 'T';
    }

    const {
      data: {
        data: { products },
      },
    } = yield call(fetchCollectionToServer, obj);
    yield put(getCollectionSuccess(products));
  } catch (err) {
    messageError(err);
    put(getCollectionFailure());
  }
}
export function* getBestSale() {
  try {
    const {
      data: {
        data: { products },
      },
    } = yield call(fetchBestSaleToServer);
    const bestSaleConvert = handleConvertDataBestSale(products);
    yield put(getCollectionSuccess(bestSaleConvert));
  } catch (err) {
    messageError(err);
    put(getCollectionFailure());
  }
}
export function* updateContentProduct({ payload }) {
  try {
    yield call(patchBookingContentOrProductContent, payload);
    yield put(updateContentProductSuccess());
    messageSuccess();
  } catch (err) {
    messageError(err);
    put(updateContentProductFailure());
  }
}

export function* onUpdateContentProduct() {
  yield takeLatest(
    SHOP_ACTION_TYPES.UPDATE_CONTENT_P_START,
    updateContentProduct
  );
}
export function* fetchCollectionsStart() {
  yield takeLatest(
    SHOP_ACTION_TYPES.GET_COLLECTIONS_START,
    fetchCollectionAsync
  );
}
export function* onGetBestSaleStart() {
  yield takeLatest(
    SHOP_ACTION_TYPES.GET_COLLECTIONS_BEST_SALE_START,
    getBestSale
  );
}
export function* shopSagas() {
  yield all([
    call(fetchCollectionsStart),
    call(onGetBestSaleStart),
    call(onUpdateContentProduct),
  ]);
}
