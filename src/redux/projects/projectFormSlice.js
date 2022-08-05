import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hide: true,
  item: {},
  status: "",
};

export const projectFormSlice = createSlice({
  name: "projectForm",
  initialState,
  reducers: {
    showEdit: (state, action) => {
      state.hide = false;
      state.item = action.payload;
      state.status = "edit";
    },
    hideEdit: (state) => {
      state.hide = true;
      state.item = {};
      state.status = "edit";
    },
    show: (state) => {
      state.hide = false;
      state.item = {};
      state.status = "new project";
    },
    hide: (state) => {
      state.hide = true;
      state.item = {};
      state.status = "new project";
    },
  },
});

export const { hide, show, hideEdit, showEdit } = projectFormSlice.actions;

export default projectFormSlice.reducer;
