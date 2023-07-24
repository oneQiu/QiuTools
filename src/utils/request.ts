import AuthModal from '@/components/AuthModal';
import { TOKEN_KEY } from '@/constants/storageKey';
import { notification } from 'antd';
import Axios from 'axios';

const request = Axios.create({
  baseURL: 'http://127.0.0.1:3000/api/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

const showMsg = (msg: string) => {
  notification.error({
    duration: 2,
    key: 'requestErrMsg',
    message: '提示',
    description: msg,
  });
};

request.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(TOKEN_KEY)}`;
  return config;
});

request.interceptors.response.use(
  (res) => {
    if (!res.data.flag) {
      showMsg(res.data.message || '接口繁忙');
    }
    return res.data;
  },
  (error) => {
    if (error.response?.status === 401) {
      showMsg('请登录');
      AuthModal.open();
    } else {
      showMsg('接口出了点小问题，请稍后重试');
    }
  }
);

export default request;
