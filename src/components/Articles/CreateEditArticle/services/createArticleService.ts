import { http } from '@/http';
import type { ICreateArticleBody } from './model';
import type { IArticle } from '../../ArticleList/services';

export const createArticleService = async (body: ICreateArticleBody) => {
  const { data: response } = await http.post<IArticle>('/articles', body);
  return response;
};
