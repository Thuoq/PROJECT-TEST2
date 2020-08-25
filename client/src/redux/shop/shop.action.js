import SHOP_ACTION_TYPES from './shop.types';



export const getCollectionStart = (pageAndLimit) => ({
    type: SHOP_ACTION_TYPES.GET_COLLECTIONS_START,
    payload : pageAndLimit
})

export const getCollectionSuccess = data => ({
    type: SHOP_ACTION_TYPES.GET_COLLECTIONS_SUCCESS,
    payload : data
})

export const changeCurrentPage = page => ({
    type : SHOP_ACTION_TYPES.CHANGE_CURRENT_PAGE,
    payload : page
})