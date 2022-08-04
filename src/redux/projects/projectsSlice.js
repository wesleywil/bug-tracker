import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { allProjects as selectAllProjects } from "../../server/projects_table";

const initialState = {
  projects: [],
  status: "idle",
  error: null,
};

export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async () => {
    const response = await selectAllProjects();
    return response;
  }
);

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProjects.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.projects = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const allProjects = (state) => state.projects.projects;

export const selectProjectById = (state, projectId) =>
  state.projects.projects.find((project) => project.id === projectId);

export default projectsSlice.reducer;
