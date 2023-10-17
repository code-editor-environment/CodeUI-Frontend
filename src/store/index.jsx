import {
  configureStore,
  createSlice,
} from "@reduxjs/toolkit";
import modalReducer from "./modal/modal-slice"; 
import elementReducer from "./element/elements-slice"; 
import profileReducer from "./profile/profile-slice"; 
import creatorReducer from "./creator/creator-slice";

const userDetailSlice = createSlice({
  name: "userDetail",
  initialState: {},
  reducers: {
    init: (state, action) => {
      return action.payload;
    },
    add: (state, action) => {
      return {
        ...state,
        page: action.payload.page,
        results: [...state.results, ...action.payload.results],
      };
    },
  },
});

const store = configureStore({
  reducer: {
    userDetail: userDetailSlice.reducer,
    modal: modalReducer,
    element: elementReducer,
    profile: profileReducer,
    creator: creatorReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const {
  actions: { add, init },
} = userDetailSlice;
export { add as addMovies, init as initUserDetail };
export default store;
