import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const totalItems = state.cartItems.find(
        (p) => p.id === action.payload.id
      );
      if (totalItems) {
        totalItems.qauntity++;
        totalItems.price = totalItems.singleProductPrice * totalItems.qauntity;
      } else {
        state.cartItems.push({ ...action.payload, qauntity: 1 });
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
