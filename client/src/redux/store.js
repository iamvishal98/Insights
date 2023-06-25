import { configureStore } from "@reduxjs/toolkit";
import generalReducer from "./general/generalSlice";
import facingReducer from "./facing/facingSlice";
import salesReducer from "./sales/salesSlice";
import managementReducer from "./management/managementSlice";

export const store = configureStore({
  reducer: {
    general: generalReducer,
    facing: facingReducer,
    sales: salesReducer,
    management: managementReducer,
  },
});
