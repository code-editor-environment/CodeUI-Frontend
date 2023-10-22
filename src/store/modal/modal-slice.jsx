import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpen: false,
  content: null,
  category: "button",
  elementID: null,
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
    },
    postElementID: (state, { payload }) => {
      state.elementID = payload;
    }
  },
});

export const { open, close, categories, postElementID } = ModalSlice.actions;
export default ModalSlice.reducer;
