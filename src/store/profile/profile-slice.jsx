import { createSlice } from "@reduxjs/toolkit";
import { getStorage, removeStorage, setStorage } from "../../utils/helper";

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
  fav: JSON.parse(getStorage("fav")) ? JSON.parse(getStorage("fav")) : [],
  loadMoney:false
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
    getFav: (state, { payload }) => {
      state.fav = payload;
    },
    postFav: (state, { payload }) => {
      state.fav = [...state.fav, payload];
      setStorage({
        key: "fav",
        value: JSON.stringify(state.fav),
      });
    },
    deleteFav: (state, { payload: id }) => {
      state.fav = state.fav.filter((item) => item !== id);
      setStorage({
        key: "fav",
        value: JSON.stringify(state.fav),
      });
    },
    userProfileRes: (state, { payload }) => {
      state.profileRes = payload;
    },
    loadingMoney: (state, { payload }) => {
      state.loadMoney = payload;
    },
    actLogout: (state) => {
      removeStorage("codeUiLog");
      removeStorage("profileResponse");
      state.user = null;
      state.profileRes = null;
    },
  },
});

export const {
  getProfile,
  getSettingEditor,
  getFav,
  postFav,
  deleteFav,
  userProfile,
  userProfileRes,
  loadingMoney,
  actLogout,
} = ProfileSlice.actions;
export default ProfileSlice.reducer;
