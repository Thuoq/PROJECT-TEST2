import CartActionTypes from './cart.types';
import {
  addItemToCart,
  decreaseItemToCart,
  deleteItemToCart,
} from './cart.utils';

const INITIAL_STATE = {
  cartItems: [],
  hidden: false,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.DECREASE_ITEM_TO_CART:
      return {
        ...state,
        cartItems: decreaseItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.DELETE_ITEM_TO_CART:
      return {
        ...state,
        cartItems: deleteItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.CLEAR_CART_SIGN_OUT:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
