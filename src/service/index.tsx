import { message, Modal } from "antd";
import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

message.config({
  top: 0, // 设置消息距离视口顶部的距离
  duration: 3, // 消息持续时间，单位为秒
  maxCount: 3, // 同时显示的最多消息数量
});

//创建实例
const taxios = axios.create({
  baseURL: "http://127.0.0.1:8000",
  timeout: 5000,
});

//添加拦截器
taxios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    config.headers.Authorization = "Bearer " + localStorage.getItem("token");
    return config;
  },
  (err) => {
    return Promise.reject(`请求发送失败：${err}`);
  }
);

taxios.interceptors.response.use(
  (res: AxiosResponse) => {
    if (res.data.code !== "0") {
      message.info(res.data.message);
    }
    return res;
  },
  (error) => {
    // 处理错误
    Modal.destroyAll();
    if (error.response) {
      // 服务器响应错误
      switch (error.response.status) {
        case 408:
          message.info("请求超时");
          break;
        // 其他错误状态处理
        default:
          message.info("错误 " + error);
          break;
      }
      return Promise.reject(error);
    }
  }
);

export default taxios;
