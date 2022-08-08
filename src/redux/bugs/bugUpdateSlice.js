import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { updateBug } from "../../server/bugs_table";

const initialState = {
  status: "idle",
  error: null,
};

export const handleUpdateBug = createAsyncThunk(
  "bug/handleUpdateBug",
  async (data) => {
    const response = await updateBug(data);
    return response;
  }
);

export const bugUpdateSlice = createSlice({
  name: "bug_update",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(handleUpdateBug.pending, (state) => {
        state.status = "Trying to update bug!";
      })
      .addCase(handleUpdateBug.fulfilled, (state) => {
        state.status = "Bug Updated Successfully!";
      })
      .addCase(handleUpdateBug.rejected, (state, action) => {
        state.status = "Bug Failed to Update!";
        state.error = action.error.message;
      });
  },
});

export default bugUpdateSlice.reducer;
