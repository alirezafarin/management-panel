import { useQuery } from '@tanstack/vue-query';
import { type Ref } from 'vue';
import { articlesService } from '../services';

export function useArticleList(currentPage: Ref<string>) {
  const { data, isFetching } = useQuery({
    queryKey: ['articles', currentPage],
    queryFn: ({ signal }) => articlesService(currentPage, signal),
    initialData: { articlesCount: 0, articles: [] }
  });

  return {
    data,
    isFetching
  };
}
