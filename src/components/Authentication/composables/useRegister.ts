import { useMutation } from '@tanstack/vue-query';
import { computed, ref } from 'vue';
import { registerService, type IRegisterBody } from '../services';
import { setToken } from '@/helper';

export function useRegister() {
  const form = ref({ username: '', email: '', password: '' });

  const { mutate, isPending } = useMutation({
    mutationFn: (userInfo: IRegisterBody) => registerService(userInfo),
    onSuccess: (data) => setToken(data.user.token),
    onError: (error) => {
      // toast.error('error');
    }
  });

  const buttonDisabled = computed(() => {
    return Object.values(form.value).some((value) => !value);
  });

  const onSubmit = () => {
    mutate({ user: { ...form.value } });
  };

  return { form, onSubmit, buttonDisabled, isPending };
}
