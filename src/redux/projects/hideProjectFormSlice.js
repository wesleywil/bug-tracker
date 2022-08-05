import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
  item: {},
};

export const hideProjectFormSlice = createSlice({
  name: "hide_project_form",
  initialState,
  reducers: {
    hide: (state) => {
      state.value = true;
      state.item = {};
    },
    show: (state) => {
      state.value = false;
      state.item = {};
    },
  },
});

export const { hide, show } = hideProjectFormSlice.actions;

export default hideProjectFormSlice.reducer;
