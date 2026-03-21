export const navigateTo = (path: string) => {
  if (typeof window !== "undefined") {
    window.location.assign(path);
  }
};
