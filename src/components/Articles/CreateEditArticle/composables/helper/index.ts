import type { IArticleFormValues } from '../../services';

export const checkRequiredFields = (formValues: IArticleFormValues) => {
  const requiredTags = ['title', 'body', 'description'];
  return Object.entries(formValues).some((value) => {
    if (requiredTags.includes(value[0])) {
      if (!value[1]) return true;
    }
    return false;
  });
};
