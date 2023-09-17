import { createSlice } from "@reduxjs/toolkit";
const initialState = { topCreator: [] };
export const CreatorSlice = createSlice({
  name: "creator",
  initialState,
  reducers: {
    getTopCreator: (state, { payload }) => {
      state.topCreator = payload;
    },
  },
});

export const { getTopCreator } = CreatorSlice.actions;
export default CreatorSlice.reducer;
