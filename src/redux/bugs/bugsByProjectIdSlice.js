import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { selectBugsByProject } from "../../server/bugs_table";

const initialState = {
  bugs: [],
  status: "idle",
  error: null,
};

export const fetchBugsByProject = createAsyncThunk(
  "bugs/fetchBugsByProject",
  async (projectId) => {
    const response = await selectBugsByProject(projectId);
    return response;
  }
);

export const bugsSlice = createSlice({
  name: "bugs_by_project_id",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBugsByProject.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchBugsByProject.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.bugs = action.payload;
      })
      .addCase(fetchBugsByProject.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const bugsByProjectId = (state) => state.bugs_by_project_id.bugs;

export default bugsSlice.reducer;
