import React, { memo } from "react";
import bg from "@/assets/images/login_bg.png";

const Cover: React.FC = memo(() => {
  return (
    <div className="cover item">
      <img src={bg} alt="" />
    </div>
  );
});

export default Cover;
