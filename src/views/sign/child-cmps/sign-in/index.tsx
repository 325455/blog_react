import React, { memo } from "react";
import { SignUpWrapper } from "./style";
import Form from "@/components/form";
import { signInFormData } from "@/assets/localdata";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { StateType } from "@/store";
import { message } from "antd";
import taxios from "@/service";

const SignIn: React.FC = memo(() => {
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const [phone, password, code] = useSelector(
    (state: StateType) => state.sign.signInForm
  );
  const imgCode = useSelector((state: StateType) => state.sign.signInImgCode);

  const formSubmit = async () => {
    if (!phone || !password) {
      return messageApi.open({
        type: "warning",
        content: "用户名或密码不能为空",
      });
    }
    if (phone.length !== 11) {
      return messageApi.open({ type: "warning", content: "手机号码不是11位" });
    }
    if (!code) {
      return messageApi.open({ type: "warning", content: "请输入验证码" });
    }
    if (code !== imgCode) {
      return messageApi.open({ type: "warning", content: "验证码错误" });
    }

    const { data } = await taxios.post("/login", {
      phone,
      password,
    });
    if (data.code === "0") {
      messageApi.open({ type: "success", content: "登录成功" });
      localStorage.setItem("token", data.token);
      setTimeout(() => {
        navigate("/home");
      }, 600);
    }
  };

  return (
    <SignUpWrapper>
      <div className="sign_up item">
        {contextHolder}
        <Form formdata={signInFormData as any} confirmClick={formSubmit} />
      </div>
    </SignUpWrapper>
  );
});

export default SignIn;
