import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "",
};

export const statusToastSlice = createSlice({
  name: "toast_status",
  initialState,
  reducers: {
    completed: (state) => {
      state.status = "";
    },
    added: (state) => {
      state.status = "Successfully Added!";
    },
    updated: (state) => {
      state.status = "Successfully Updated!";
    },
    removed: (state) => {
      state.status = "Successfully Removed!";
    },
  },
});

export const { completed, added, updated, removed } = statusToastSlice.actions;

export default statusToastSlice.reducer;
