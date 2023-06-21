import { configureStore } from "@reduxjs/toolkit";
import generalReducer from "./general/generalSlice";

export const store = configureStore({
  reducer: {
    general: generalReducer,
  },
});
