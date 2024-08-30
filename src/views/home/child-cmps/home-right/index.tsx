import React, { memo, useState } from "react";
import {
  ContactMeWrapper,
  FinePassageWrapper,
  HomeRightWrapper,
} from "./style";
import publish from "@/assets/images/publish.png";
import refresh from "@/assets/images/刷新 1.png";
import more from "@/assets/images/右 (3) 1.png";
import tiktok from "@/assets/images/抖音.jpg";
import weichat from "@/assets/images/微信.jpg";
import QQ from "@/assets/images/QQ.jpg";
import Publish from "@/components/publish";
import { useSelector } from "react-redux";
import { StateType } from "@/store";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

interface IfinePassage {
  passageid: string;
  username: string;
  avatar: string;
  content: string;
}

const HomeRight: React.FC = memo(() => {
  const navigate = useNavigate();
  //编辑器状态
  const [isShowEditor, setIsShowEditor] = useState(false);
  //点击发布文章按钮
  const publishClick = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      message.info("请先登录");
      return;
    }
    setIsShowEditor(true);
    document.body.style.overflow = "hidden";
  };
  //服务器返回12条文章榜数据，客户端初始化时随机展示四条
  const { passageRaking, finePassage } = useSelector<StateType>((state) => ({
    passageRaking: state.home.passageRaking,
    finePassage: state.home.finePassage,
  })) as any;

  const [localPassageRaking, setLocalPassageRaking] = useState(
    passageRaking.slice(0, 4).map((item: any) => ({
      title: item.title,
      passageid: item.passageid,
    }))
  );

  //刷新文章榜
  const [rakingnum, setrakingnum] = useState(4);
  const refreshClick = (num: number) => {
    const _localPassageRaking = new Set();
    while (_localPassageRaking.size < num) {
      const r = Math.floor(Math.random() * 12);
      _localPassageRaking.add({
        title: passageRaking[r].title,
        passageid: passageRaking[r].passageid,
      });
    }
    setLocalPassageRaking(Array.from(_localPassageRaking));
  };

  //点击查看更多
  const [isShowMore, setIsShowMore] = useState(true);
  const passageRakingMoreClick = async () => {
    setrakingnum(8);
    setIsShowMore(false);
    const _localPassageRaking = new Set(localPassageRaking);
    while (_localPassageRaking.size < 8) {
      const r = Math.floor(Math.random() * 12);
      _localPassageRaking.add({
        title: passageRaking[r].title,
        passageid: passageRaking[r].passageid,
      });
    }
    setLocalPassageRaking(Array.from(_localPassageRaking));
  };

  return (
    <>
      <HomeRightWrapper>
        <div className="publish" onClick={publishClick}>
          <img src={publish} alt="" />
          发表文章
        </div>
        <div className="passageRaking">
          <div className="head">
            <h4>文章榜</h4>
            <div className="right" onClick={() => refreshClick(rakingnum)}>
              <img src={refresh} alt="" />
              切换榜单
            </div>
          </div>
          <div className="items">
            {localPassageRaking.map((item: any, index: number) => {
              return (
                <div
                  className="item"
                  key={index}
                  onClick={() => navigate(`/passage-detail/${item.passageid}`)}
                >
                  <span>{index + 1}</span>
                  <p>{item.title}</p>
                </div>
              );
            })}
            {isShowMore && (
              <div className="more" onClick={passageRakingMoreClick}>
                查看更多
                <img src={more} alt="" />
              </div>
            )}
          </div>
        </div>
        <FinePassageWrapper>
          <h4>博客精选</h4>
          {finePassage.map((item: IfinePassage) => {
            return (
              <div
                className="item"
                key={item.passageid}
                onClick={() => navigate(`/passage-detail/${item.passageid}`)}
              >
                <img src={item.avatar} alt="" className="avatar" />
                <div className="passage">
                  <div className="content">{item.content}</div>
                  <div className="author">{item.username}</div>
                </div>
              </div>
            );
          })}
        </FinePassageWrapper>
        <ContactMeWrapper>
          <h4>联系站长</h4>
          <div className="items">
            <div className="qq">
              <img src={QQ} alt="" />
              <span>QQ</span>
            </div>
            <div className="weichat">
              <img src={weichat} alt="" />
              <span>微信</span>
            </div>
            <div className="tiktok">
              <img src={tiktok} alt="" />
              <span>抖音</span>
            </div>
          </div>
        </ContactMeWrapper>
      </HomeRightWrapper>
      {isShowEditor && <Publish setIsShowEditor={setIsShowEditor} />}
    </>
  );
});

export default HomeRight;
