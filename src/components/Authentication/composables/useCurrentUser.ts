import { deleteToken } from '@/helper';
import { useQuery } from '@tanstack/vue-query';
import { currentUserService } from '../services';

export function useCurrentUser() {
  const { data, isFetching } = useQuery({
    queryKey: ['currentUser'],
    queryFn: () => currentUserService()
  });

  const logout = () => {
    deleteToken();
    window.location.replace('/login');
  };

  return { data, isFetching, logout };
}
