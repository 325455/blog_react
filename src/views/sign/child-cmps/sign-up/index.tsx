import React, { memo } from "react";
import { SignUpWrapper } from "./style";
import Form from "@/components/form";
import { signUpFormData } from "@/assets/localdata";
import { useSelector } from "react-redux";
import { StateType } from "@/store";
import { message } from "antd";
import taxios from "@/service";

const SignUp: React.FC = memo(() => {
  const [messageApi, contextHolder] = message.useMessage();

  const [phone, password, repassword, code] = useSelector(
    (state: StateType) => state.sign.signUpForm
  );
  const imgCode = useSelector((state: StateType) => state.sign.signUpImgCode);

  const formSubmit = async () => {
    if (!phone || !password || !repassword) {
      return messageApi.open({
        type: "warning",
        content: "用户名或密码不能为空",
      });
    }
    if (password !== repassword) {
      return messageApi.open({
        type: "warning",
        content: "两次输入的密码不一致",
      });
    }
    if (phone.length !== 11) {
      return messageApi.open({
        type: "warning",
        content: "手机号码不是11位",
      });
    }
    if (!code) {
      return messageApi.open({ type: "warning", content: "请输入验证码" });
    }
    if (code !== imgCode) {
      return messageApi.open({ type: "warning", content: "验证码错误" });
    }
    const { data } = await taxios.post("/user/signup", {
      phone,
      password,
    });
    console.log(data);
  };

  return (
    <SignUpWrapper>
      <div className="sign_up item">
        {contextHolder}
        <Form formdata={signUpFormData as any} confirmClick={formSubmit} />
      </div>
    </SignUpWrapper>
  );
});

export default SignUp;
