import { createSlice } from "@reduxjs/toolkit";
const initialState = { topCreator: [], subscription:[] };
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
  },
});

export const { getTopCreator, getSubscription } = CreatorSlice.actions;
export default CreatorSlice.reducer;
