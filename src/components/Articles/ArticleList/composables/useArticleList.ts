import { useQuery } from '@tanstack/vue-query';
import { type Ref, ref, watch } from 'vue';
import { fetchArticlesService } from '../services';
import { queryKeys } from '@/constants';

export function useArticleList(currentPage: Ref<string>) {
  const pagesCount = ref(0);

  const { data, isFetching } = useQuery({
    queryKey: [queryKeys.articles, currentPage],
    queryFn: ({ signal }) => fetchArticlesService(currentPage, signal),
    initialData: { articlesCount: 0, articles: [] },
  });

  watch(data, () => {
    if (data.value.articlesCount) {
      pagesCount.value = data.value.articlesCount / data.value.articles.length;
    }
  });

  return {
    data,
    isFetching,
    pagesCount,
  };
}
