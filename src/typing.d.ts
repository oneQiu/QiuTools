declare interface RouteProps {
  path: string;
  component?: JSX.Element;
  children?: RouteProps[];
  exact?: boolean;
  title?: string;
}

declare module '*.md' {}

declare type AnyObj<T = any> = {
  [key in string | number]: T;
};
