import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      // state.items.push(action.payload);
      const existingItem = state.items.find(
        (item) => item.card.info.id === action.payload.card.info.id
      );
      if (existingItem) {
        state.items = state.items.map((item) =>
          item.card.info.id === action.payload.card.info.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      } else {
        state.items.push(action.payload);
      }
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item?.card?.info?.id !== action?.payload?.card?.info?.id
      );
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
    incrementQty: (state, action) => {
      state.items = state.items.map((item) =>
        item.card.info.id === action.payload.card.info.id
          ? { ...item, qty: item.qty + 1 }
          : item
      );
    },
    decrementQty: (state, action) => {
      state.items = state.items.map((item) =>
        item.card.info.id === action.payload.card.info.id
          ? { ...item, qty: item.qty - 1 }
          : item
      );
    },
  },
});

export const { addItem, deleteItem, clearCart, incrementQty, decrementQty } =
  cartSlice.actions;

export default cartSlice.reducer;
