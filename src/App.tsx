import React, { memo, Suspense, useEffect } from "react";
import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import { routes } from "./router";
import AppHeader from "@/components/app-header";
import { Spin } from "antd";
import { fetchUser } from "./store/modules/app";
import { useDispatch } from "react-redux";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentPath = useLocation().pathname;

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(fetchUser() as any);
    } else {
      navigate("/sign");
    }
  }, [localStorage.getItem("token")]);

  return (
    <div className="app">
      {currentPath !== "/sign" && <AppHeader />}
      <Suspense fallback={<Spin size="large" />}>
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  );
};

export default memo(App);
