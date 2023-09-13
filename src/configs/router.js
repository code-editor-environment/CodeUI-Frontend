import Create from "../pages/main/Create";
import Creators from "../pages/main/Creators";
import Detail from "../pages/main/Detail";
import Element from "../pages/main/Element";
import Err from "../pages/main/Err";
import Home from "../pages/main/Home";
import Profile from "../pages/main/Profile";
export const mainRouter = [
  {
    path: "/",
    exact: true,
    Component: Home,
  },
  {
    path: "/creators",
    exact: true,
    Component: Creators,
  },
  {
    path: "/create",
    exact: true,
    Component: Create,
  },
];

export const allRouter = [
  {
    path: "/elements/:element",
    exact: true,
    Component: Element,
  },
  {
    path: "/profile/:login",
    exact: true,
    Component: Profile,
  },
  {
    path: "/detail/:postId",
    exact: true,
    Component: Detail,
  },
  {
    Component: Err,
  },
];

export const adminRouter = [
  //   {
  //     path: "/dashboard",
  //     exact: true,
  //     Component: Dashboard,
  //   },
];
