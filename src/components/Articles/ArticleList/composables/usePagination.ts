import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

export function usePagination() {
  const route = useRoute();
  const currentPage = ref<string>((route.params.page as string) || '1');

  const linkGen = (pageNum: number) => {
    return pageNum === 1 ? '/' : `/articles/${pageNum}`;
  };

  watch(
    () => route.params.page,
    async () => {
      currentPage.value = (route.params.page as string) || '1';
    }
  );

  return { linkGen, currentPage };
}
