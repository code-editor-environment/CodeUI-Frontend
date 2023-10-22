import { NET } from "../../utils/define";
import { handleApi } from "../../utils/helper";

export const getListElements = handleApi(async (category) => {
  const url =
    category === "favorites"
      ? "/element/getFavoriteElements"
      : `/element/getRandomElements${
          category === "all" ? "/" : "?CategoryName=" + category
        }`;
  const result = await NET().get(url);
  return result.data;
});
export const getListElementById = handleApi(async (elementId) => {
  const result = await NET().get(`/element/getByID?id=${elementId}`);
  return result.data;
});

export const getListElementByCreator = handleApi(async (data) => {
  const result = await NET().get(
    `/element/getAll?Status=${data.handleStatus}&OwnerUsername=${data.username}&page=${data.page}&PageSize=8`
  );
  return result.data;
});

export const createElement = handleApi(async (data) => {
  const result = await NET().post("/element/createElement", data);
  return result.data;
});

export const saveFavorite = handleApi(async (data) => {
  const result = await NET().post(
    `/react-element/saveFavorite?AccountId=${data.accountId}&ElementId=${data.postId}`
  );
  return result.data;
});

export const like = handleApi(async (data) => {
  const result = await NET().post(
    `/react-element/likeElement?AccountId=${data.accountId}&ElementId=${data.postId}`
  );
  return result.data;
});