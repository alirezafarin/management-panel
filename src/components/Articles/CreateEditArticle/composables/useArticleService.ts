import { en } from '@/dictionary/en';
import { useMutation } from '@tanstack/vue-query';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';
import { type ICreateArticleBody } from '../services';
import type { IUseArticleServiceProps } from './model';
import { checkRequiredFields } from './helper';

export function useArticleService({
  serviceFn,
  formValues,
  successMsg = en.articles.createSuccessful
}: IUseArticleServiceProps) {
  const toast = useToast();
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: (articleValues: ICreateArticleBody) => serviceFn(articleValues),
    onSuccess: () => {
      toast.success(successMsg);
      // router.push({ name: 'home' });
    },
    onError: (error) => {}
  });

  const buttonDisabled = computed(() => {
    return checkRequiredFields(formValues.value);
  });

  const onSubmit = () => {
    const { body, description, newTag, tagList, title } = formValues.value;
    mutate({ article: { title, description, body, tagList: [...tagList, newTag] } });
  };

  return {
    onSubmit,
    buttonDisabled,
    isPending
  };
}
