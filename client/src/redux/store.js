import { configureStore } from "@reduxjs/toolkit";
import generalReducer from "./general/generalSlice";
import facingReducer from "./facing/facingSlice";

export const store = configureStore({
  reducer: {
    general: generalReducer,
    facing: facingReducer,
  },
});
