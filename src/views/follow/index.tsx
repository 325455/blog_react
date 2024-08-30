import React, { memo, useEffect, useState } from "react";
import { CaresWrapper } from "./style";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { fetchFollowData } from "@/store/modules/follow";
import store, { StateType } from "@/store";

interface IItem {
  phone: string;
  username: string;
  avatar: string;
  user_rank: string;
}

const Cares: React.FC = () => {
  const dispatch = useDispatch();

  const { followedList, fanList } = useSelector((state: StateType) => ({
    followedList: state.follow.followed,
    fanList: state.follow.fans,
  }));
  const user = useSelector((state: StateType) => state.app.user) as any;
  const [currentList, setcurrentList] = useState<any>(followedList);
  const [currentTab, setCurrentTab] = useState("followed");

  useEffect(() => {
    dispatch(fetchFollowData() as any);
    store.subscribe(() => {
      setcurrentList(store.getState().follow.followed);
    });
  }, []);

  const ontabClick = (tab: string) => {
    setCurrentTab(tab);
    setcurrentList(tab === "followed" ? followedList : fanList);
  };

  return (
    <CaresWrapper>
      <div className="main">
        <div className="header">
          <div className="avatar">
            <img src={user.avatar} alt="" />
          </div>
          <div className="info">
            <div className="name">{user.username}</div>
            <div className="rank">{user.user_rank}</div>
          </div>
        </div>
        <div className="content">
          <div className="tabs">
            <div
              className={classNames("cares", {
                active: currentTab === "cares",
              })}
              onClick={() => ontabClick("followed")}
            >
              关注<span>({user.followedNum})</span>
            </div>
            <div
              className={classNames("fans", {
                active: currentTab === "fans",
              })}
              onClick={() => ontabClick("fans")}
            >
              粉丝<span>({user.fansNum})</span>
            </div>
          </div>
          <div className="items">
            {currentList.map((item: IItem) => {
              return (
                <div className="item" key={item.phone}>
                  <div className="cared_avatar">
                    <img src={item.avatar} alt="" />
                  </div>
                  <div className="cared_info">
                    <div className="cared_name">{item.username}</div>
                    <div className="rank">{item.user_rank}</div>
                  </div>
                  {currentTab === "followed" && (
                    <div className="has_cared">已关注</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </CaresWrapper>
  );
};

export default memo(Cares);
