import React, { memo, useRef, useState } from "react";
import { CoverWrapper } from "./style";
import avaterCover from "@/assets/images/头像蒙版.svg";
import taxios from "@/service";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "@/store";
import { fetchUser } from "@/store/modules/app";

interface IProps {
  setVisiable: any;
}

const ChangeInfoMask: React.FC<IProps> = (props) => {
  const dispatch = useDispatch();
  const { setVisiable } = props;

  const { avatar, username, user_rank } = useSelector(
    (state: StateType) => state.app.user
  ) as any;

  const fileInputRef = useRef<HTMLInputElement>(null);
  //待提交的状态
  const [_name, setName] = useState(username);
  const [_rank, setRank] = useState(user_rank);
  const [tempAvater, setTempAvater] = useState(avatar);

  const afterSelectImg = () => {
    if (fileInputRef.current?.files) {
      const files = fileInputRef.current?.files;
      if (!files[0].type.startsWith("image")) {
        alert("请上传图片类型文件");
        return;
      }
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = (e) => {
        const res = e.target?.result as string;
        setTempAvater(res);
      };
    }
  };

  const handleSaveClick = async () => {
    const formdata = new FormData();
    formdata.append("name", _name);
    formdata.append("rank", _rank);
    if (fileInputRef.current?.files) {
      formdata.append("avatar", fileInputRef.current.files[0]);
    }
    const { data } = await taxios.post("/user/userInfo", formdata, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    //修改成功后修改redux中的状态
    if (data.code === "0") {
      dispatch(fetchUser() as any);
      setVisiable(false);
    }
  };

  return (
    <CoverWrapper>
      <div className="cover">
        <div className="form">
          <div className="title">编辑资料</div>
          <div className="avater">
            <input
              type="file"
              className="fileInput"
              onChange={afterSelectImg}
              ref={fileInputRef}
            />
            <img src={tempAvater} alt="" />
            <div className="mask">
              <img src={avaterCover} alt="" />
            </div>
          </div>
          <div style={{ textAlign: "center" }}>点击修改头像</div>
          <div className="name">
            <div>姓名</div>
            <input
              type="text"
              value={_name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="rank">
            <div>头衔</div>
            <input
              type="text"
              value={_rank}
              onChange={(e) => setRank(e.target.value)}
            />
          </div>
          <div className="btns">
            <button className="canser" onClick={() => setVisiable(false)}>
              取消
            </button>
            <button className="save" onClick={handleSaveClick}>
              保存
            </button>
          </div>
        </div>
      </div>
    </CoverWrapper>
  );
};

export default memo(ChangeInfoMask);
