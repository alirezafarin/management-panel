import type { Ref } from 'vue';
import type { ICreateArticle } from '../../services';
import type { IArticle } from '@/components/Articles/ArticleList/services';

export interface IUseArticleServiceProps<T = any> {
  serviceFn: (body: T) => Promise<IArticle>;
  formValues: Ref<T>;
  successMsg?: string;
}

export interface IArticleFormInject {
  formValues: Ref<ICreateArticle>;
  onSubmit: () => void;
  buttonDisabled: Ref<boolean>;
  isPending: Ref<boolean>;
}
