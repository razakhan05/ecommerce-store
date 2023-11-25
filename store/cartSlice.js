import { createSlice } from "@reduxjs/toolkit";

// Retrieve cart items from localStorage if available
const initialState = {
  cartItems: JSON.parse(localStorage?.getItem("cartItems")) || [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const totalItems = state.cartItems.find(
        (p) => p.id === action.payload.id
      );
      if (totalItems) {
        totalItems.quantity++;
        totalItems.price = totalItems.singleProductPrice * totalItems.quantity;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      // Save cart items to localStorage after updating
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    updateCart: (state, action) => {
      state.cartItems = state.cartItems.map((p) => {
        if (p.id === action.payload.id) {
          if (action.payload.key === "quantity") {
            p.price = p.singleProductPrice * action.payload.val;
          }
          return { ...p, [action.payload.key]: action.payload.val };
        }
        return p;
      });
      // Save cart items to localStorage after updating
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (p) => p.id !== action.payload.id
      );
      // Save cart items to localStorage after updating
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, updateCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
