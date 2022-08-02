import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
};

export const hideDetailsSlice = createSlice({
  name: "hide_details",
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

export const { hide, show } = hideDetailsSlice.actions;

export default hideDetailsSlice.reducer;
