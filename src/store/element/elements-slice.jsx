import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  elements: [],
  listCategories: [],
  favoriteElement: null,
  elementById: null,
  totalElements: 0,
  loading: false,
  error: null,
};
export const ElementSlice = createSlice({
  name: "element",
  initialState,
  reducers: {
    getElements: (state, { payload }) => {
      console.log("zxc");
      state.elements = payload;
    },
    getCategories: (state, { payload }) => {
      state.listCategories = payload;
    },
    getTotalElements: (state, { payload }) => {
      state.totalElements = payload;
    },
    getElementById: (state, { payload }) => {
      state.elementById = payload;
    },
  },
});

export const { getElements, getCategories, getTotalElements, getElementById } =
  ElementSlice.actions;
export default ElementSlice.reducer;
