import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    remove1ItemFromCart(state, action) {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
    
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== action.payload.id
          );
        }
      }
    },
    
    
    

    removeItemFromCart(state,action){
        state.cartItems = state.cartItems.filter(
            (item) => item.id !== action.payload
        );
    },

    clearCart(state){
        state.cartItems = [];
    },

    increaseItemQTY(state,action){
        const itemToIncrease = state.cartItems.find(
            (item) => item.id === action.payload
        );
        if (itemToIncrease) {
            itemToIncrease.quantity += 1;
          }
    },

    decreaseItemQTY(state,action){
        const itemToDecrease = state.cartItems.find(
            (item) => item.id === action.payload
        );
        if(itemToDecrease && itemToDecrease.quantity > 1){
            itemToDecrease.quantity -= 1;
        }
    }
  },
});

export const {
    addItemToCart,
    remove1ItemFromCart,
    removeItemFromCart,
    clearCart,
    increaseItemQty,
    decreaseItemQty,
  } = CartSlice.actions;


export default CartSlice.reducer;
