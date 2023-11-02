import { http } from '@/http';
import type { ICreateArticleBody } from './model';
import type { IArticle } from '../../ArticleList/services';

export const editArticleService = async (slug: string, body: ICreateArticleBody) => {
  const { data: response } = await http.put<IArticle>(`/articles/${slug}`, body);
  return response;
};
