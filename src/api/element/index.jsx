import { NET } from "../../utils/define";
import { handleApi } from "../../utils/helper";

export const getListElements = handleApi(async ({category, page}) => {
  const url =
    category === "favorites"
      ? `/element/getFavoriteElements?Page=${page}`
      : `/element/getRandomElements${
          category === "all" ? "?" : "?CategoryName=" + category+ "&"}Page=${page}`;
  const result = await NET().get(url);
  return result.data;
});
export const getListElementById = handleApi(async (elementId) => {
  const result = await NET().get(`/element/getByID?id=${elementId}`);
  return result.data;
});

export const getListElementByCreator = handleApi(async (data) => {
  const result = await NET().get(
    `/element/getAll?Status=${
      data.handleStatus ? data.handleStatus : "APPROVED"
    }&OwnerUsername=${data.username}`
  );
  return result.data;
});

export const createElement = handleApi(async (data) => {
  const result = await NET().post("/element/createElement", data);
  return result.data;
});
export const putElement = handleApi(async (postId) => {
  const result = await NET().post(`/element/postElement?id=${postId}`);
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

export const getListComment = handleApi(async (postId) => {
  const result = await NET().get(
    `/react-element/getCommentsByElementId?ElementId=${postId}`
  );
  return result.data;
});

export const postComment = handleApi(async (data) => {
  const result = await NET().post(
    `/react-element/createComment?ElementId=${data.postId}`,
    { commentContent: data.commentContent }
  );
  return result.data;
});

export const postReplyComment = handleApi(async (data) => {
  const result = await NET().post(
    `/react-element/replyComment?CommentId=${data.CommentId}`,
    { commentContent: data.commentContent }
  );
  return result.data;
});

export const deleteComment = handleApi(async (id) => {
  const result = await NET().delete(
    `/react-element/deleteComment?CommentId=${id}`
  );
  return result.data;
});
