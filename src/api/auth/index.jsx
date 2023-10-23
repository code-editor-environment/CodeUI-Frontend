import { NET } from "../../utils/define";
import { handleApi } from "../../utils/helper";

// const API_URL = import.meta.env.NODE_DOMAIN;
// const API_URL = "http://13.212.54.225:44360/api";


export const signInMail = handleApi(async (accessToken) => {
  const result = await NET().post("/account/loginByMail", {
    idToken: accessToken,
  });
  return result.data;
});

export const profile = handleApi(async () => {
  const result = await NET().get("/profile/getByAccountId");
  return result.data;
});
// export const signIn = (user) => {
//   return fetch(`${API_URL}/admin/signIn`, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(user),
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .catch((err) => console.log(err));
// };

// export const authenticate = (jwt, next) => {
//   if (typeof window !== "undefined") {
//     localStorage.setItem("jwt", JSON.stringify(jwt));
//     next();
//   }
// };

// export const signOut = (next) => {
//   if (typeof window !== "undefined") localStorage.removeItem("jwt");
//   next();
//   return fetch(`${API_URL}/admin/signOut`, {
//     method: "GET",
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .catch((err) => console.log(err));
// };

// export const forgotPassword = (email) => {
//   return fetch(`${API_URL}/admin/forgot-password/`, {
//     method: "PUT",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ email }),
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .catch((err) => console.log(err));
// };

// export const resetPassword = (resetInfo) => {
//   return fetch(`${API_URL}/admin/reset-password/`, {
//     method: "PUT",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(resetInfo),
//   })
//     .then((response) => {
//       console.log("forgot password response: ", response);
//       return response.json();
//     })
//     .catch((err) => console.log(err));
// };
