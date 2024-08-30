import React, { memo, useEffect } from "react";
import { UserWrapper } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetail } from "@/store/modules/user";
import { StateType } from "@/store";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import taxios from "@/service";
import { message } from "antd";

interface Ipropos {
  phone: string;
}

const User: React.FC<Ipropos> = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { phone } = props;

  useEffect(() => {
    dispatch(fetchUserDetail(phone));
  }, []);

  const { user } = useSelector((state: StateType) => ({
    user: state.user,
  }));
  const myPhone = useSelector(
    (state: StateType) => (state.app.user as any).phone
  );

  const handleFollowClick = async (followType: string) => {
    if (followType === "create") {
      const { data } = await taxios.post("/follow/create", {
        followed: phone,
      });
      if (data.code === "0") {
        message.info("关注成功", 1);
        dispatch(fetchUserDetail(phone));
      }
    } else {
      const { data } = await taxios.delete(`/follow/cancel/${phone}`);
      if (data.code === "0") {
        message.info("取关成功", 1);
        dispatch(fetchUserDetail(phone));
      }
    }
  };

  return (
    <UserWrapper>
      <div className="profile">
        <img src={user.user.avatar} alt="头像" />
        <div className="profile-info">
          <div>
            <span className="username">{user.user.username}</span>
            {user.user.phone !== myPhone &&
              (!user.user.isFollowed ? (
                <span
                  className="follow"
                  onClick={() => handleFollowClick("create")}
                >
                  + 关注
                </span>
              ) : (
                <span
                  className="follow"
                  onClick={() => handleFollowClick("cancel")}
                >
                  已关注
                </span>
              ))}
          </div>
          <p>职业：{user.user.user_rank}</p>
          <p>位置：北京, 中国</p>
        </div>
      </div>
      <div className="stats">
        <div>
          <h3>{user.article_num}</h3>
          <p>文章</p>
        </div>
        <div>
          <h3>{user.followed_num}</h3>
          <p>关注者</p>
        </div>
        <div>
          <h3>{user.comment_num}</h3>
          <p>评论</p>
        </div>
      </div>
      <div className="recent-posts">
        <h3>发布的文章</h3>
        {user.passages.map((passage: any) => {
          return (
            <div
              className="post-item"
              onClick={() => navigate(`/passage-detail/${passage.passageid}`)}
            >
              <a style={{ cursor: "pointer" }}>{passage.title}</a>
              <span>{dayjs(passage.created_at).format("YYYY-MM-DD")}</span>
            </div>
          );
        })}
      </div>
    </UserWrapper>
  );
};

export default memo(User);
