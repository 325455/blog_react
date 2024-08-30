import React, { memo, useRef, useState } from "react";
import { CoverWrapper } from "./style";
import { marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";
import close from "@/assets/images/icons/关闭.png";
import { classItems } from "@/assets/localdata";
import _ from "underscore";
import { message } from "antd";
import taxios from "@/service";

interface Ipropos {
  setIsShowEditor: any;
}

//配置maeked
marked.use(
  markedHighlight({
    langPrefix: "hljs language-",
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : "shell";
      return hljs.highlight(code, { language }).value;
    },
  })
);

const Publish: React.FC<Ipropos> = (props) => {
  const { setIsShowEditor } = props;
  const [messageApi, contextHolder] = message.useMessage();

  const [passage, setPassage] = useState("");
  const [passageType, setPassageType] = useState("人工智能");
  const [title, setTitle] = useState("");
  const ShowEl = useRef<HTMLDivElement>(null);

  //点击发布文章页面的关闭按钮
  const maskCloseClick = () => {
    setIsShowEditor(false);
    document.body.style.overflow = "auto";
  };

  //同步解析markdown格式文章
  const textAreaValueChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const md = marked.parse(e.target.value, { async: false }) as string;
    setPassage(e.target.value);
    if (ShowEl.current) {
      ShowEl.current.innerHTML = md;
    }
  };

  //ctrL + 回车换行
  const handleKeyEvent = (e: any) => {
    if (e.ctrlKey && e.key === "Enter") {
      setPassage(passage + "<br/>" + "\n");
    }
  };

  const handlePublishClick = async () => {
    if (!title) {
      messageApi.warning("标题不能为空", 1);
      return;
    }
    if (!passage) {
      messageApi.warning("文章内容不能为空", 1);
      return;
    }
    const { data } = await taxios.post("/passage", {
      title,
      content: passage,
      description: passageType,
    });

    if (data.code === "0") {
      messageApi.success("发布成功", 1);
      setTitle("");
      setPassage("");
      document.body.style.overflow = "auto";
      setTimeout(() => {
        setIsShowEditor(false);
      }, 600);
    } else {
      messageApi.error("发布失败");
    }
  };

  return (
    <CoverWrapper>
      {contextHolder}
      <div className="cover">
        <div className="editor">
          <div className="title">
            <input
              type="text"
              placeholder="请输入文章标题"
              autoFocus
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="passageType">
              <span>类型</span>
              <select
                name="passageType"
                id="passageType"
                value={passageType}
                onChange={(e) => setPassageType(e.target.value)}
              >
                {classItems.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
                <option value="其它">其它</option>
              </select>
            </div>
            <div className="btns">
              <button onClick={handlePublishClick}>发布</button>
              <div className="close" onClick={maskCloseClick}>
                <img src={close} alt="" />
              </div>
            </div>
          </div>
          <div className="passage">
            <textarea
              className="paper"
              onChange={(e) => {
                textAreaValueChange(e);
              }}
              value={passage}
              onKeyDown={handleKeyEvent}
            ></textarea>
            <div className="md_show" ref={ShowEl}></div>
          </div>
        </div>
      </div>
    </CoverWrapper>
  );
};

export default memo(Publish);
