<script setup lang="ts">
import CreateEditArticle from '@/components/Articles/CreateEditArticle/CreateEditArticle.vue';
import { useEditArticle } from '@/components/Articles/CreateEditArticle/composables';
import CustomOverlay from '@/components/DesignSystem/components/CustomOverlay.vue';
import { en } from '@/dictionary/en';

const { isFetching } = useEditArticle();
</script>

<template>
  <CustomOverlay :show="isFetching">
    <CreateEditArticle :title="en.articles.editArticle" />
  </CustomOverlay>
</template>
