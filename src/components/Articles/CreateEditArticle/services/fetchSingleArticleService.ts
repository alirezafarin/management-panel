import { http } from '@/http';
import type { ISingleArticle } from '../../ArticleList/services';

export const fetchSingleArticleService = async (slug: string) => {
  const { data: response } = await http.get<ISingleArticle>(`/articles/${slug}`);
  return response;
};
