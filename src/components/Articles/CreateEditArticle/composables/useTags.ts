import { useQuery } from '@tanstack/vue-query';
import { fetchTagsService } from '../services';
import { computed } from 'vue';
import { queryKeys } from '@/constants';

export function useTags() {
  const { data: tags, isFetching: isFetchingTags } = useQuery({
    queryKey: [queryKeys.tags],
    queryFn: () => fetchTagsService(),
  });

  const tagList = computed(() => {
    if (tags.value) {
      return tags.value.tags.map((tagItem) => ({ value: tagItem, text: tagItem }));
    }
    return [];
  });

  return {
    isFetchingTags,
    tags: tagList,
  };
}
