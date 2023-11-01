import { ref } from 'vue';
import { useAuth } from '.';
import { loginService } from '../services';

export function useLogin() {
  const form = ref({ email: '', password: '' });
  const { buttonDisabled, isPending, onSubmit } = useAuth({
    formValues: form,
    serviceFn: loginService
  });

  return { form, onSubmit, buttonDisabled, isPending };
}
