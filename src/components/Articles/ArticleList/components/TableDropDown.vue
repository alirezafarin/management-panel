<script lang="ts" setup>
import CustomDropDown from '@/components/DesignSystem/components/CustomDropDown.vue';
import type { IDropDownOption } from '@/components/DesignSystem/model';
import { useRouter } from 'vue-router';
import { useDeleteArticle } from '../composables';

const { slug } = defineProps<{ slug: string }>();
const router = useRouter();

const navigateToEdit = () => router.push({ name: 'editArticle', params: { slug } });
const { deleteArticle } = useDeleteArticle(slug);

const options: IDropDownOption[] = [
  { id: 0, text: 'edit', onClick: navigateToEdit },
  { id: 1, text: 'divider' },
  { id: 2, text: 'delete', onClick: deleteArticle }
];
</script>

<template>
  <CustomDropDown class="ml-2" variant="dark-blue" :options="options" />
</template>
