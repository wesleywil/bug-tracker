import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: true,
  item: "",
};

export const hideBugFormSlice = createSlice({
  name: "hide_bug_form",
  initialState,
  reducers: {
    hide: (state) => {
      state.value = true;
      state.item = "";
    },
    show: (state, action) => {
      state.value = false;
      state.item = action.payload;
    },
  },
});

export const { hide, show } = hideBugFormSlice.actions;

export default hideBugFormSlice.reducer;
