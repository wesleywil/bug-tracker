import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const hideUpdateSlice = createSlice({
  name: "hide_update",
  initialState,
  reducers: {
    hide: (state) => {
      state.value = false;
    },
    show: (state) => {
      state.value = true;
    },
  },
});

export const { hide, show } = hideUpdateSlice.actions;

export default hideUpdateSlice.reducer;
