import { combineReducers } from "redux";
import { modalReducer } from "./modal.reducer";
import postReducer from "./post.reducer";
import userReducer from "./user.reducer";
const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer,
  modal: modalReducer,
});

export default rootReducer;
