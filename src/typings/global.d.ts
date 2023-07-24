declare type ReqFunc<R = any, T = any> = (r?: R) => Promise<{
  data: T;
  code: number;
  message: string;
  flag: boolean;
}>;

declare type AnyObj<T = any> = { [key: string]: T };
