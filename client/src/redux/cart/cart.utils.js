export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existItem = cartItems.find((el) => el._id === cartItemToAdd._id);

  if (existItem) {
    return cartItems.map((el) =>
      el._id === cartItemToAdd._id ? { ...el, quantity: el.quantity + 1 } : el
    );
  }
  return [
    ...cartItems,
    { ...cartItemToAdd, quantity: 1, key: new Date().getTime() },
  ];
};

export const decreaseItemToCart = (cartItems, cartItemToAdd) => {
  const existItem = cartItems.find((el) => el._id === cartItemToAdd._id);

  if (existItem.quantity === 1) {
    return cartItems.filter((el) => el._id !== cartItemToAdd._id);
  }

  return cartItems.map((el) =>
    el._id === cartItemToAdd._id ? { ...el, quantity: el.quantity - 1 } : el
  );
};

export const deleteItemToCart = (cartItems, cartItemToAdd) =>
  cartItems.filter((el) => el._id !== cartItemToAdd._id);
