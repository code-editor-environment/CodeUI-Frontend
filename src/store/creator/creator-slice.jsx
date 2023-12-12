import { createSlice } from "@reduxjs/toolkit";
const initialState = { topCreator: [], subscription: [], request: [] };
export const CreatorSlice = createSlice({
  name: "creator",
  initialState,
  reducers: {
    getTopCreator: (state, { payload }) => {
      state.topCreator = payload;
    },
    getSubscription: (state, { payload }) => {
      state.subscription = payload;
    },
    getRequest: (state, { payload }) => {
      state.request = payload;
    },
    postRequest: (state, { payload }) => {
      state.request.push(payload);
    },
    putRequest: (state, { payload }) => {
      state.request = payload;
    },
    deleteRequest: (state, { payload: id }) => {
      state.request = state.request.filter((item) => item.id !== id);
    },
  },
});

export const {
  getTopCreator,
  getSubscription,
  getRequest,
  postRequest,
  deleteRequest,
} = CreatorSlice.actions;
export default CreatorSlice.reducer;
