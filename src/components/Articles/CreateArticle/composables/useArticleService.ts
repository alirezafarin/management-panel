import { useMutation } from '@tanstack/vue-query';
import { computed } from 'vue';
import { type ICreateArticleBody } from '../services';
import type { IUseArticleServiceProps } from './model';
import { en } from '@/dictionary/en';
import { useToast } from 'vue-toastification';
import { useRouter } from 'vue-router';

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
    return Object.values(formValues.value).some((value) => !value);
  });

  const onSubmit = () => {
    console.log('onSubmit');
    mutate({ article: { ...formValues.value } });
  };

  return {
    onSubmit,
    buttonDisabled,
    isPending
  };
}
