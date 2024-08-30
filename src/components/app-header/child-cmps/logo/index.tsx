import React, { memo } from "react";
import { LogoWrapper } from "./style";
import logo from "@/assets/images/icons/logo.png";
import { useNavigate } from "react-router-dom";

const Logo: React.FC = memo(() => {
  const navigate = useNavigate();
  return (
    <LogoWrapper onClick={() => navigate("/home")}>
      <img src={logo} alt="" />
    </LogoWrapper>
  );
});

export default Logo;
