import { NET } from "../../utils/define";
import { handleApi } from "../../utils/helper";

export const getProfiles = handleApi(async (username) => {
  const result = await NET().get(`/profile/getByUsername?username=${username}`);
  return result.data;
});

export const putProfiles = handleApi(async (values) => {
  const result = await NET().put(`/profile/updateById`, values);
  return result.data;
});


export const getTopCreators = handleApi(async () => {
  const result = await NET().get(`/account/getAll`);
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