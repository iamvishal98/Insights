import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import salesService from "./salesService";

const initialState = {
  salesData: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getSalesData = createAsyncThunk(
  "/sales/getSalesData",
  async (_, thunkAPI) => {
    try {
      return await salesService.getSalesData();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSalesData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSalesData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.salesData = action.payload;
      })
      .addCase(getSalesData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.salesData = null;
      });
  },
});

export const { reset } = salesSlice.actions;
export default salesSlice.reducer;
