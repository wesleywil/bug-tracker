import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
};

export const hideDeleteSlice = createSlice({
  name: "hide_delete",
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

export const { hide, show } = hideDeleteSlice.actions;

export default hideDeleteSlice.reducer;
