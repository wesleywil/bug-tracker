import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "",
  bgColor: "",
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
      state.bgColor = "";
    },
    updated: (state) => {
      state.status = "Successfully Updated!";
      state.bgColor = "bg-yellow-600";
    },
    removed: (state) => {
      state.status = "Successfully Removed!";
      state.bgColor = "bg-red-600";
    },
  },
});

export const { completed, added, updated, removed } = statusToastSlice.actions;

export default statusToastSlice.reducer;
