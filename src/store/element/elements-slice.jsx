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
      state.elements = payload;
    },
    pushElements: (state, { payload }) => {
      const index = state.elements.findIndex(
        (item) => item["id"] === payload["id"]
      );
      if (index > -1) {
        state.elements[index] = {
          ...state.elements[index],
          ...payload,
        };
      } else {
        state.elements = [...state.elements, payload];
      }
    },
    checkElements: (state, { payload }) => {
      const index = state.elements.findIndex(
        (item) => item["id"] === payload["id"]
      );
      state.elements[index] = {
        ...state.elements[index],
        ...payload,
      };
    },
    deleteElements: (state, { payload: id }) => {
      state.elements = state.elements.filter((item) => item.id !== id);
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

export const {
  getElements,
  getCategories,
  pushElements,
  deleteElements,
  getTotalElements,
  getElementById,
  checkElements,
} = ElementSlice.actions;
export default ElementSlice.reducer;
