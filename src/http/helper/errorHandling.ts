import { en } from '@/dictionary/en';
import type { AxiosError } from 'axios';
import { useToast } from 'vue-toastification';

export const handleRequestErrors = (error: AxiosError) => {
  if (error.name === 'AxiosError') {
    handleAxiosErrors(error as AxiosError);
  }
};

const handleAxiosErrors = (error: AxiosError) => {
  const toast = useToast();
  const errorMsg = (error as any).response.data.message;
  switch (error.response?.status) {
    case 401:
      toast.error(errorMsg || en.errors.noAuth);
      break;

    case 403:
      toast.error(errorMsg || en.errors.noAuth);
      break;

    case 404:
      toast.error(en.errors.notFound);
      break;
  }
};
