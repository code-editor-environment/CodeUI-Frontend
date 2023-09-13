import { configureStore, createSlice } from "@reduxjs/toolkit";
import modalReducer from "./modal/modal-slice"; 
import elementReducer from "./element/elements-slice"; 
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
  },
});

const {
  actions: { add, init },
} = userDetailSlice;
export { add as addMovies, init as initUserDetail };
export default store;
