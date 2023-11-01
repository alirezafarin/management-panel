import { useQuery } from '@tanstack/vue-query';
import { articlesService } from '../services';
import { type Ref } from 'vue';

export function useArticleList(currentPage: Ref<string>) {
  const { data, isFetching } = useQuery({
    queryKey: ['articles', currentPage],
    queryFn: () => articlesService(currentPage),
    initialData: { articlesCount: 0, articles: [] }
  });

  return {
    data,
    isFetching
  };
}
