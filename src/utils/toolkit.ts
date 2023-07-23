export const sleep = (timer: number) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, timer);
  });
