import SHOP_ACTION_TYPES from './shop.types';

export const getCollectionStart = (pageAndLimit) => ({
  type: SHOP_ACTION_TYPES.GET_COLLECTIONS_START,
  payload: pageAndLimit,
});

export const getBestSaleStart = () => ({
  type: SHOP_ACTION_TYPES.GET_COLLECTIONS_BEST_SALE_START,
});

export const getCollectionSuccess = (data) => ({
  type: SHOP_ACTION_TYPES.GET_COLLECTIONS_SUCCESS,
  payload: data,
});

export const getCollectionFailure = () => ({
  type: SHOP_ACTION_TYPES.GET_COLLECTIONS_FAILURE,
});

export const updateContentProductStart = (data) => ({
  type: SHOP_ACTION_TYPES.UPDATE_CONTENT_P_START,
  payload: data,
});

export const updateContentProductSuccess = () => ({
  type: SHOP_ACTION_TYPES.UPDATE_CONTENT_P_SUCCESS,
});

export const updateContentProductFailure = () => ({
  type: SHOP_ACTION_TYPES.UPDATE_CONTENT_P_FAILURE,
});
