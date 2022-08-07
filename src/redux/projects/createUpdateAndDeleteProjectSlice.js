import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
  createProject,
  updateProject,
  deleteProject,
} from "../../server/projects_table";

const initialState = {
  status: "",
  error: null,
};

export const handleCreateProject = createAsyncThunk(
  "projects/createProject",
  async (data) => {
    const response = await createProject(data);
    return response;
  }
);

export const handleUpdateProject = createAsyncThunk(
  "projects/updateProject",
  async (data) => {
    const response = await updateProject(data);
    return response;
  }
);

export const handleDeleteProject = createAsyncThunk(
  "projects/deleteProject",
  async (id) => {
    const response = await deleteProject(id);
    return response;
  }
);

export const createUpdateAndDeleteProjectSlice = createSlice({
  name: "create_update_delete_project",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(handleCreateProject.pending, (state) => {
        state.status = "loading";
      })
      .addCase(handleCreateProject.fulfilled, (state) => {
        state.status = "new project created!";
      })
      .addCase(handleCreateProject.rejected, (state, action) => {
        state.status = "failed to create new project!";
        state.error = action.error.message;
      })
      .addCase(handleUpdateProject.pending, (state) => {
        state.status = "loading";
      })
      .addCase(handleUpdateProject.fulfilled, (state) => {
        state.status = "project was updated!";
      })
      .addCase(handleUpdateProject.rejected, (state, action) => {
        state.status = "failed to update project!";
        state.error = action.error.message;
      })
      .addCase(handleDeleteProject.pending, (state) => {
        state.status = "loading";
      })
      .addCase(handleDeleteProject.fulfilled, (state) => {
        state.status = "project was deleted!";
      })
      .addCase(handleDeleteProject.rejected, (state, action) => {
        state.status = "failed to delete project!";
        state.error = action.error.message;
      });
  },
});

export default createUpdateAndDeleteProjectSlice.reducer;
