export const getUrlParams = (names?: string[]): { [key: string]: string } => {
  const uri = new URL(location.href);
  const res: AnyObj = {};
  if (!names) {
    uri.searchParams.forEach((value, key) => {
      res[key] = value;
    });
  } else {
    names.forEach(i => {
      res[i] = uri.searchParams.get(i);
    });
  }
  return res;
};
