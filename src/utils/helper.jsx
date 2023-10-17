// import { Route, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

export const ticketLogoutHp = () => {
  Cookies.remove("accessToken");
};

export const setStorage = (data) => {
  if (data.length !== undefined && data.length > 1) {
    // eslint-disable-next-line array-callback-return
    data.map((item) => {
      localStorage.setItem(item.key, item.value);
    });
  } else {
    localStorage.setItem(data.key, data.value);
  }
  return true;
};

export const getStorage = (key) => {
  try {
    const value = localStorage.getItem(key);
    return value;
  } catch (e) {
    return null;
  }
};

export const removeStorage = (key) => {
  localStorage.removeItem(key);
};

export const isAuthenticated = () => {
  if (getStorage("jwt")) {
    return JSON.parse(getStorage("jwt"));
  } else {
    return false;
  }
};

export const handleApi = (fnc) => async (data) => {
  try {
    const result = await fnc(data);
    return result;
  } catch (error) {
    console.log({
      error,
    });
    const args = {
      message: <b>Error</b>,
      description: <p>There is a Network or API issue.</p>,
      duration: 5,
    };
    toast.error(args);
    // if (error.response.status === 401) {
    //   setTimeout(() => {
    //     ticketLogoutHp();
    //   }, 3000);
    // }
    return false;
  }
};