import request from '@/utils/request';

interface SignInReq {
  username: string;
  password: string;
}

export const signIn: ReqFunc<SignInReq> = (data) =>
  request.post('/auth/login', data);

export const getUserInfo: ReqFunc<number> = (userId) =>
  request.get(`/user/${userId}`);
