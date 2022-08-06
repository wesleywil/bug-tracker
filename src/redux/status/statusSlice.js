import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { allStatus as selectAllStatus } from "../../server/status_table";

const initialState = {
  arrStatus: [],
  status: "idle",
  error: null,
};

export const fetchStatus = createAsyncThunk("status/fetchStatus", async () => {
  const response = await selectAllStatus();
  return response;
});

export const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchStatus.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStatus.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.arrStatus = action.payload;
      })
      .addCase(fetchStatus.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const allStatus = (state) => state.status.arrStatus;

export const selectStatusById = (state, statusId) =>
  state.status.arrStatus.find((status) => status.id === statusId);

export default statusSlice.reducer;
