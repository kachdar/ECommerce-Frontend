export const addDecimal = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  state.totalPrice = addDecimal(
    state.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    )
  );

  state.totalAmount = state.cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  localStorage.setItem("cart", JSON.stringify(state));

  return state;
};
