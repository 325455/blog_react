import User from "@/components/user";
import { StateType } from "@/store";
import React, { memo } from "react";
import { useSelector } from "react-redux";

const My: React.FC = () => {
  const phone = useSelector(
    (state: StateType) => (state.app.user as any).phone
  );
  return <User phone={phone} />;
};

export default memo(My);
