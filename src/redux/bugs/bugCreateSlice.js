import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { createBug, createNewBugProject } from "../../server/bugs_table";

const initialState = {
  status: "idle",
  error: null,
};

export const handleCreateBug = createAsyncThunk(
  "bugs/handleCreateBug",
  async (data) => {
    const response = await createBug(data);
    return response;
  }
);

export const handleCreateBugProject = createAsyncThunk(
  "bugs/handleCreateBugProject",
  async (data) => {
    const response = await createNewBugProject(data);
    return response;
  }
);

export const bugCreateSlice = createSlice({
  name: "bug_project_create",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(handleCreateBug.pending, (state) => {
        state.status = "loading";
      })
      .addCase(handleCreateBug.fulfilled, (state) => {
        state.status = "new bug was registered!";
      })
      .addCase(handleCreateBug.rejected, (state, action) => {
        state.status = "failed to register new bug!";
        state.error = action.error.message;
      })
      .addCase(handleCreateBugProject.pending, (state) => {
        state.status = "loading";
      })
      .addCase(handleCreateBugProject.fulfilled, (state) => {
        state.status = "new bug was registered!";
      })
      .addCase(handleCreateBugProject.rejected, (state, action) => {
        state.status = "failed to register new bug!";
        state.error = action.error.message;
      });
  },
});

export default bugCreateSlice.reducer;
