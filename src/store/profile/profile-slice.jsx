import { createSlice } from "@reduxjs/toolkit";
import { getStorage, removeStorage } from "../../utils/helper";
const initialState = {
  profiles: {},
  user: JSON.parse(getStorage("codeUiLog"))
    ? JSON.parse(getStorage("codeUiLog"))
    : null,
  profileRes: JSON.parse(getStorage("profileResponse"))
    ? JSON.parse(getStorage("profileResponse"))
    : null,
};
export const ProfileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    getProfile: (state, { payload }) => {
      state.profiles = payload;
    },
    userProfile: (state, { payload }) => {
      state.user = payload;
    },
    userProfileRes: (state, { payload }) => {
      state.profileRes = payload;
    },
    actLogout: (state) => {
      removeStorage("codeUiLog");
      removeStorage("profileResponse");
      state.user = null;
    },
  },
});

export const { getProfile, userProfile, userProfileRes, actLogout } =
  ProfileSlice.actions;
export default ProfileSlice.reducer;
