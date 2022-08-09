import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  allBugs as selectAllBugs,
  deleteBugById,
} from "../../server/bugs_table";

const initialState = {
  bugs: [],
  bug: {},
  status: "idle",
  error: null,
};

export const fetchBugs = createAsyncThunk("bugs/fetchBugs", async () => {
  const response = await selectAllBugs();
  return response;
});

export const handleBugDelete = createAsyncThunk(
  "bugs/handleBugDelete",
  async (id) => {
    const response = await deleteBugById(id);
    return response;
  }
);

export const bugsSlice = createSlice({
  name: "bugs",
  initialState,
  reducers: {
    selectId: (state, action) => {
      state.bug = state.bugs.find((item) => item.bug_id === action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBugs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBugs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.bugs = action.payload;
      })
      .addCase(fetchBugs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(handleBugDelete.pending, (state) => {
        state.status = "loading";
      })
      .addCase(handleBugDelete.fulfilled, (state, action) => {
        state.status = "bug was deleted!";
        state.bugs = action.payload;
      })
      .addCase(handleBugDelete.rejected, (state, action) => {
        state.status = "failed to delete bug";
        state.error = action.error.message;
      });
  },
});

export const { selectId } = bugsSlice.actions;

export const allBugs = (state) => state.bugs.bugs;

export default bugsSlice.reducer;
