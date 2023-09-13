import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpen: false,
  content: null,
  category: "button",
};
export const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    open: (state, { payload }) => {
      state.isOpen = true;
      state.content = payload;
    },
    close: (state) => {
      state.isOpen = false;
    },
    categories: (state, { payload }) => {
      state.category = payload;
    }
  },
});

export const { open, close, categories } = ModalSlice.actions;
export default ModalSlice.reducer;
