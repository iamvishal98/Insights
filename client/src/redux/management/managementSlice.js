import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import managementService from "./managementService";

const initialState = {
  adminData: [],
  perfromanceData: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getadminData = createAsyncThunk(
  "/management/getadminData",
  async (_, thunkAPI) => {
    try {
      return await managementService.getadminData();
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

export const getPerformanceData = createAsyncThunk(
  "/management/getPerformanceData",
  async (userId, thunkAPI) => {
    try {
      return await managementService.getPerformanceData(userId);
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
export const managementSlice = createSlice({
  name: "management",
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
      .addCase(getadminData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getadminData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.adminData = action.payload;
      })
      .addCase(getadminData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.adminData = null;
      })
      .addCase(getPerformanceData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPerformanceData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.perfromanceData = action.payload;
      })
      .addCase(getPerformanceData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.perfromanceData = null;
      });
  },
});

export const { reset } = managementSlice.actions;
export default managementSlice.reducer;
