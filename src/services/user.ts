import request from '@/utils/request';
import { createId } from '@/utils/toolkit';

interface SignInReq {
  username: string;
  password: string;
}

export const signIn: ReqFunc<SignInReq> = (data) =>
  request.post('/auth/login', data);

export const getUserInfo: ReqFunc<number> = (userId) =>
  request.get(`/user/${userId}`);

export const getGitHubAuthUri: ReqFunc<string> = () =>
  // url = encodeURIComponent(location.href)
  request.get('/auth/github/getAuthUri', {
    params: {
      state: createId('git'),
      // url,
    },
  });

export const signInByGitHub: ReqFunc<string> = (code) =>
  request.post('/auth/github/login', { code });
