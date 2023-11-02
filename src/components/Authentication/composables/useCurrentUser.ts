import { useQuery } from '@tanstack/vue-query';
import { currentUserService } from '../services';

export function useCurrentUser() {
  const { data, isFetching } = useQuery({
    queryKey: ['currentUser'],
    queryFn: () => currentUserService()
  });

  return { data, isFetching };
}
