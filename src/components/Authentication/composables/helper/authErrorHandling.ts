import type { AxiosError } from 'axios';
import type { IAuthErrors } from './model';
import { useToast } from 'vue-toastification';

export const handleAuthErrors = (error: AxiosError) => {
  const toast = useToast();
  const { errors } = error.response?.data as IAuthErrors;
  Object.entries(errors).forEach(([key, value]) => {
    value.forEach((error) => toast.error(`${key} ${error}`));
  });
};
