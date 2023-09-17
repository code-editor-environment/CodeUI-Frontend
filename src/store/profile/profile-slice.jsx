import { createSlice } from "@reduxjs/toolkit";
const initialState = {profiles :{}};
export const ProfileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    getProfile: (state, { payload }) => {
      state.profiles = payload;
    },
  },
});

export const { getProfile } = ProfileSlice.actions;
export default ProfileSlice.reducer;
