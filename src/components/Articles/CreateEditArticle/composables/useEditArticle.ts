import { provide } from 'vue';
import { useRoute } from 'vue-router';
import { useArticleService, useSingleArticle, useTags } from '.';
import { editArticleService } from '../services';
import { formInjectionKey, tagsInjectionKey } from './constants';

export function useEditArticle() {
  const {
    params: { slug }
  } = useRoute();
  const { formValues, isFetching } = useSingleArticle(slug as string);
  const { isFetchingTags, tags } = useTags();
  const { buttonDisabled, isPending, onSubmit } = useArticleService({
    formValues,
    serviceFn: (body) => editArticleService(slug as string, body)
  });

  provide(formInjectionKey, { buttonDisabled, formValues, isPending, onSubmit });
  provide(tagsInjectionKey, { isFetchingTags, tags: tags as any });

  return { isFetching };
}
