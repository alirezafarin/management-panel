import { computed, ref } from 'vue';
import { registerService, type IRegisterBody } from '../services';
import { useMutation } from '@tanstack/vue-query';

export function useRegister() {
  const form = ref({ username: '', email: '', password: '' });

  const { mutate, isPending } = useMutation({
    mutationFn: (userInfo: IRegisterBody) => registerService(userInfo)
  });

  const buttonDisabled = computed(() => {
    return Object.values(form.value).some((value) => !value);
  });

  const onSubmit = () => {
    mutate({ user: { ...form.value } });
  };

  return { form, onSubmit, buttonDisabled, isPending };
}
