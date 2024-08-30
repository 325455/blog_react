import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import taxios from "@/service";
import { DetailWrapper } from "./style";
import dayjs from "dayjs";
import hljs from "highlight.js";
import { marked } from "marked";
import { markedHighlight } from "marked-highlight";
import { Input, message, Modal } from "antd";
import { info } from "console";

marked.use(
  markedHighlight({
    langPrefix: "hljs language-",
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : "shell";
      return hljs.highlight(code, { language }).value;
    },
  })
);

interface IDetail {
  passageid: string;
  title: string;
  content: string;
  article_created_at: string;
  article_updated_at: string;
  author_username: string;
  author_avatar: string;
  author_rank: string;
  author_phone: string;
  likes_count: number;
  isLike: boolean;
  comments?: Array<{
    username: string;
    comment_id: string;
    phone: string;
    passageid: string;
    content: string;
    created_at: string;
  }>;
}

const ArticleDetail = () => {
  const navigate = useNavigate();
  const { passageid } = useParams<{ passageid: string }>();

  const [detail, setDetail] = useState<IDetail | null>(null);
  const [likeState, setLikeState] = useState("点赞");
  const [commentModalOpen, setCommentModalOpen] = useState(false);
  const [comment, setComment] = useState("");

  useEffect(() => {
    getPassageDetail();
  }, [likeState]);

  const contentRef = useRef<HTMLDivElement>(null);
  const getPassageDetail = async () => {
    const { data } = await taxios.get(`/passage/detail/${passageid}`);
    setDetail(data.detail);
    setLikeState(data.detail?.isLike ? "已点赞" : "点赞");
  };

  useEffect(() => {
    if (detail && contentRef.current) {
      const content = marked.parse(detail.content, { async: false });
      contentRef.current.innerHTML = content as any;
    }
  }, [detail]);

  const handleLike = async () => {
    if (likeState === "点赞") {
      const { data } = await taxios.post("/like/create", {
        passageid: detail?.passageid,
      });
      if (data.code === "0") {
        setLikeState("已点赞");
        message.info(data.message);
      }
    } else {
      const { data } = await taxios.delete(`/like/cancel/${passageid}`);
      setLikeState("点赞");
      message.info(data.message);
    }
  };

  async function handleOk() {
    const { data } = await taxios.post("/comment/create", {
      passageid,
      content: comment,
    });
    if (data.code === "0") {
      message.info(data.message);
      getPassageDetail();
      setComment("");
      setCommentModalOpen(false);
    }
  }

  function handleCancel(): void {
    setCommentModalOpen(false);
  }

  return (
    <DetailWrapper>
      <div className="container">
        {detail && (
          <div className="contentContainer">
            <div className="articleInfo">
              <img
                src={detail.author_avatar}
                alt="Author Avatar"
                className="avatar"
                onClick={() => navigate(`/user-detail/${detail.author_phone}`)}
              />
              <div>
                <p>
                  <strong>作者：</strong> {detail.author_username}
                </p>
                <p>
                  <strong>发布时间：</strong>{" "}
                  {dayjs(detail.article_created_at).format("YYYY-MM-DD HH:ss")}
                </p>
                <p>
                  <strong>最后修改：</strong>{" "}
                  {dayjs(detail.article_created_at).format("YYYY-MM-DD HH:ss")}
                </p>
              </div>
            </div>
            <div className="articleContent" ref={contentRef}></div>
            <div className="articleInteraction">
              <p>
                <strong>点赞数：</strong>
                {detail.likes_count}
              </p>
              <button onClick={handleLike} className="likeButton">
                {likeState}
              </button>
            </div>
            <div className="articleComments">
              <div className="title">
                <h3>评论：</h3>
                <button
                  className="publishButton"
                  onClick={() => setCommentModalOpen(true)}
                >
                  发表评论
                </button>
              </div>
              {detail.comments &&
                detail.comments.map((comment) => (
                  <div key={comment.comment_id} className="comment">
                    <p>
                      <div className="comment-user">
                        <strong>{comment.username}:</strong>
                        <span>
                          {dayjs(comment.created_at).format("YYYY-MM-DD")}
                        </span>
                      </div>
                      {comment.content}
                    </p>
                  </div>
                ))}
              <Modal
                title="发表评论"
                closable
                open={commentModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <Input
                  size="large"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></Input>
              </Modal>
            </div>
          </div>
        )}
      </div>
    </DetailWrapper>
  );
};

export default ArticleDetail;
