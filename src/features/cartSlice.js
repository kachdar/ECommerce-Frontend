import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "./utils/cartUtils";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [], totalPrice: 0, totalAmount: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const existItem = state.cartItems.find((x) => x.id === item.id);

      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x.id === existItem.id ? { ...x, quantity: ++x.quantity } : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      return updateCart(state);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((x) => x.id !== action.payload);
      return updateCart(state);
    },
    decreaseAmout: (state, action) => {
      state.cartItems = state.cartItems.map((x) =>
        x.id === action.payload ? { ...x, quantity: --x.quantity } : x
      );
      return updateCart(state);
    },
    clearCartItems: (state) => {
      state.cartItems = [];
      return updateCart(state);
    }
  },
});

export const { addToCart, removeFromCart, decreaseAmout, clearCartItems } = cartSlice.actions;

export default cartSlice.reducer;
