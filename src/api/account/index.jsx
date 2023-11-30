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
    `/account/getAll?Page=${data.page}&PageSize=${data.pageSize}`
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
    returnUrl: `http://127.0.0.1:5173/profile/${data.url}`,
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