import request from '@/utils/request';

export const getAppList: ReqFunc = () => request.post('/app/queryAppList');
