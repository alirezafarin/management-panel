import { queryKeys } from '@/constants';
import { useQuery } from '@tanstack/vue-query';
import { currentUserService } from '../services';

export function useCurrentUser() {
  const { data, isFetching } = useQuery({
    queryKey: [queryKeys.currentUser],
    queryFn: () => currentUserService(),
  });

  return { data, isFetching };
}
