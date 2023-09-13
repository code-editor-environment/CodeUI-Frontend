import { useSelector } from "react-redux";

export function useIsLogin() {
  const { user } = useSelector((state) => state.userDetail);
  return {
    isLogin: user,
  };
}
