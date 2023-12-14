import { NET } from "../../utils/define";
import { handleApi } from "../../utils/helper";

export const getProfiles = handleApi(async (accountID) => {
  const result = await NET().get(
    `/profile/getByAccountId?accountId=${accountID}`
  );
  return result.data;
});

export const putProfiles = handleApi(async (values) => {
  const result = await NET().put(`/profile/updateById`, values);
  return result.data;
});


export const getTopCreators = handleApi(async (data) => {
  const result = await NET().get(
    `/account/getAll?Page=${data.page}&PageSize=${data.pageSize}${
      data.userName ? "&Username=" + data.userName : ""
    }`
  );
  return result.data;
});

export const getSubscriptions = handleApi(async () => {
  const result = await NET().get("/package/getPackageToShow");
  return result.data;
});

export const getRequestList = handleApi(async (data) => {
  const result = await NET().get(
    `request/getRequestList?SortStartDate=3&Status=${
      data.search?.filter ? data.search?.filter : "5"
    }${
      data.search?.r
        ? data.search.r === "myRequest"
          ? `&accountID=${data.id}`
          : `&requesterId=${data.id}`
        : ""
    }`
  );
  return result.data;
});

export const getRequestListById = handleApi(async (data) => {
  const result = await NET().get(`request/getRequestById?requestId=${data}`);
  return result.data;
});

export const getFulfillmentByRequestId = handleApi(async (data) => {
  const result = await NET().get(
    `request/getFulfillmentByRequestId?requestId=${data}`
  );
  return result.data;
});

export const getProcessFulfillment = handleApi(async (data) => {
  const result = await NET().get(
    `request/getProcessFulfillment?requestId=${data}`
  );
  return result.data;
});

export const getSaveFavorite = handleApi(async (elementId) => {
  const result = await NET().get(
    `react-element/saveFavorite?ElementId=${elementId}`
  );
  return result.data;
});

export const postFollowCreator = handleApi(async (username) => {
  const result = await NET().post(`/follow/followCreator?username=${username}`);
  return result.data;
});

export const getFollower = handleApi(async (username) => {
  const result = await NET().get(
    `/follow/getFollowerByUsername?username=${username}`
  );
  return result.data;
});

export const getFollowing = handleApi(async (username) => {
  const result = await NET().get(
    `/follow/getFollowingByUsername?username=${username}`
  );
  return result.data;
});

export const postPayment = handleApi(async (data) => {
  const result = await NET().post("/payment/createPayment", {
    money: data.money,
    orderType: "billpayment",
    orderDescription: data.orderDescription,
    returnUrl: `https://codeui.vercel.app/profile/${data.url}`,
  });
  return result.data;
});

export const postConfirmPayment = handleApi(async (data) => {
  const result = await NET().post(`/payment/confirmPayment${data}`);
  return result.data;
});

export const getPaymentHistory = handleApi(async () => {
  const result = await NET().get("/payment/getPaymentHistory");
  return result.data;
});

export const getDonation = handleApi(async (data) => {
  const result = await NET().get(
    `/donation/getDonationPackageByAccountId?accountId=${data}`
  );
  return result.data;
});

export const postCreateRequest = handleApi(async (data) => {
  const result = await NET().post(`/request/createRequest`, data);
  return result.data;
});

export const buyPackage = handleApi(async (id) => {
  const result = await NET().post(`package/buyPackage?packageId=${id}`);
  return result.data;
});