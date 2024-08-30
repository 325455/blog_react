import zhanghao from "@/assets/images/icons/zhanghao.png";
import mima from "@/assets/images/icons/mima.png";
import yanzhengcode from "@/assets/images/icons/identity.png";

export const signUpFormData = {
  title: "Sign Up",
  items: [
    {
      name: "username",
      lab: "手机号",
      icon: zhanghao,
      placehoder: "请输入手机号/邮箱",
    },
    {
      name: "password",
      lab: "密码",
      icon: mima,
      placehoder: "请输入密码",
      hidden: true,
    },
    {
      name: "repassword",
      lab: "二次确认密码",
      icon: mima,
      placehoder: "请再次输入密码",
      hidden: true,
    },
    {
      name: "verifyCode",
      lab: "验证码",
      icon: yanzhengcode,
      placehoder: "请输入验证码",
      verity: true,
    },
  ],
  footer: "已有账号了？Sign In",
  trans: -617,
};

export const signInFormData = {
  title: "Sign In",
  items: [
    {
      name: "username",
      lab: "手机号",
      icon: zhanghao,
      placehoder: "请输入手机号/邮箱",
    },
    {
      name: "password",
      lab: "密码",
      icon: mima,
      placehoder: "请输入密码",
      hidden: true,
    },
    {
      name: "imgCode",
      lab: "验证码",
      icon: yanzhengcode,
      placehoder: "请输入验证码",
      verity: true,
    },
  ],
  footer: "还没有账号？Sign Up",
  trans: 0,
};

export const classItems = [
  "人工智能",
  "开发工具",
  "前端",
  "后端",
  "android",
  "ios",
  "代码人生",
  "在线阅读",
  "云计算",
  "云职业",
  "计算机结构",
  "嵌入式架构",
  "应用开发",
  "移动开发",
  "计算机应用",
  "大数据",
  "自动化测试",
  "接口测试",
];
