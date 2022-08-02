import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
};

export const hideProjectFormSlice = createSlice({
  name: "hide_project_form",
  initialState,
  reducers: {
    hide: (state) => {
      state.value = true;
    },
    show: (state) => {
      state.value = false;
    },
  },
});

export const { hide, show } = hideProjectFormSlice.actions;

export default hideProjectFormSlice.reducer;
