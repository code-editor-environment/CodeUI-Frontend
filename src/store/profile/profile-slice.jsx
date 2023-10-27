import { createSlice } from "@reduxjs/toolkit";
import { getStorage, removeStorage } from "../../utils/helper";
const initialState = {
  profiles: {},
  user: JSON.parse(getStorage("codeUiLog"))
    ? JSON.parse(getStorage("codeUiLog"))
    : null,
  settingEditor: JSON.parse(getStorage("settingEditor"))
    ? JSON.parse(getStorage("settingEditor"))
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
    getSettingEditor: (state, { payload }) => {
      state.settingEditor = payload;
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
      state.profileRes = null;
    },
  },
});

export const { getProfile, getSettingEditor, userProfile, userProfileRes, actLogout } =
  ProfileSlice.actions;
export default ProfileSlice.reducer;
