import axios from "axios";
// import Cookies from "js-cookie";
import { getStorage } from "./helper";

const API_URL = import.meta.env.NODE_DOMAIN;
// const API_URLS = import.meta.env.NET_DOMAIN;
const API_URLS = "http://13.212.54.225/api";
export const NODE = () =>
  axios.create({
    baseURL: API_URL,
    // transformRequest: [
    //   (data, headers) => {
    //     delete headers.common;
    //     const str = [];
    //     for (const p in data)
    //       str.push(`${encodeURIComponent(p)}=${encodeURIComponent(data[p])}`);
    //     return str.join("&");
    //   },
    // ],
    headers: {
      // Authorization: `Bearer ${
      //   JSON.parse(getStorage("codeUiLog")).accessToken
      // }`,
      accept: "application/json",
    },
  });
export const NET = () =>
  axios.create({
    baseURL: API_URLS,
    headers: {
      Authorization: `Bearer ${
        JSON.parse(getStorage("codeUiLog"))?.accessToken
      }`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });