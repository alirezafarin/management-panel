import { en } from '@/dictionary/en';
import { useMutation, useQueryClient } from '@tanstack/vue-query';
import { inject } from 'vue';
import { deleteArticleService } from '../services';
import { useToast } from 'vue-toastification';
import { modalInjectionKey } from '@/components/Base/constants';
import type { IModalInject } from '@/components/Base/model';
import { queryKeys } from '@/constants';

export function useDeleteArticle(slug: string) {
  const { setModal } = inject(modalInjectionKey) as IModalInject;
  const toast = useToast();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: () => deleteArticleService(slug),
    onSuccess: () => {
      toast.success(en.articles.deletedSuccessfully);
      queryClient.invalidateQueries({ queryKey: [queryKeys.articles] });
    },
  });

  const deleteArticle = () =>
    setModal({
      showModal: true,
      title: en.articles.deleteArticle,
      description: en.articles.sureToDelete,
      modalProps: { 'ok-variant': 'danger', 'cancel-variant': 'outline-secondary' },
      handleOk: () => mutate(),
    });

  return { deleteArticle };
}
