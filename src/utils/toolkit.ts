import { customAlphabet } from 'nanoid';

export const sleep = (timer: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, timer);
  });

export const createId = (prefix = 'id', length = 8, joiner = true) => {
  const custom = customAlphabet(
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  );
  return `${prefix}${joiner ? '_' : ''}${custom(length)}`;
};

/**
 * 获取url参数
 */
export const getSearchParams = (url = location.href) => {
  const uri = new URL(url);
  const params: AnyObj<string> = {};
  uri.searchParams.forEach((val, key) => {
    params[key] = val;
  });
  return params;
};
