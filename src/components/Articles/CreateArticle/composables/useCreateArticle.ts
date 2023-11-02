import { provide, ref } from 'vue';
import { useArticleService, useTags } from '.';
import { createArticleService, type IArticleFormValues } from '../services';
import { formInjectionKey, tagsInjectionKey } from './constants';

export function useCreateArticle() {
  const formValues = ref<IArticleFormValues>({
    title: '',
    body: '',
    description: '',
    tagList: [],
    newTag: ''
  });
  const { isFetchingTags, tags } = useTags();
  const { buttonDisabled, isPending, onSubmit } = useArticleService({
    formValues,
    serviceFn: createArticleService
  });

  provide(formInjectionKey, { buttonDisabled, formValues, isPending, onSubmit });
  provide(tagsInjectionKey, { isFetchingTags, tags: tags as any });
}
