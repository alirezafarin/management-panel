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
  successMsg = en.articles.createSuccessful,
}: IUseArticleServiceProps) {
  const toast = useToast();
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: (articleValues: ICreateArticleBody) => serviceFn(articleValues),
    onSuccess: () => {
      toast.success(successMsg);
      router.push({ name: 'home' });
    },
  });

  const buttonDisabled = computed(() => checkRequiredFields(formValues.value));

  const onSubmit = () => {
    const { newTag, tagList, ...otherValues } = formValues.value;
    const selectedTags = newTag ? [...tagList, newTag] : tagList;
    mutate({ article: { ...otherValues, tagList: selectedTags } });
  };

  return {
    onSubmit,
    buttonDisabled,
    isPending,
  };
}
