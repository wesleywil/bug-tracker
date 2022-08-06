import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { allPriorities as selectPriorities } from "../../server/priorities_table";

const initialState = {
  priorities: [],
  status: "idle",
  error: null,
};

export const fetchPriorities = createAsyncThunk(
  "priorities/fetchPriorities",
  async () => {
    const response = await selectPriorities();
    return response;
  }
);

export const prioritiesSlice = createSlice({
  name: "priorities",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPriorities.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPriorities.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.priorities = action.payload;
      })
      .addCase(fetchPriorities.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const allPriorities = (state) => state.priorities.priorities;

export const selectPriorityById = (state, priorityId) =>
  state.priorities.priorities.find((priority) => priority.id === priorityId);

export default prioritiesSlice.reducer;
