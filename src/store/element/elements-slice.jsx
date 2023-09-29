import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  elements: null,
  favoriteElement: null,
  elementById: null,
};
export const ElementSlice = createSlice({
  name: "element",
  initialState,
  reducers: {
    getElements: (state, { payload }) => {
      state.elements = payload;
    },
    getElementById: (state, { payload }) => {
      state.elementById = payload;
    },
  },
});

export const { getElements, getElementById } = ElementSlice.actions;
export default ElementSlice.reducer;
