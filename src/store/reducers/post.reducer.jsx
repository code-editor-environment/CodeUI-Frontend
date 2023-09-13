import {
  POST_FAILED,
  POST_SUCCESS,
  POST_FAVORITE_FAILED,
  POST_FAVORITE_SUCCESS,
  POST_BY_ID_FAILED,
  POST_BY_ID_SUCCESS,
} from "../constants/post.const";

const initialState = {
  post: {},
  favoritePost: {},
  postById: null,
};

const postReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case POST_SUCCESS: {
      return { ...state, post: payload };
    }
    case POST_FAILED: {
      return { ...state, errors: payload };
    }
    case POST_FAVORITE_SUCCESS: {
      return { ...state, favoritePost: payload };
    }
    case POST_FAVORITE_FAILED: {
      return { ...state, errors: payload };
    }
    case POST_BY_ID_SUCCESS: {
      return { ...state, postById: payload };
    }
    case POST_BY_ID_FAILED: {
      return { ...state, errors: payload };
    }
    default:
      return state;
  }
};

export default postReducer;
