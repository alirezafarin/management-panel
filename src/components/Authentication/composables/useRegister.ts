import { ref } from 'vue';
import { useAuth } from '.';
import { registerService } from '../services';

export function useRegister() {
  const form = ref({ username: '', email: '', password: '' });
  const { buttonDisabled, isPending, onSubmit } = useAuth({
    formValues: form,
    serviceFn: registerService
  });

  return { form, onSubmit, buttonDisabled, isPending };
}
