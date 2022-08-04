import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { allBugs as selectAllBugs } from "../../server/bugs_table";

const initialState = {
  bugs: [],
  status: "idle",
  error: null,
};

export const fetchBugs = createAsyncThunk("bugs/fetchBugs", async () => {
  const response = await selectAllBugs();
  return response;
});

export const bugsSlice = createSlice({
  name: "bugs",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBugs.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchBugs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.bugs = action.payload;
      })
      .addCase(fetchBugs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { listBugs } = bugsSlice.actions;

export const allBugs = (state) => state.bugs.bugs;

export const selectBugById = (state, projectId) =>
  state.bugs.bugs.find((bugs) => bugs.bug_id === projectId);

export default bugsSlice.reducer;
