import { http } from '@/http';
import type { IArticles } from '.';

export const deleteArticleService = async (slug: string) => {
  const { data: response } = await http.delete<IArticles>(`/articles/${slug}`);
  return response;
};
