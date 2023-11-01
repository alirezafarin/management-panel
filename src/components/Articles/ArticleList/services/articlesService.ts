import { http } from '@/http';
import type { IArticles } from '.';
import { type Ref } from 'vue';

export const articlesService = async (page: Ref<string>) => {
  const { data: response } = await http.get<IArticles>('/articles', {
    params: { page: page.value }
  });
  return response;
};
