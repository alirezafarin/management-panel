import type { IArticle } from '@/components/Articles/ArticleList/services';
import type { Ref } from 'vue';
import type { IArticleFormValues, ICreateArticleBody } from '../../services';

export interface IUseArticleServiceProps {
  serviceFn: (body: ICreateArticleBody) => Promise<IArticle>;
  formValues: Ref<IArticleFormValues>;
  successMsg?: string;
}

export interface IArticleFormInject {
  formValues: Ref<IArticleFormValues>;
  onSubmit: () => void;
  buttonDisabled: Ref<boolean>;
  isPending: Ref<boolean>;
}

export interface ITagsInject {
  isFetchingTags: Ref<boolean>;
  tags: Ref<string[]>;
}
