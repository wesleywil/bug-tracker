import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
  item: {},
};

export const hideProjectFormEditSlice = createSlice({
  name: "hide_project_form_edit",
  initialState,
  reducers: {
    hide: (state) => {
      state.value = true;
      state.item = {};
    },
    show: (state, action) => {
      state.value = false;
      state.item = action.payload;
    },
  },
});

export const { hide, show } = hideProjectFormEditSlice.actions;

export default hideProjectFormEditSlice.reducer;
