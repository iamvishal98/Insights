import { configureStore } from "@reduxjs/toolkit";
import generalReducer from "./general/generalSlice";
import facingReducer from "./facing/facingSlice";
import salesReducer from "./sales/salesSlice";

export const store = configureStore({
  reducer: {
    general: generalReducer,
    facing: facingReducer,
    sales: salesReducer,
  },
});
