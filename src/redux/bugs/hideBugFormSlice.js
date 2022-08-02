import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
};

export const hideBugFormSlice = createSlice({
  name: "hide_bug_form",
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

export const { hide, show } = hideBugFormSlice.actions;

export default hideBugFormSlice.reducer;
