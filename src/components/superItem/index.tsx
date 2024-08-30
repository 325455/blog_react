import React, { memo } from "react";
import { SuperItemWrapper } from "./style";
import win1 from "@/assets/images/win1.png";
import win2 from "@/assets/images/win2.png";
import win3 from "@/assets/images/win3.png";
import { useNavigate } from "react-router-dom";

interface Iprops {
  info: {
    phone: string;
    username: string;
    user_rank: string;
    avatar: string;
    passagenum: number;
    recommends: string;
    isFollowed: boolean;
  };
  rank: number;
}

const SuperItem: React.FC<Iprops> = memo((props) => {
  const navigate = useNavigate();
  const { info, rank } = props;
  const renderTop = () => {
    if (rank === 0) {
      return <img src={win1} alt="" className="rankicon" />;
    } else if (rank === 1) {
      return <img src={win2} alt="" className="rankicon" />;
    } else if (rank === 2) {
      return <img src={win3} alt="" className="rankicon" />;
    }
  };

  return (
    <SuperItemWrapper onClick={() => navigate(`/user-detail/${info.phone}`)}>
      <div className="avater">
        <img src={info.avatar} alt="" />
      </div>
      <div className="details">
        <div className="name">
          <span>{info.username}</span>
          <span className="care">{info.isFollowed ? "已关注" : "未关注"}</span>
        </div>
        <div className="job">头衔：{info.user_rank}</div>
        <div className="access">
          <span>
            发表文章: <span className="num">{info.passagenum}</span>{" "}
          </span>
          <span>
            点赞量: <span className="num">{info.recommends}</span>{" "}
          </span>
        </div>
      </div>
      {renderTop()}
    </SuperItemWrapper>
  );
});

export default SuperItem;
