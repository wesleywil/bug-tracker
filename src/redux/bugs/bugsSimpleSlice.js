import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { selectBugByIdSimple } from "../../server/bugs_table";

const initialState = {
  bug_by_id: {},
  status: "idle",
  error: null,
};

export const fetchBugById = createAsyncThunk(
  "bug_by_id/fetchBugById",
  async (id) => {
    console.log("BUG ID=> ", id);
    const response = await selectBugByIdSimple(id);
    return response[0];
  }
);

export const bugByIdSimpleSlice = createSlice({
  name: "bug_by_id",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBugById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBugById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.bug_by_id = action.payload;
      })
      .addCase(fetchBugById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default bugByIdSimpleSlice.reducer;
