<script lang="ts" setup>
import BaseDropDown from '@/components/Base/components/BaseDropDown.vue';
import type { IDropDownOption } from '@/components/Base/model';
import { useRouter } from 'vue-router';
import { useDeleteArticle } from '../composables';
import { en } from '@/dictionary/en';

const { slug } = defineProps<{ slug: string }>();
const router = useRouter();

const navigateToEdit = () => router.push({ name: 'editArticle', params: { slug } });
const { deleteArticle } = useDeleteArticle(slug);

const options: IDropDownOption[] = [
  { id: 0, text: en.articles.edit, onClick: navigateToEdit },
  { id: 1, text: 'divider' },
  { id: 2, text: en.articles.delete, onClick: deleteArticle },
];
</script>

<template>
  <BaseDropDown class="ml-2" variant="dark-blue" :options="options" />
</template>
