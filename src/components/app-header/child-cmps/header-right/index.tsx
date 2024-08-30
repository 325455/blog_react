import React, { memo, useState } from "react";
import { HeaderRightWrapper } from "./style";
import search from "@/assets/images/icons/search.png";
import { useNavigate } from "react-router-dom";
import { StateType } from "@/store";
import { useSelector } from "react-redux";
import ChangeInfoMask from "@/components/changeInfoMask";

const HeaderRight: React.FC = memo(() => {
  const { username, fansNum, user_rank, avatar, followedNum } = useSelector(
    (state: StateType) => state.app.user
  ) as any;

  const [querystr, setQuerystr] = useState("");
  //显示和隐藏修改个人信息框（小的）
  const [isShow, setIsShow] = useState(false);
  //显示和隐藏修改资料框（大的）
  const [isShowChangeMessageBox, setIsShowChangeMessageBox] = useState(false);

  //登录和退出登录按钮的点击
  const navigate = useNavigate();
  const signBtnClick = () => {
    if (username) {
      localStorage.removeItem("token");
      window.location.reload();
    } else {
      navigate("/sign");
    }
  };

  return (
    <HeaderRightWrapper>
      <div className="search">
        <input
          type="text"
          placeholder="搜索"
          value={querystr}
          onChange={(e) => setQuerystr(e.target.value)}
        />
        <img
          src={search}
          alt=""
          className="searchicon"
          onClick={() => navigate(`/search/${querystr}`)}
        />
      </div>
      {username && (
        <div
          className="userInfo"
          onMouseEnter={() => setIsShow(true)}
          onMouseLeave={() => setIsShow(false)}
        >
          <img id="avater" src={avatar} alt="" />
          {/* 修改信息框 */}
          {isShow && (
            <div className="changeMessageBox">
              <div className="user">
                <img src={avatar} alt="" />
                <span>关注{followedNum}</span> <span>粉丝{fansNum}</span>
              </div>
              <button onClick={() => setIsShowChangeMessageBox(true)}>
                编辑资料
              </button>
            </div>
          )}
        </div>
      )}
      <div className="info">
        <span>{user_rank}</span>
        <span>{username}</span>
      </div>
      <button onClick={signBtnClick}>{!!username ? "退出登录" : "登录"}</button>
      {/* 编辑资料框 */}
      {isShowChangeMessageBox && (
        <ChangeInfoMask setVisiable={setIsShowChangeMessageBox} />
      )}
    </HeaderRightWrapper>
  );
});

export default HeaderRight;
