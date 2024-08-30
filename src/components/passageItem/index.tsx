import React, { memo } from "react";
import { PassageItemWrapper } from "./style";
import view from "@/assets/images/点赞.png";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { Ipassgae } from "@/store/modules/home";

interface Iprops {
  passage: Ipassgae;
}

const PassageItem: React.FC<Iprops> = memo((props) => {
  let { passageid, title, content, recommend, created_at, avatar, username } =
    props.passage;
  created_at = dayjs(created_at).format("YYYY-MM-DD HH:MM");
  title = title.replace(/#/g, "");
  content = content.slice(0, 140).replace(/#/g, "") + "...";

  const navigate = useNavigate();

  return (
    <PassageItemWrapper>
      <h3
        className="passageTitle"
        onClick={() => navigate(`/passage-detail/${passageid}`)}
      >
        {title}
      </h3>
      <p onClick={() => navigate(`/passage-detail/${passageid}`)}>{content}</p>
      <div className="other">
        <div className="recommed">推荐</div>
        <div className="avater">
          <img src={avatar} alt="" />
        </div>
        <div className="author">{username}</div>
        <div className="counter">
          <img src={view} className="recommendIcon" alt="" />
          {recommend}
        </div>
        <div className="time">{created_at}</div>
      </div>
    </PassageItemWrapper>
  );
});

export default PassageItem;
