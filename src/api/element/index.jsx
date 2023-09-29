import { API } from "../../utils/define";
import { handleApi } from "../../utils/helper";

export const getListElements = handleApi(async (category) => {
  const result = await API().get(`/posts?type=${category}`);
  return result.data;
});

export const getListElementById = handleApi(async (elementId) => {
  const result = await API().get(`/post/${elementId}`);
  return result.data;
});

export const getListElementByCreator = handleApi(async (data) => {
  const result = await API().get(
    `/postApproved/by/${data.login}?page=${data.page}&perPage=4`
  );
  return result.data;
});