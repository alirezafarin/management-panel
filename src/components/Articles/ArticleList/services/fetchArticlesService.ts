import { http } from '@/http';
import type { IArticles } from '.';
import { type Ref } from 'vue';

export const fetchArticlesService = async (page: Ref<string>, signal: AbortSignal) => {
  const { data: response } = await http.get<IArticles>('/articles', {
    params: { page: page.value },
    signal
  });
  return response;
};
