import axios from "axios";
import Cookies from "js-cookie";

const API_URL = import.meta.env.VITE_DOMAIN;

export const API = () =>
  axios.create({
    baseURL: API_URL,
    transformRequest: [
      (data, headers) => {
        delete headers.common;
        const str = [];
        for (const p in data)
          str.push(`${encodeURIComponent(p)}=${encodeURIComponent(data[p])}`);
        return str.join("&");
      },
    ],
    headers: {
      Authorization: `Bearer ${Cookies.get("accessToken")}`,
      accept: "application/json",
    },
  });
