export const linkGen = (pageNum: number) => {
  return pageNum === 1 ? '/' : `/articles/${pageNum}`;
};
