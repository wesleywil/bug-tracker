import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
};

export const hideProjectFormEditSlice = createSlice({
  name: "hide_project_form_edit",
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

export const { hide, show } = hideProjectFormEditSlice.actions;

export default hideProjectFormEditSlice.reducer;
