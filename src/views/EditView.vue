<script setup lang="ts">
import CreateEditArticle from '@/components/Articles/CreateEditArticle/CreateEditArticle.vue';
import { useEditArticle } from '@/components/Articles/CreateEditArticle/composables';
import BaseOverlay from '@/components/Base/components/BaseOverlay.vue';
import { en } from '@/dictionary/en';

const { isFetching } = useEditArticle();
</script>

<template>
  <BaseOverlay :show="isFetching">
    <CreateEditArticle :title="en.articles.editArticle" />
  </BaseOverlay>
</template>
