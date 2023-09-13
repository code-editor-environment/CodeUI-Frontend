import axios from "axios";
import { toast } from "react-toastify";
import { ACT_LOGOUT, USER_FAILED, USER_SUCCESS } from "../constants/user.const";
const API_URL = import.meta.env.VITE_DOMAIN;
export function actLogout() {
  return {
    type: ACT_LOGOUT,
  };
}

export const getUser = (login) => {
  return (dispatch) => {
    axios({
      method: "GET",
      url: `${API_URL}/user/${login}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: null,
    })
      .then((res) => {
        dispatch(getUserSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getUserFailed(err));
      });
  };
};

export const getUserSuccess = (users) => {
  return {
    type: USER_SUCCESS,
    payload: users,
  };
};

const getUserFailed = (err) => {
  return {
    type: USER_FAILED,
    payload: err,
  };
};

export const favorite = (findFavorite, postId, check, setCheck) => {
  const userLogin = localStorage.getItem("userLogin");
  const token = userLogin ? JSON.parse(userLogin).token : "";
  return () => {
    axios({
      method: "PUT",
      url: `${API_URL}/user/${findFavorite ? "unFavorite" : "favorite"}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      data: { postId },
    })
      .then((res) => {
        toast.success("successfully!");
        setCheck(!check);
      })
      .catch((err) => {
        console.error(err);
        toast.error("error!");
      });
  };
};
