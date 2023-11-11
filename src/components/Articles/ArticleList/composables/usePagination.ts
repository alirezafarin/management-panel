import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

export function usePagination() {
  const route = useRoute();
  const currentPage = ref<string>((route.params.page as string) || '1');

  watch(
    () => route.params.page,
    async () => {
      currentPage.value = (route.params.page as string) || '1';
    },
  );

  return { currentPage };
}
