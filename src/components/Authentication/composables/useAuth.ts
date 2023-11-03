import { setToken } from '@/helper';
import router from '@/router';
import { useMutation } from '@tanstack/vue-query';
import { computed, type Ref } from 'vue';
import { type IRegisterResponse } from '../services';
import { handleAuthErrors } from '.';
import type { AxiosError } from 'axios';

export interface IUseAuthProps<T = any> {
  serviceFn: (body: T) => Promise<IRegisterResponse>;
  formValues: Ref<T>;
}

export function useAuth({ serviceFn, formValues }: IUseAuthProps) {
  const { mutate, isPending } = useMutation({
    mutationFn: (userInfo: typeof formValues.value) => serviceFn(userInfo),
    onSuccess: (data: IRegisterResponse) => {
      setToken(data.user.token);
      router.push({ name: 'home' });
    },
    onError: (error) => handleAuthErrors(error as AxiosError),
  });

  const buttonDisabled = computed(() => {
    return Object.values(formValues.value).some((value) => !value);
  });

  const onSubmit = () => {
    mutate({ user: { ...formValues.value } });
  };

  return { onSubmit, buttonDisabled, isPending };
}
