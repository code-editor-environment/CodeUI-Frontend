import axios from "axios";
import {
  POST_FAILED,
  POST_SUCCESS,
  POST_FAVORITE_FAILED,
  POST_FAVORITE_SUCCESS,
  POST_BY_ID_FAILED,
  POST_BY_ID_SUCCESS,
} from "../constants/post.const";
import { toast } from "react-toastify";

const API_URL = import.meta.env.VITE_DOMAIN;
// const API_URL = "http://localhost:8080/api";

export const Post = (html, css, hidden, type, history) => {
  const userLogin = localStorage.getItem("userLogin");
  const login = userLogin ? JSON.parse(userLogin).user.login : "";
  const token = userLogin ? JSON.parse(userLogin).token : "";
  return (dispatch) => {
    axios({
      method: "POST",
      url: `${API_URL}/post/new/${login}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: {
        html,
        css,
        theme: hidden ? "dark" : "light",
        type,
      },
    })
      .then((res) => {
        history.goBack("/");
        toast.success("successfully!");
      })
      .catch((err) => {
        console.error(err);
        toast.error("error!");
      });
  };
};

export const postsByUser = (
  login,
  postApproved,
  postReview,
  postRejected,
  setPostApproved,
  setPostReview,
  setPostRejected,
  setLoading,
  page,
  setTotalPages
) => {
  const userLogin = localStorage.getItem("userLogin");
  const token = userLogin ? JSON.parse(userLogin).token : "";
  return (dispatch) => {
    axios({
      method: "GET",
      url: `${API_URL}/postApproved/by/${login}?page=${page}&perPage=4`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setPostApproved([...postApproved, ...res.data.posts]);
        setLoading(false);
        setTotalPages(res.data.totalPage);
      })
      .catch((err) => {
        console.error(err);
      });
    axios({
      method: "GET",
      url: `${API_URL}/postReview/by/${login}?page=${page}&perPage=4`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setPostReview([...postReview, ...res.data.posts]);
        setLoading(false);
        setTotalPages(res.data.totalPage);
      })
      .catch((err) => {
        console.error(err);
      });
    axios({
      method: "GET",
      url: `${API_URL}/postRejected/by/${login}?page=${page}&perPage=4`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setPostRejected([...postRejected, ...res.data.posts]);
        setLoading(false);
        setTotalPages(res.data.totalPage);
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const getPost = (element) => {
  return (dispatch) => {
    axios({
      method: "GET",
      url: `${API_URL}/posts?type=${element}`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        dispatch(getPostSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getPostFailed(err));
      });
  };
};

export const getPostSuccess = (post) => {
  return {
    type: POST_SUCCESS,
    payload: post,
  };
};

const getPostFailed = (err) => {
  return {
    type: POST_FAILED,
    payload: err,
  };
};

export const getFavoritePost = () => {
  const userLogin = localStorage.getItem("userLogin");
  const token = userLogin ? JSON.parse(userLogin).token : "";
  const login = userLogin ? JSON.parse(userLogin).user.login : "";
  return (dispatch) => {
    axios({
      method: "GET",
      url: `${API_URL}/getFavorite/${login}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        dispatch(getFavoritePostSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getFavoritePostFailed(err));
      });
  };
};

export const getFavoritePostSuccess = (favoritePost) => {
  return {
    type: POST_FAVORITE_SUCCESS,
    payload: favoritePost,
  };
};

const getFavoritePostFailed = (err) => {
  return {
    type: POST_FAVORITE_FAILED,
    payload: err,
  };
};


export const getPostById = (postId) => {
  return (dispatch) => {
    axios({
      method: "GET",
      url: `${API_URL}/post/${postId}`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        dispatch(getPostByIdSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getPostByIdFailed(err));
      });
  };
};

export const getPostByIdSuccess = (postById) => {
  return {
    type: POST_BY_ID_SUCCESS,
    payload: postById,
  };
};

const getPostByIdFailed = (err) => {
  return {
    type: POST_BY_ID_FAILED,
    payload: err,
  };
};

export const deletePost = (postId, history) => {
  const userLogin = localStorage.getItem("userLogin");
  const token = userLogin ? JSON.parse(userLogin).token : "";
  return (dispatch) => {
    axios({
      method: "DELETE",
      url: `${API_URL}/post/${postId}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        history.goBack("/");
        toast.success("successfully!");
      })
      .catch((err) => {
        console.error(err);
        toast.error("error!");
      });
  };
};

export const updatePost = (
  postId,
  postById,
  htmlText,
  cssText,
  hidden,
  history
) => {
  const userLogin = localStorage.getItem("userLogin");
  const token = userLogin ? JSON.parse(userLogin).token : "";
  return (dispatch) => {
    axios({
      method: "PUT",
      url: `${API_URL}/post/${postId}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: {
        html: htmlText === "" ? postById.html : htmlText,
        css: cssText === "" ? postById.css : cssText,
        theme: hidden
          ? postById.theme === "dark"
            ? "light"
            : "dark"
          : postById.theme === "dark"
          ? "dark"
          : "light",
      },
    })
      .then((res) => {
        history.goBack("/");
        toast.success("successfully!");
      })
      .catch((err) => {
        console.error(err);
        toast.error("error!");
      });
  };
};
