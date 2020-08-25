import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItemToCart = (cartItem) => ({
  type: CartActionTypes.ADD_ITEM_TO_CART,
  payload: cartItem,
});

export const decreaseItemToCart = (cartItem) => ({
  type: CartActionTypes.DECREASE_ITEM_TO_CART,
  payload: cartItem,
});

export const deleteItemToCart = (cartItem) => ({
  type: CartActionTypes.DELETE_ITEM_TO_CART,
  payload: cartItem,
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART_SIGN_OUT
})

