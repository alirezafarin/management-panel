import { deleteToken } from '@/helper';
import { useQuery } from '@tanstack/vue-query';
import { currentUserService } from '../services';
import { queryKeys } from '@/constants';

export function useCurrentUser() {
  const { data, isFetching } = useQuery({
    queryKey: [queryKeys.currentUser],
    queryFn: () => currentUserService(),
  });

  const logout = () => {
    deleteToken();
    window.location.replace('/login');
  };

  return { data, isFetching, logout };
}
