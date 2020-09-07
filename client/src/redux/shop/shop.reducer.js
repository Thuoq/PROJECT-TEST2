import SHOP_ACTION_TYPES from './shop.types';
import {storeQueryUser} from './shop.utils';
const INITIAL_STATE = {
      collections: null,
      isLoading : false,
      currentPage : 1,
      currentQuery: null
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOP_ACTION_TYPES.GET_COLLECTIONS_START:
        return {
          ...state,
          isLoading : true,
          currentQuery: storeQueryUser(state.currentQuery,action.payload),
        }
    case SHOP_ACTION_TYPES.GET_COLLECTIONS_SUCCESS:
      return {
          ...state,
          collections: action.payload,
          isLoading : false 
        }
    case SHOP_ACTION_TYPES.GET_COLLECTIONS_BEST_SALE_START:
        return {
          ...state,
          isLoading : true
        }
    case SHOP_ACTION_TYPES.CHANGE_CURRENT_PAGE:
        return {
          ...state,
          currentPage: action.payload,
        }
    default:
      return state;
  }
};

export default shopReducer;
