import User from "@/components/user";
import React, { memo } from "react";
import type { ReactNode } from "react";
import { useParams } from "react-router-dom";

interface Ipropos {
  children?: ReactNode;
}

const UserDetail: React.FC<Ipropos> = () => {
  const { phone } = useParams();
  console.log(phone);

  return <User phone={phone as any} />;
};

export default memo(UserDetail);
