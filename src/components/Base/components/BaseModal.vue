<script setup lang="ts">
import { inject } from 'vue';
import { modalInjectionKey } from '../constants';
import type { IModalInject } from '../model';
import { en } from '@/dictionary/en';

const { modalValues } = inject(modalInjectionKey) as IModalInject;
</script>

<template>
  <b-modal
    centered
    :ok-variant="modalValues.modalProps['ok-variant']"
    :cancel-variant="modalValues.modalProps['cancel-variant']"
    v-model="modalValues.showModal"
    :title="modalValues.title"
    @ok="modalValues.handleOk?.()"
  >
    <p class="my-4">{{ modalValues.description }}</p>
    <template #modal-ok> {{ en.yes }} </template>
    <template #modal-cancel> {{ en.no }} </template>
  </b-modal>
</template>
