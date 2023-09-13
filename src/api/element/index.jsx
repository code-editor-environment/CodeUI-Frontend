const API_URL = import.meta.env.VITE_DOMAIN;

export const list = (category) => {
  return fetch(`${API_URL}/posts?type=${category}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};