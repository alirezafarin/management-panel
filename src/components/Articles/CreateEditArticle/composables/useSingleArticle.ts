import { useQuery } from '@tanstack/vue-query';
import { ref, watch } from 'vue';
import { fetchSingleArticleService, type IArticleFormValues } from '../services';

export function useSingleArticle(slug: string) {
  const formValues = ref<IArticleFormValues>({
    title: '',
    body: '',
    description: '',
    tagList: [],
    newTag: ''
  });

  const { data, isFetching } = useQuery({
    queryKey: ['fetchArticleBySlug', slug],
    queryFn: () => fetchSingleArticleService(slug)
  });

  watch(data, () => {
    if (data.value?.article) {
      formValues.value = {
        ...data.value.article,
        newTag: ''
      };
    }
  });

  return {
    formValues,
    isFetching
  };
}
