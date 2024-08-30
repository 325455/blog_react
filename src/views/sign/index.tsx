import React, { memo } from "react";
import { LoginWrapper } from "./style";
import SignUp from "./child-cmps/sign-up";
import Cover from "./child-cmps/cover";
import SignIn from "./child-cmps/sign-in";
import { useSelector } from "react-redux";
import { StateType } from "@/store";

const Sign: React.FC = memo(() => {
  const contentTrans = useSelector(
    (state: StateType) => state.sign.contentTrans
  );

  return (
    <LoginWrapper transx={contentTrans}>
      <div className="container">
        <div className="sign">
          <div className="wrapper">
            <SignUp />
            <Cover />
            <SignIn />
          </div>
        </div>
      </div>
    </LoginWrapper>
  );
});

export default Sign;
