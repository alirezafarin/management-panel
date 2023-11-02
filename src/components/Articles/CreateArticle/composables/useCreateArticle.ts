import { provide, ref } from 'vue';
import { useArticleService } from '.';
import { createArticleService, type ICreateArticle } from '../services';
import { formInjectionKey } from './constants';

export function useCreateArticle() {
  const formValues = ref<ICreateArticle>({ title: '', body: '', description: '', tagList: [] });
  const { buttonDisabled, isPending, onSubmit } = useArticleService({
    formValues,
    serviceFn: createArticleService
  });

  provide(formInjectionKey, { buttonDisabled, formValues, isPending, onSubmit });
}
