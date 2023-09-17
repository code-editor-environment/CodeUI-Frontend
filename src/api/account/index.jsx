import { API } from "../../utils/define";
import { handleApi } from "../../utils/helper";

export const getProfiles = handleApi(async (login) => {
  const result = await API().get(`/user/${login}`);
  return result.data;
});

export const getTopCreators = handleApi(async () => {
  const result = await API().get(`/users?page=1&perPage=10`);
  return result.data;
});
