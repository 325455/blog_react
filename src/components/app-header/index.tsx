import React, { memo } from "react";
import { Tabs } from "antd";
import { AppHeaderWrapper } from "./style";
import Logo from "./child-cmps/logo";
import HeaderRight from "./child-cmps/header-right";
import { useLocation, useNavigate } from "react-router-dom";

const headerItems = [
  {
    label: `首页`,
    key: "/home",
  },
  {
    label: `关注列表`,
    key: "/follow",
  },
  {
    label: `个人中心`,
    key: "/my",
  },
];

const AppHeader: React.FC = () => {
  const navgite = useNavigate();
  const currentKey = useLocation().pathname;

  const slot = {
    left: <Logo />,
    right: <HeaderRight />,
  };

  //导航切换
  const changeTab = (activeKey: string) => {
    navgite(activeKey);
  };

  //设置初次渲染时的导航
  return (
    <AppHeaderWrapper>
      <Tabs
        tabBarExtraContent={slot}
        items={headerItems}
        onChange={changeTab}
        activeKey={currentKey}
      />
    </AppHeaderWrapper>
  );
};

export default memo(AppHeader);
