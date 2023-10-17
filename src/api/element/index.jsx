import { NODE, NET } from "../../utils/define";
import { handleApi } from "../../utils/helper";

export const getListElements = handleApi(async (category) => {
  const result = await NODE().get(`/posts?type=${category}`);
  return result.data;
});

export const getListElementById = handleApi(async (elementId) => {
  const result = await NODE().get(`/post/${elementId}`);
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