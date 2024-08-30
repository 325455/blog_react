import React, { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";

const Home = lazy(() => import("@/views/home"));
const Follow = lazy(() => import("@/views/follow"));
const My = lazy(() => import("@/views/my"));
const Sign = lazy(() => import("@/views/sign"));
const PassageDetail = lazy(() => import("@/views/passage-detail"));
const UserDetail = lazy(() => import("@/views/user-detail"));
const Search = lazy(() => import("@/views/search"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to={"/home"} />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/follow",
    element: <Follow />,
  },
  {
    path: "/my",
    element: <My />,
  },
  {
    path: "/sign",
    element: <Sign />,
  },
  {
    path: "/passage-detail/:passageid",
    element: <PassageDetail />,
  },
  {
    path: "/user-detail/:phone",
    element: <UserDetail />,
  },
  {
    path: "/search/:querystr",
    element: <Search />,
  },
];
