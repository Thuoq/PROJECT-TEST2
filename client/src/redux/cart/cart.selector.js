import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartItem = createSelector(
  [selectCart],
  (cart) => cart.cartItems,
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden,
);

export const selectTotalPrice = createSelector(
  [selectCartItem],
  (cartItems) => cartItems.reduce((prev, next) => (
    prev += (next.quantity * 1) * (next.priceUSD * 1)
  ), 0),
);

export const selectTotalQuantity = createSelector(
  [selectCartItem],
  (cartItems) => cartItems.reduce((prev, next) => (
    prev += (next.quantity * 1)
  ), 0),
);
