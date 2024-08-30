import React, { Fragment, memo, useRef } from "react";
import { classItems } from "@/assets/localdata/index.ts";
import classNemes from "classnames";
import { Carousel } from "antd";
import PassageItem from "@/components/passageItem/index.tsx";
import { useSelector } from "react-redux";
import { StateType } from "@/store/index.ts";
import {
  BannerWrapper,
  ClassfyWrapper,
  GreatePassages,
  HomeLeftWrapper,
  LoaerWrapper,
} from "./style.ts";
import SuperItem from "@/components/superItem/index.tsx";
import { Ipassgae } from "@/store/modules/home.ts";

interface Iprops {
  setDiscription: any;
  description: string;
}

const HomeLeft: React.FC<Iprops> = memo((props) => {
  const { setDiscription, description } = props;
  const { passageList, bannerimgs, loaer } = useSelector<StateType>(
    (state) => ({
      passageList: state.home.passageRecommend,
      bannerimgs: state.home.bannerimgs,
      loaer: state.home.loaer,
    })
  ) as any;

  //自定义指示器
  const bannerRef = useRef() as any;
  const indictorClick = (index: number) => {
    bannerRef.current.goTo(index);
  };

  return (
    <HomeLeftWrapper>
      <ClassfyWrapper>
        <div className="classfy">
          <h3 className="left_blue_border">全部分类</h3>
          <div className="items">
            {classItems.map((item) => {
              return (
                <span
                  className={classNemes("item", {
                    active: item === description,
                  })}
                  key={item}
                  onClick={() => setDiscription(item)}
                >
                  {item}
                </span>
              );
            })}
          </div>
        </div>
      </ClassfyWrapper>
      <BannerWrapper>
        <Carousel ref={bannerRef} dots={false} autoplay>
          {bannerimgs.map((img: any) => (
            <img key={img} src={img} alt="" />
          ))}
        </Carousel>
        <div className="cover">
          {bannerimgs.map((img: any, index: number) => (
            <img
              key={img}
              src={img}
              alt=""
              onClick={() => indictorClick(index)}
            />
          ))}
        </div>
      </BannerWrapper>
      <LoaerWrapper>
        <h3>大佬推荐</h3>
        <div className="loaers">
          {loaer.map((item: any, index: number) => {
            return <SuperItem info={item} rank={index} key={item.avatar} />;
          })}
        </div>
      </LoaerWrapper>
      <GreatePassages>
        <h3>文章推荐</h3>
        {passageList &&
          passageList.map((passage: Ipassgae) => {
            return (
              <Fragment key={passage.passageid}>
                <PassageItem passage={passage} />
              </Fragment>
            );
          })}
      </GreatePassages>
    </HomeLeftWrapper>
  );
});

export default HomeLeft;
