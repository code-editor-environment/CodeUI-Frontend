import { useSelector } from "react-redux";

export function useIsLogin() {
  const { user, profileRes } = useSelector((state) => state.profile);
  return {
    isLogin: user,
    profileRes,
  };
}
