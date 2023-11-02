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
      const { title, description, body, tagList } = data.value.article;
      formValues.value = {
        title,
        description,
        body,
        tagList,
        newTag: ''
      };
    }
  });

  return {
    formValues,
    isFetching
  };
}
