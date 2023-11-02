import { modalInjectionKey } from '@/components/DesignSystem/constants';
import type { IModalInject } from '@/components/DesignSystem/model';
import { en } from '@/dictionary/en';
import { useMutation, useQueryClient } from '@tanstack/vue-query';
import { inject } from 'vue';
import { deleteArticleService } from '../services';
import { useToast } from 'vue-toastification';

export function useDeleteArticle(slug: string) {
  const { setModal } = inject(modalInjectionKey) as IModalInject;
  const toast = useToast();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: () => deleteArticleService(slug),
    onSuccess: (data) => {
      toast.success(en.articles.deletedSuccessfully);
      queryClient.invalidateQueries({ queryKey: ['articles'] });
    },
    onError: (error) => {
      // toast.error('error');
    }
  });

  const deleteArticle = () =>
    setModal({
      showModal: true,
      title: en.articles.deleteArticle,
      description: en.articles.sureToDelete,
      modalProps: { 'ok-variant': 'danger', 'cancel-variant': 'outline-secondary' },
      handleOk: () => mutate()
    });

  return { deleteArticle };
}
