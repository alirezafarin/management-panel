import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

export function usePagination() {
  const route = useRoute();
  const currentPage = ref(route.params.page || 1);

  const linkGen = (pageNum: number) => {
    return pageNum === 1 ? '/' : `/articles/${pageNum}`;
  };

  watch(
    () => route.params.page,
    async () => {
      currentPage.value = route.params.page || 1;
    }
  );

  return { linkGen, currentPage };
}
