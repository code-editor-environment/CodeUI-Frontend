import { createSlice } from "@reduxjs/toolkit";
const initialState = { elements:null, favoriteElement:null };
export const ElementSlice = createSlice({
  name: "element",
  initialState,
  reducers: {
    getElements: (state, { payload }) => {
      state.elements = payload;
    },
  },
});

export const { getElements } = ElementSlice.actions;
export default ElementSlice.reducer;
