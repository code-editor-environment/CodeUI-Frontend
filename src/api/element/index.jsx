import { NET, NODE } from "../../utils/define";
import { handleApi } from "../../utils/helper";

export const getListElements = handleApi(
  async ({ category, page, pageSize, filter, creator }) => {
    const url =
      category === "favorites"
        ? `/element/getFavoriteElements?Page=${page}&PageSize=${pageSize}`
        : `/element/getRandomElements${
            category === "all" ? "?" : "?CategoryName=" + category + "&"
          }Page=${page}&PageSize=${pageSize}`;
    const urlAll = `/element/getAll?Status=APPROVED&${
      filter === "Favorites" ? "Favorites=1&" : ""
    }${
      creator ? `OwnerUsername=${creator}&` : ""
    }Page=${page}&PageSize=${pageSize}`;
    const result = await NET().get(filter || creator ? urlAll : url);
    return result.data;
  }
);
export const getListElementById = handleApi(async (elementId) => {
  const result = await NET().get(`/element/getByID?id=${elementId}`);
  return result.data;
});

export const getFulfillmentDetailById = handleApi(async (fulfillmentId) => {
  const result = await NET().get(
    `/request/getFulfillmentDetailById?fulfillmentId=${fulfillmentId}`
  );
  return result.data;
});

export const getRequestElementById = handleApi(async (elementId) => {
  const result = await NET().get(`/element/getByID?id=${elementId}`);
  return result.data;
});

export const getListElementByCreator = handleApi(async (data) => {
  const result = await NET().get(
    `/element/getAll?Status=${
      data.handleStatus ? data.handleStatus : "APPROVED"
    }&OwnerUsername=${data.username}&Page=${data.page}&PageSize=${data.pageSize}`
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

export const putComment = handleApi(async (data) => {
  const result = await NET().put(
    `/react-element/editComment?CommentId=${data.CommentId}`,
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

export const deleteElement = handleApi(async (id) => {
  const result = await NET().delete(`/element/deleteElement?id=${id}`);
  return result.data;
});

export const reportElement = handleApi(async (data) => {
  const result = await NET().post(
    `/report/createElementReport?elementId=${data.id}&reason=${data.reason}`,
    {
      reportContent: "string",
      reportImages: [],
    }
  );
  return result.data;
});

export const ReportFulfillment = handleApi(async (data) => {
  const result = await NET().post(
    `report/createFulfillmentReport?fulfillmentId=${data.id}`,
    {
      reportContent: "string",
      reason: "string",
    }
  );
  return result.data;
});

export const createRequestElement = handleApi(async (data) => {
  const result = await NET().put(`/request/acceptRequest?requestId=${data}`);
  return result.data;
});

export const giveUpRequestElement = handleApi(async (data) => {
  const result = await NET().put(`/request/giveUpRequest?requestId=${data}`);
  return result.data;
});

export const cancelRequestElement = handleApi(async (data) => {
  const result = await NET().put(`/request/cancelRequest?requestId=${data}`);
  return result.data;
});

export const acceptFulfillment = handleApi(async (postId) => {
  const result = await NET().put(
    `request/acceptFulfillment?fulfillmentId=${postId}`
  );
  return result.data;
});

export const rejectFulfillment = handleApi(async (data) => {
  const result = await NET().put(
    `request/rejectFulfillment?fulfillmentId=${data.postId}`,data.data
  );
  return result.data;
});

export const submitFulfillment = handleApi(async (postId) => {
  const result = await NET().put(
    `request/submitFulfillment?fulfillmentId=${postId}`
  );
  return result.data;
});

export const sendFulfillment = handleApi(async (data) => {
  const result = await NODE().post(`/admin/sendFulfillment`, data);
  return result.data;
});
