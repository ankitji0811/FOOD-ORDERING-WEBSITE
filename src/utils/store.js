import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    sidebar: sidebarSlice,
  },
});

export default store;
