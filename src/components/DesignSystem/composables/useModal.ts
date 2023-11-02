import { provide, ref } from 'vue';
import { modalInjectionKey } from '../constants';
import type { IModal } from '../model';

export function useModal() {
  const modalValues = ref<IModal>({
    showModal: false,
    title: '',
    description: '',
    modalProps: {},
    handleOk: () => {}
  });

  function setModal(modalSetValues: IModal) {
    modalValues.value = { ...modalValues.value, ...modalSetValues };
  }

  provide(modalInjectionKey, {
    setModal,
    modalValues
  });
}
