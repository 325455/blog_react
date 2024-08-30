import React, { memo, useEffect, useState } from "react";
import { HomeWrapper } from "./style";
import HomeRight from "./child-cmps/home-right";
import HomeLeft from "./child-cmps/home--left";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomeData } from "@/store/modules/home";
import { StateType } from "@/store";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const [description, setDiscription] = useState("人工智能");
  const serverResponse = useSelector(
    (state: StateType) => state.home.bannerimgs.length
  );

  useEffect(() => {
    dispatch(fetchHomeData(description));
  }, [description]);

  return (
    serverResponse && (
      <HomeWrapper>
        <HomeLeft description={description} setDiscription={setDiscription} />
        <HomeRight />
      </HomeWrapper>
    )
  );
};

export default memo(Home);
